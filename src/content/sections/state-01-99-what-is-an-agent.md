---
issue: state-01
section_number: 99
section_marker: "§ ∞"
title: "What Is an Agent?"
summary: "The open question neither day answered. A context, a loop, tool-calling, the relentlessness. Maybe a teleological aspect — instructions with a purpose. Maybe a cybernetics view of command and control. Still the question."
pull_quote: "Instructions, a teleological aspect. Maybe there's a cybernetics view of command and control underneath it. Maybe that's the framing. What is an agent — it's still the question."
concepts:
  - what-is-an-agent
  - context
  - memory
  - sub-agents
  - knowledge-graph
  - inference-cost
---

The open questions I'm leaving the conference with.

What is an agent actually? What does it know? What is it searching? I liked the Hermes project a lot because of the way it thinks about memory and the way it models your persona, but there's a deeper knowledge-graph thing underneath — Nyah Macklin's Neo4j talk got at part of it with context graphs as decision traces, though she was talking more about auditability than memory. What does the structure actually look like? SQL database? NoSQL? Graph? Is there a way an agent can remember interrelated things?

Sub-agents — the equivalent of forking and pruning. I think there's a whole unexplored area around taking these chains of messages and compressing them. Are sub-agents different models, better at certain things, better at parallel tool-calling? Are they faster? Cheaper? The obvious case: "I have this thing that burns 50,000 tokens to reach a 200-token answer, so I can just get rid of the stuff in the middle." What are sub-agents, what is memory, what is context — still ripe for deeper thought.

And then: what is the user interface for an agent? The Telegram-chat pattern clicks in people's minds. There's a personality. It's not flirting with you. It's not bullshitting you. It's not hanging out. Because text has become our dominant way of socially interacting, putting the agent on the other side of that made it real. It's a very skill-based thing — and I don't know if *skills* is the right term there either. I do think there's a third thing in the middle where you get some of the MCP authentication experience through a voice- or text-chat interface where you have a back-and-forth and it learns about you. Another three forming.

Inference is shifting too. Sarah Chieng's Cerebras talk named it — speed has been stuck at 50–150 tokens per second for two years while capability grew. Codex-Spark at 1,200 tokens per second is a regime change. I didn't use it yet, but the direction is inference trending toward zero cost. Right now we're super, super starved for it. Who knew how much compute we actually needed? Who knew how many questions we needed to ask? We're in an intelligence scarcity, as it turns out. Once everything is smart, then that's where we're going. Everything is going to be smart, and it's going to look like what we call agents now.

So what is an agent anyway? There's a context, there's the loop, there's the tool calling, and there's the ability to solve problems in creative ways — the relentlessness. There's the instruction. Maybe that's what it is: instructions, a teleological aspect. Maybe there's a cybernetics view of command and control underneath it. Maybe that's the framing.

What is an agent — it's still the question.
