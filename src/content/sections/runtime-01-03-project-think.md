---
issue: runtime-01
section_number: 3
section_marker: "Feature 03"
title: "Project Think"
summary: "An ephemeral agent is a tool. A durable agent is infrastructure. The execution ladder, sub-agents, session trees, self-authored extensions."
pull_quote: "An ephemeral agent is a tool. A durable agent is infrastructure."
concepts:
  - project-think
  - execution-ladder
  - sub-agent
  - workspace
---

Contemporary coding agents operate within single sessions on local machines, requiring repeated manual setup and serving only individual users. Project Think establishes primitives for persistent, multi-tenant agent infrastructure.

### The Execution Ladder

Agents operate across graduated sandbox tiers, ascending only when tasks demand:

1. **Workspace** — Persistent filesystem with SQLite backing, surviving across sessions
2. **Isolate** — Fast, stateless V8 execution for routine operations
3. **npm Runtime** — Package resolution when dependencies are needed
4. **Browser** — Full Chrome DevTools Protocol for interaction-based tasks
5. **Sandbox** — Linux containers for legacy dependencies

Most operations remain at rung 2. Climbing higher increases cost and security surface simultaneously.

### Sub-agents and Session Trees

Agents create isolated children with dedicated storage and typed RPC communication to parents. Sessions form tree structures where branches can be managed independently, with full-text searchable histories resembling version-controlled conversations.

### Self-authored Extensions

Agents can generate custom tools at runtime, discovering needs and extending capabilities dynamically. New tools inherit sandbox restrictions, providing technical safeguards though philosophical questions remain.
