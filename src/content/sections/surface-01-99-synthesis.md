---
issue: surface-01
section_number: 99
section_marker: "§ ∞"
title: "A Synthesis: The Stack"
summary: "Removing brand affiliations reveals three distinct layers — payload, transport, distribution."
concepts:
  - payload-layer
  - transport-layer
  - distribution-layer
---

Removing brand affiliations reveals three distinct layers.

**Payload layer**: the UI description format itself. HTML in iframes (MCP Apps). Constrained JSON from catalogs (json-render). Native component blueprints (A2UI). This choice determines model generation, host rendering, and styling ownership.

**Transport layer**: how payloads and state move. JSON-RPC over postMessage (MCP Apps). Agent-to-Agent protocol. Bidirectional state deltas (AG-UI). This choice determines agent-interface synchronization and interface-to-agent communication.

**Distribution layer**: the surface users encounter. ChatGPT, Claude, Goose, VS Code, Cursor, custom hosts. This choice determines user ownership.

For tool developers, the practical question becomes which layer warrants investment. Conservative approach: MCP Apps as transport, plain HTML as payload, universal host support. Ships today, works everywhere, bounded capabilities.

Ambitious approach: json-render or A2UI as payload, MCP Apps as transport, known distribution surfaces. Richer interfaces, more development, pre-1.0 exposure.

Most ambitious approach: all three layers with AG-UI maintaining state synchronization. This represents the agentic application runtime that MCP Apps documentation gestured toward without fully describing. It doesn't exist as a unified system yet. Someone will ship it.

The conversation is no longer constrained by chat log architecture. It has become a surface where other surfaces compose. Each of these proposals answers the fundamental question in its own dialect: what should agents be permitted to display? That they differ confirms the question merits asking.
