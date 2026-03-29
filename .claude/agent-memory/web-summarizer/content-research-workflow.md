---
name: Content Research Workflow for AI-Pming
description: Effective workflow for researching and summarizing educational content for non-technical audiences
type: feedback
---

## Research Workflow Established

Use this workflow when researching topics for ai-pming educational articles:

1. **Project Context First** — Read syllabus, brand brief, and keyword research with ctx_batch_execute to understand topic scope, audience, tone, and success metrics
2. **Multi-Source Search** — Use mcp__exa__web_search_exa (3+ queries) to find diverse authoritative sources covering different angles
3. **Index & Deep-Dive** — Use ctx_fetch_and_index on 4-6 top sources to index content for searchable extraction
4. **Query Synthesis** — Use ctx_search with 8-10 targeted queries to extract key concepts, examples, and relationships
5. **Comprehensive Summary** — Write single document covering: definitions, hierarchy/relationships, practical examples, common confusion, decision frameworks, content writer notes, SEO targets

**Why:** This approach keeps raw content in sandbox (saving context), produces well-organized research ready for next pipeline step (content-scoper), and captures both foundational knowledge AND practical application guidance.

**Key insight:** For beginner-focused content, research must include "why people confuse this" and "how to choose" frameworks—not just definitions.

## Example: AI vs ML vs DL Research

- Identified nesting doll hierarchy as core mental model
- Captured 4 relatable real-world examples spanning simple (email filter) to complex (ChatGPT)
- Included decision tree for technology selection (practical for PMs/business leaders)
- Highlighted generative AI confusion as barrier to understanding
- Provided content writer with specific SEO keywords, tone requirements, learning aids

**Result:** 294-line comprehensive research summary ready for content-scoper filtering.
