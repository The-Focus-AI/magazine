---
issue: surface-01
section_number: 6
section_marker: "§ VI"
title: "On AG-UI: The Wire"
summary: "CopilotKit's AG-UI addresses a harder problem: maintaining continuous bidirectional state synchronization between agent and interface."
concepts:
  - ag-ui
sources:
  - type: spec
    slug: ag-ui
---

While MCP Apps and A2UI debate what to render and where to place boundaries, CopilotKit's AG-UI protocol addresses a harder problem: maintaining continuous bidirectional state synchronization between agent and interface.

Consider a generated dashboard where users apply regional filters. The agent must know this filter exists because the next query — "Show top customers" — depends on it. Under MCP Apps, UI callbacks happen through discrete tool invocations. Under json-render, return paths remain unspecified. AG-UI describes a stream: agents emit state deltas that interfaces apply; interfaces emit state deltas agents consume. Both maintain a shared model.

The protocol's primitives are StateDelta messages over WebSocket or Server-Sent Events. While CopilotKit provides the reference framework, the specification intends independence.

A March 2026 analysis articulated the clearest framing: "json-render solves what to render; AG-UI solves how to coordinate." These aren't competitive frameworks — they occupy different layers. Production agentic interfaces at maturity will integrate all three: declarative payload formats, transport mechanisms, and distribution surfaces.

AG-UI's challenge is growing beyond its origins. A protocol authored primarily by one company requires independent implementers to become infrastructure. MCP Apps achieved this through the formal treaty. A2UI is reaching it through enterprise adoption. AG-UI pursues the hardest path: proving correctness about problems nobody else had named.
