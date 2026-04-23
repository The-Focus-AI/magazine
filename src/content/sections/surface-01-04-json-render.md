---
issue: surface-01
section_number: 4
section_marker: "§ IV"
title: "On json-render: The Constrained Palette"
summary: "Vercel Labs rejects HTML generation entirely. Models select from a developer-defined component catalog, with constraints enforced through Zod schemas."
concepts:
  - json-render
  - generative-ui
sources:
  - type: repo
    slug: json-render
---

Vercel Labs' json-render, released open-source in January 2026, rejects HTML generation entirely. Instead, models select from a developer-defined component catalog, with constraints enforced through Zod schemas.

The framework operates in three layers: developers define catalogs in Zod (which serves simultaneously as LLM schema and type contract); language models emit flat JSON trees referencing only catalog entries; renderers — available for React, Vue, Svelte, Solid, React Native and others — map those elements to concrete implementations. A shadcn catalog provides 36 pre-built components. Renderers exist for PDF, HTML email, Remotion video, Satori images, and Three Fiber.

This catalog-plus-schema structure guards against generative UI's central risk: preventing models from emitting executable code. The LLM generates data, not executable output.

json-render and MCP Apps aren't competitive. The repository includes an `examples/mcp` demonstrating a pre-bundled React app served as HTML via MCP Apps with json-render running inside. The specification handles transport; the framework handles payload.

The caveat: json-render remains pre-1.0 (v0.14). Wire formats will evolve. Prototypes are appropriate; long-term bets should anticipate migration.
