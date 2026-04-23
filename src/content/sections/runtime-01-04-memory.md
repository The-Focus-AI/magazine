---
issue: runtime-01
section_number: 4
section_marker: "Feature 04"
title: "Memory as Infrastructure"
summary: "Agent knowledge accumulation typically disappears after sessions end. Memory profiles make it durable, shareable, and propagatable."
concepts:
  - memory-profile
---

Agent knowledge accumulation typically disappears after sessions end. Agent Memory preserves this as durable infrastructure, accessible across sessions, agents, and team members.

**Memory profiles** function as named containers attachable to agents but optionally shared. Development teams can propagate institutional knowledge: conventions discovered by one agent become available to colleagues' agents. Code review bots and coding agents share memory so feedback shapes future generation.

### Core Operations

- **Ingest:** Bulk path for context compaction, converting conversations to memories
- **Remember:** Spot storage of important information during operation
- **Recall:** Retrieval scoped to current query requirements without conversation blocking
- **List & forget:** Human oversight mechanisms for memory management

Internal Cloudflare usage demonstrates the benefit: agents learn when previous comments were misguided or when flagged patterns had legitimate justification, resulting in quieter, more precise future feedback.

### Field Guide

**Code Mode** — Architectural pattern providing single "write code" tools with typed APIs rather than individual tool menus.

**Durable Object** — Stateful primitive: single-threaded, globally addressable object with persistent storage backing each Agent.

**Dynamic Worker** — Runtime-instantiated Worker executing model-specified code in fresh isolates.

**Execution Ladder** — Project Think's graduated sandbox hierarchy climbed only when necessary.

**Memory Profile** — Named container of agent memories, shareable across agents and humans.

**Project Think** — Preview-stage package for long-running, durable agent infrastructure.

**Sub-agent** — Isolated child agent with dedicated SQLite and typed parent communication.

**Workspace** — Persistent filesystem surviving across sessions and machines.
