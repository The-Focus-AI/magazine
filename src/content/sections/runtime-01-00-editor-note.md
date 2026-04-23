---
issue: runtime-01
section_number: 0
section_marker: "Editor's Note"
title: "The agent has always been writing"
summary: "Large language models possess extensive training on production code but minimal exposure to bespoke tool schemas. Meet them where they're fluent."
---

The industry has operated under a flawed assumption: that AI agents fundamentally work by calling tools from a menu. Cloudflare's 2025–26 releases demonstrate this model was misguided. The actual primitive is code itself.

Large language models possess extensive training on production code but minimal exposure to bespoke tool schemas. Rather than asking models to use unfamiliar formats, platforms should meet them where they're genuinely fluent: actual programming languages.

This shift has structural implications beyond token efficiency. When agents write executable code, that code requires a secure runtime. This enables agents to operate as persistent infrastructure rather than ephemeral tools, decoupled from individual sessions or devices.
