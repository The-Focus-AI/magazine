---
issue: harness-01
section_number: 0
section_marker: "Preface"
title: "On the Gen-3 Claim"
summary: "Ben Davis stood on stage in Miami and said we've been writing AI software wrong for three years. This issue takes that claim seriously and builds the field manual."
draft: true
---

<figure class="figure-span">
  <img src="/images/harness/harness-01-opener.png" alt="Three apparatuses in a row — a small wrapper tool, a mid-size tool bench with hands, a full machine with a figure inside." />
  <figcaption>Preface · The three apparatuses. Gen 1, Gen 2, Gen 3. The unit of shipping is on the right.</figcaption>
</figure>

Ben Davis stood on stage at AI Engineer Miami and said we've been writing AI software wrong for three years. His frame: three generations.

**Gen 1** — the wrapper. The raw OpenAI SDK. BAML. You send a prompt, you get tokens back, you parse them. Everything else is yours.

**Gen 2** — the tool-call loop. The Vercel AI SDK, and most of the "agent frameworks" that followed. Wrap the model in a loop, give it typed tool schemas, let it pick. This is where most production AI apps live today.

**Gen 3** — the coding-agent SDK. Pi. OpenCode. The Claude Agent SDK. The primitives aren't tool schemas anymore; they're a *whole coding agent* — a filesystem, a shell, artifact storage, code it can download and run. Your "program" isn't code-plus-tools. It's a directory of markdown skill files, a few helper shell scripts, and a coding agent as the runtime.

HARNESS is the builder's field manual for Gen 3. Forthcoming.
