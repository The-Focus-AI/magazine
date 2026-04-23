---
issue: surface-01
section_number: 5
section_marker: "§ V"
title: "On A2UI: The Native Tongue"
summary: "Google's argument: iframes are the wrong architectural unit. Transmit native component blueprints. In multi-agent, multi-surface environments, opacity becomes technical debt."
concepts:
  - a2ui
sources:
  - type: spec
    slug: a2ui
---

Google's A2UI, announced December 2025, offers the most substantial disagreement in this issue. Its fundamental premise: iframes represent the wrong architectural unit.

A2UI contends that iframes contain opaque HTML rendered by external code within a sandbox. While sandboxing provides security, it creates a legibility boundary. Host applications cannot style content to match their design systems. Host accessibility trees cannot reach inside. Agents in multi-agent systems cannot parse rendered information — they only know something exists. Models lose visibility into their own output.

A2UI's alternative: transmit native component blueprints. JSON payloads describe which components a client should compose with which properties bound to which data. Clients — React apps, Flutter apps, native iOS apps — render using existing component libraries. Agent output inherits host styling. Accessibility emerges from host implementation. Other agents parsing the payload see structured information rather than opaque frames.

Transport remains deliberately unspecified. A2UI payloads can travel over Agent-to-Agent protocol, AG-UI, or REST. Google announced an MCP Apps bridge: servers could serve A2UI blueprints instead of HTML, with hosts rendering natively. The v0.9 draft explicitly supports MCP, A2A, AG-UI, SSE, and WebSocket transports.

Early implementations live within Google — Opal, Gemini Enterprise. Pre-1.0 churn is evident: the jump from 0.8 to 0.9 renamed all four message types. Declarative UI protocols risk every implementation shipping identical renamings.

The conceptual advancement remains sound: in multi-agent, multi-surface environments, opacity becomes technical debt. The shared language is native to everyone in the room.
