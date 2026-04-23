---
vertical: local
issue_number: 1
issue_title: "Inference or Die"
subtitle: "A tract on running it yourself"
published: 2026-04-25
voice: architecture
tagline: "No centralization. No data exfiltration. Cheap. The Linux moment for AI looks like this."
summary: "Three tiers of inference: hosted APIs, self-hosted clusters, and the GPU in your laptop. This issue argues that the third tier has been underrated — and that a consumer-grade MacMini plus an open-weights model is already enough to unmake a chunk of the SaaS stack."
cover_color: "#5a3d8a"
draft: true
cross_refs:
  - vertical: state
    issue: 1
    reason: "The hallway story on local inference as an attack vector — and its positive inverse — is where this argument started."
  - vertical: harness
    issue: 1
    reason: "Gen-3 SDKs assume cheap inference. Local changes the economics."
  - vertical: wire
    issue: 1
    reason: "MCP / skills / code mode are transport-agnostic. Local-first changes which of them you pick."
---

Hosted. Self-hosted. On-device. Three tiers, and we have spent too much time pretending the third one doesn't matter.

- The economics — when electricity is your only marginal cost
- The hardware — MacMini, Framework, Strix Halo, and the NVIDIA DGX Spark
- The models — gpt-oss, Qwen, Llama, and the open-weights bench
- The attack surface — local models as a payload, and why that's coming
- The counterweight — what flips when inference is free
