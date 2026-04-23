---
issue: surface-01
section_number: 3
section_marker: "§ III"
title: "On the Apps SDK: The Storefront"
summary: "The API as a listing. The model becomes the discovery mechanism. The unresolved question remains policy rather than technical."
concepts:
  - openai-apps-sdk
sources:
  - type: spec
    slug: openai-apps-sdk
---

OpenAI's Apps SDK, released simultaneously with the MCP Apps proposal, employs "the API as a listing" concept. MCP provides the backbone — tools over JSON-RPC, components as embedded resources, models invoking tools during conversation. The differentiation emerges above this layer.

Discovery operates first-party: the model consumes tool metadata identically to first-party connectors, enabling natural-language discovery and launcher ranking. Conversation awareness is built-in: structured content and component state flow through conversation turns, allowing models to reference identifiers, re-render components, and reason across results.

An MCP server connected to ChatGPT functions as a distribution listing rather than a discrete tool. The model becomes the discovery mechanism.

This explains the apparent détente of November: a standardized extension benefits OpenAI more than forking would. Developers can run identical servers across Claude, Goose, and VS Code, then promote them in ChatGPT without migration overhead. The specification enables interoperable listings; attention concentrates on the storefront itself.

The unresolved question remains policy rather than technical: ranking algorithms currently operate through language models with opaque priors. Developers familiar with App Store review processes recognize this trajectory.
