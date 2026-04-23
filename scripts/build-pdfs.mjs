#!/usr/bin/env node
/**
 * Post-build step: for every issue, spin up a local static server against
 * ./dist, use pagedjs-cli (which drives puppeteer) to render /{slug}/print/
 * to ./dist/{slug}.pdf, then tear the server down.
 *
 * Run after `astro build`:
 *   node scripts/build-pdfs.mjs
 */
import http from 'node:http';
import { readdirSync, existsSync, statSync, readFileSync, mkdirSync, copyFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { spawn } from 'node:child_process';

const DIST = resolve('./dist');
const PORT = 4799;

function contentType(p) {
  if (p.endsWith('.html')) return 'text/html; charset=utf-8';
  if (p.endsWith('.css')) return 'text/css';
  if (p.endsWith('.js')) return 'application/javascript';
  if (p.endsWith('.png')) return 'image/png';
  if (p.endsWith('.jpg') || p.endsWith('.jpeg')) return 'image/jpeg';
  if (p.endsWith('.svg')) return 'image/svg+xml';
  if (p.endsWith('.woff2')) return 'font/woff2';
  if (p.endsWith('.woff')) return 'font/woff';
  return 'application/octet-stream';
}

function startServer() {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://localhost:${PORT}`);
    let path = decodeURIComponent(url.pathname);
    if (path.endsWith('/')) path += 'index.html';
    let file = join(DIST, path);
    if (!existsSync(file) || !statSync(file).isFile()) {
      // Try path + '/index.html' fallback
      const alt = join(DIST, path, 'index.html');
      if (existsSync(alt)) file = alt;
      else {
        res.statusCode = 404;
        res.end('not found');
        return;
      }
    }
    res.setHeader('Content-Type', contentType(file));
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(readFileSync(file));
  });
  return new Promise((ok, fail) => {
    server.listen(PORT, () => ok(server));
    server.on('error', fail);
  });
}

function findIssues() {
  // Discover issue slugs by listing ./dist directories with /print/index.html
  const entries = readdirSync(DIST);
  const slugs = [];
  for (const entry of entries) {
    const printHtml = join(DIST, entry, 'print', 'index.html');
    if (existsSync(printHtml)) slugs.push(entry);
  }
  return slugs.sort();
}

function runPagedCli(url, outPath) {
  return new Promise((ok, fail) => {
    const proc = spawn(
      'npx',
      [
        '--yes',
        'pagedjs-cli',
        url,
        '-o',
        outPath,
        '--browserArgs',
        '--no-sandbox,--disable-gpu',
      ],
      { stdio: 'inherit' }
    );
    proc.on('exit', (code) => {
      if (code === 0) ok();
      else fail(new Error(`pagedjs-cli exited ${code} for ${url}`));
    });
  });
}

async function main() {
  if (!existsSync(DIST)) {
    console.error(`No ./dist — run \`astro build\` first.`);
    process.exit(1);
  }
  const slugs = findIssues();
  if (slugs.length === 0) {
    console.error('No /print/ routes found under ./dist. Did you build?');
    process.exit(1);
  }

  console.log(`Starting static server on :${PORT}…`);
  const server = await startServer();

  try {
    for (const slug of slugs) {
      const url = `http://localhost:${PORT}/${slug}/print/`;
      const out = join(DIST, `${slug}.pdf`);
      console.log(`\n→ ${slug}  →  ${out}`);
      await runPagedCli(url, out);
    }
    console.log(`\n✓ Built ${slugs.length} PDFs in ./dist`);
  } finally {
    server.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
