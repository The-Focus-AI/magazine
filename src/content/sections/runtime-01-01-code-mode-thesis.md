---
issue: runtime-01
section_number: 1
section_marker: "Feature 01"
title: "The Code Mode Thesis"
summary: "Two tools only. search and execute. A 99.9% reduction from naive implementations. 1,000-token footprint regardless of endpoint count."
pull_quote: "If a language model is a program that completes text, and code is the text it was most carefully trained on, why are we still asking it to fill out forms?"
concepts:
  - code-mode
  - instruction-budget
---

Traditional MCP servers present tools as discrete options in a catalog, consuming tokens in context for each tool definition. Cloudflare's infrastructure — roughly 2,500 API endpoints — would require approximately 1.17 million tokens if implemented this way, exceeding every production model's context window.

The solution: provide two tools only. A `search` function returns relevant OpenAPI specification slices on demand. An `execute` function runs JavaScript the model authors. Pagination, retries, conditional logic, and API chaining happen within code blocks rather than through narrated tool sequences.

**The result:** A fixed ~1,000-token footprint regardless of endpoint count. A 99.9% reduction from naive implementations. Performance improvements beyond mere efficiency — models prove more capable writing familiar TypeScript than interpreting synthetic tool schemas.

The implementation presents code in a typed JavaScript environment where tools become methods on a `codemode.*` namespace with auto-generated TypeScript definitions. OpenAPI `$ref` structures are pre-resolved. Authentication remains host-side, never embedded in model-generated code.
