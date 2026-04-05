---
name: write-next
description: Runs the full 5-step content pipeline: research, scope, structure, write, and format the next article from keyword research. Writes only the article file then runs doc-formatter for final polish.
---

# Write Next Article

Run the full content pipeline for the next uncompleted keyword from `keywords/keyword-research.md`.

## Pipeline Steps

1. **Read keyword research** from `keywords/keyword-research.md`
2. **Pick the next uncompleted keyword** (skip ones that already have an article in `ai-unlocked/`)
3. **Find the matching syllabus topic** in `keywords/Updated_Syllabus.md`
4. **Research**: If the topic needs web research, use the `web-summarizer` agent. The summary should be written to `./research`.
5. **Scope**: Use the `content-scoper` agent to filter research to ONLY the target topic.
6. **Structure**: Use the `learning-architect` agent to build the educational structure. It returns output directly (no file).
7. **Write**: Use the `content-writer` agent with the learning-architect's structure + scoped research to write the article. The agent writes the article file directly.
8. **Format**: Use the `doc-formatter` agent for final polish — validates Docusaurus frontmatter, converts to MDX, checks links, cleans up intermediate files.

## Key Rules

- **One direction only** — each agent passes output to the next
- **Only web-summarizer writes intermediate files** (reusable research). The final article write happens in step 7.
- **Headlines**: H1 = 3 words max, H2/H3 = 1-5 words
- **Reading time**: 3-7 minutes (7 max)
- **No FAQ sections**
- **No "Good Read" section** — excluded
- Syllabus scope boundaries from `keywords/syllabus.md` must be respected
- Article goes in the matching level subfolder under `ai-unlocked/`

## Output

After completion, report:
- Article file path written
- Target keyword used
- Estimated reading time
- Whether doc-formatter validation passed
