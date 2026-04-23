---
issue: surface-01
section_number: 1
section_marker: "§ I"
title: "On MCP Apps: The Treaty"
summary: "Anthropic and OpenAI co-authored SEP-1865. Iframes as the lowest common denominator. Straightforward standards that ship prove more valuable than elaborate specifications that remain theoretical."
concepts:
  - mcp
  - mcp-apps
sources:
  - type: spec
    slug: sep-1865-mcp-apps
---

Two major competitors — Anthropic and OpenAI — co-authored SEP-1865, the MCP Apps Extension, alongside the MCP-UI community project. This specification introduces a `ui://` URI scheme for declaring UI resources. When models invoke tools, hosts render the declared HTML within sandboxed iframes, with components communicating back through the same JSON-RPC messaging already present in MCP, transmitted via `postMessage`.

The specification deliberately maintains simplicity: iframes represent the lowest common denominator across hosts, sandboxing provides shared security assumptions, and JSON-RPC integration uses existing infrastructure. This intentional restraint — avoiding novel approaches in favor of compatibility — enabled rapid adoption across Claude, ChatGPT, Goose, and VS Code.

However, the treaty deliberately defers complex problems. It doesn't specify how UI and agent coordinate state beyond individual tool invocations. It provides no mechanism for agents in multi-agent systems to parse on-screen information. It assumes pre-bundled HTML frontends or prompt-generated code.

Yet straightforward standards that ship prove more valuable than elaborate specifications that remain theoretical. For developers requiring their dashboards to function across major clients without multiple implementations, this foundation provides essential ground.
