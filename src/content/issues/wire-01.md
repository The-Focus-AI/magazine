---
vertical: wire
issue_number: 1
issue_title: "The Three-Legged Stool"
subtitle: "MCP, skills, code mode — how agents access capability"
published: 2026-04-25
voice: architecture
tagline: "Not versus. Plus. The three mechanisms sit on different legs of the same stool."
summary: "The Twitter war between MCP and skills evangelists, resolved. Laurie Voss's data: correctness is a wash; cost and latency are not. The real answer underneath is code mode — letting the agent write TypeScript against a type definition and run it in a sandboxed isolate. WIRE maps all three onto one composition layer."
cover_color: "#a65a1c"
draft: true
cross_refs:
  - vertical: surface
    issue: 1
    reason: "MCP Apps — the UI rendering layer on top of the same transport."
  - vertical: runtime
    issue: 1
    reason: "Code mode's runtime primitives, implemented at Cloudflare."
  - vertical: harness
    issue: 1
    reason: "How Gen-3 harnesses compose MCP, skills, and code mode into a single loop."
---

Three legs. Not a war.

- The MCP leg — when you want it, when you don't
- The skills leg — short beats long, and why
- The code-mode leg — search plus execute, the convergence point
- The stool — composition, and the decision matrix
- Field guide — picking legs per task
