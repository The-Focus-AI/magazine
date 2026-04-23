# The Focus.AI Magazines

Publication line covering the state and shape of AI engineering. Six verticals:

- **STATE** — Reportage on where AI engineering is right now.
- **SURFACE** — UI protocols and rendering.
- **RUNTIME** — The substrates that hold thinking machines.
- **HARNESS** — The builder's practice of working with agent-native SDKs.
- **LOCAL** — Inference sovereignty: hosted, self-hosted, on-device.
- **WIRE** — How agents access capability.

Deployed at **magazine.thefocus.ai** (GitHub Pages).

## Structure

- `src/content/issues/` — One markdown file per issue (cover + metadata + TOC).
- `src/content/sections/` — One markdown file per section inside an issue.
- `src/content/sources/` — Source citations (talks, blog posts, papers, repos).
- `src/content/concepts/` — Cross-cutting glossary.
- `src/pages/` — Astro page templates.
- `src/layouts/` — Shared layout components.
- `mcp-server/` — (forthcoming) MCP server exposing issues/sections/sources/concepts as tools.

Markdown is the source of truth. Astro renders the web view. The MCP server reads the same files.

## Voice

- **STATE** uses `voice: reportage` — first-person editorial, named speakers, opinions allowed.
- **Deep-dive issues** use `voice: architecture` — declarative third-person, heavily cited, system-focused.

## Local dev

```bash
npm install
npm run dev
```

## Deploy

Push to `main`. GitHub Actions builds and deploys to GitHub Pages. The `public/CNAME` file sets the custom domain.

## DNS

`magazine.thefocus.ai` CNAME → `the-focus-ai.github.io`.
