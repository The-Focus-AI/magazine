---
issue: runtime-01
section_number: 2
section_marker: "Feature 02"
title: "Inside the Dynamic Worker"
summary: "V8 isolates start in milliseconds, consume single-digit megabytes, and carry battle-tested security posture. The difference from containers is the whole business model."
pull_quote: "An isolate, not a container. The difference is the whole business model."
concepts:
  - dynamic-worker
  - isolate
---

Traditional approaches run AI-generated code in containers: hundreds of milliseconds startup time, hundreds of megabytes memory footprint. This architecture becomes economically unviable at consumer scale — maintaining warm containers per user or reusing containers across users both present unacceptable tradeoffs.

Cloudflare employed V8 isolates — existing infrastructure for running untrusted code at CDN edges. These start in milliseconds, consume single-digit megabytes, and carry battle-tested security posture.

The Dynamic Worker Loader enables Workers to instantiate fresh isolates with runtime-specified code on the same physical machine. No pool coordination. No sizing decisions. Execution occurs in the same region as the request, microseconds after code generation completes.

Default Dynamic Workers provide no filesystem access, no environment variables, and blocked outbound connectivity. Code gains capabilities only through explicit host-side fetcher handlers, ensuring secrets remain outside the sandbox.
