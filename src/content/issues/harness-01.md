---
vertical: harness
issue_number: 1
issue_title: "The Builder's Field Manual"
subtitle: "Three generations of AI SDK, and the one worth shipping into"
published: 2026-04-25
voice: architecture
tagline: "When the runtime is a coding agent, your program is a directory of skills."
summary: "Ben Davis named three generations of AI SDK: API wrapper, tool-schema agent loop, and full coding-agent SDK. This issue is the builder's guide to Gen 3 — OpenCode, Pi, the Claude Agent SDK — and what it means that your program is now a directory of markdown plus a few helper scripts."
cover_color: "#6d8c54"
draft: true
cross_refs:
  - vertical: runtime
    issue: 1
    reason: "Cloudflare's code-mode primitives are what Gen-3 harnesses assume underneath."
  - vertical: surface
    issue: 1
    reason: "MCP Apps is the UI layer that Gen-3 agents render into."
  - vertical: wire
    issue: 1
    reason: "Tool access — MCP, skills, code mode — is what Gen-3 harnesses compose."
---

The SDK is no longer an SDK. It's a harness, and the harness is a coding agent with a filesystem attached to it.

- Anatomy of Gen 3 — session primitives, event streams, skill directories
- MCP vs. skills vs. code mode — the decision matrix inside a harness
- The markdown program — how a directory becomes a deployable
- Harness as deployment target — from local dev to cron jobs in the cloud
- Field guide — picking between OpenCode, Pi, Claude Agent SDK
