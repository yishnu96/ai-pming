---
name: Transformer research execution (2026-03-29)
description: Successful web research workflow for "How LLMs Work: The Transformer" using context-mode tools
type: reference
---

## Research Workflow Executed

**Task:** Research "How LLMs Work: The Transformer" for article 1.6 (beginner-friendly, non-technical professionals)

**Tools Used:**
- `mcp__exa__web_search_exa` (3 parallel searches for breadth)
- `mcp__plugin_context-mode_context-mode__ctx_fetch_and_index` (5 sources indexed into searchable KB)
- `mcp__plugin_context-mode_context-mode__ctx_search` (7 targeted queries across indexed content)

**Result:** 8-section research summary saved to `E:\ai-pming\research\how-llms-work-the-transformer-research.md`

## Key Findings for This Topic

**Core concepts to explain:**
1. Transformers process all tokens in parallel (vs. RNNs' sequential processing)
2. Self-attention is a "spotlight mechanism" answering "which tokens to focus on and how much"
3. Multi-head attention = 8 parallel spotlights learning different relationships
4. 2017 breakthrough solved two problems: speed (parallelization on GPUs) + long-range dependencies
5. Every modern AI system (GPT-4, Claude, Gemini) uses Transformer architecture

**Beginner-friendly analogies that resonated across sources:**
- Spotlight mechanism for attention
- Reading comprehension (which parts of text are relevant)
- Different people reading same sentence each noting different relationships (multi-head)
- Direct connections vs. sequential chains (RNN bottleneck)

**Historical anchor:** Vaswani et al. 2017 "Attention Is All You Need" paper - 93,949 citations, trained in 3.5 days on 8 GPUs vs. weeks for RNNs

## Sources Quality Assessment

**Strong for beginners:**
- DigitalOcean (clear architecture diagram, encoder/decoder breakdown)
- TutorialQ (practical token processing, connection to LLM usage)
- Libertify (RNN vs. Transformer comparison, multi-head explanation, 2017 context)

**Strong for technical reference (less beginner-friendly):**
- Harvard NLP "Annotated Transformer" (mathematical precision but code-heavy)

**All sources converge on:**
- Parallelization as core advantage
- Attention as core mechanism
- 2017 as pivotal year

## Tips for Future Transformer Topics

- Context-mode indexing lets you batch-fetch 5 sources without flooding context window
- Search queries for Transformers should explicitly ask for "analogy", "simple explanation", "why breakthrough" to surface beginner-friendly content
- Multi-head attention always needs a parallel/multiple-lens analogy to land
- RNN vs. Transformer comparison is the "why it mattered" story—don't skip it
