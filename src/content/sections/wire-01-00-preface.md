---
issue: wire-01
section_number: 0
section_marker: "Preface"
title: "On the Three Legs"
summary: "Laurie Voss ran 500 evaluations. The MCP-vs-skills debate resolved with data — and the real answer was underneath both of them."
draft: true
---

<figure class="figure-span">
  <img src="/images/wire/wire-01-opener.png" alt="Three nodes arranged in a triangle — a bronze-filled circle, an open circle, a petrol-filled square — connected by many solid and dashed signal paths." />
  <figcaption>Preface · Three nodes, many paths. MCP, skills, code mode.</figcaption>
</figure>

Laurie Voss from Arize ran the evaluation the internet had been arguing about for months. Five hundred test runs. Three arms: MCP, a long skill file, a short skill file. Plus a baseline with no tool context at all.

Correctness was a wash. All arms landed in the high 80s.

The costs were not. MCP used roughly twice the tool calls, five times the latency, and six times the cost on complex tasks. The short opinionated skill file beat everything on speed. The baseline was shockingly good for famous CLIs like `gh` — the training data was doing most of the work.

The Twitter-worthy headline was *MCP is dead*. The real conclusion was more interesting and Voss landed it cleanly: it is not MCP versus CLI. It is MCP plus CLI. Real agents use both. The third thing underneath both — the one that kept showing up — is code mode: let the agent write TypeScript against a type definition and run it in a sandboxed isolate.

WIRE is the issue that takes those three legs seriously. Forthcoming.
