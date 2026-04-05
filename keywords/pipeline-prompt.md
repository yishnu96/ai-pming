# Content Pipeline Prompt

Read keywords/tracker.md → find next 3 "Not Started" topics.
Syllabus : keywords\Updated_Syllabus.md
Main Folder : ./ai-unlocked

For EACH topic, run a pipeline of agents in serial: web-summarizer → content-scoper → learning-architect → content-writer → doc-formatter

Run agents for 3 topics in parallel (e.g., 3.4, 3.5, 3.6).

For all topics (MD files) run these agents in sequence: web-summarizer → content-scoper → learning-architect → content-writer → doc-formatter

After all 3 agents complete:
- Use ctx_batch_execute to update tracker.md → mark ✅
- Use claude-mem search to store progress: "Completed topics X, Y, Z on YYYY-MM-DD"
- Use claude-mem to check if this is the 3rd run → if yes, clear recent context:
  → Delete the 3 most recent "Completed topics..." memory entries to keep context fresh
- Report: "Done: X, Y, Z — Next: A, B, C"

## Per-Topic Pipeline Agent Template

```
TOPIC: {number} — {title}
Syllabus outline: {subtopics}
OUTPUT PATH: E:\ai-pming\ai-unlocked\{level-folder}\{filename}.md

STEP 1 - web-summarizer: Feed the research URLs. Produce comprehensive research summary.
STEP 2 - content-scoper: Scope research to ONLY this topic. Remove sibling topic content.
STEP 3 - learning-architect: Build educational structure. Problem-first approach (Level 3+). Include "Try This Now" exercises.
STEP 4 - content-writer: Write final article. 3-5 min read. H1 ≤3 words, H2/H3 1-5 words. No FAQ. No "Good Read". Plain Markdown.
STEP 5 - doc-formatter: Docusaurus frontmatter, admonitions, link checking, beautification, cleanup.
```

## RULES
- Use ctx_search/ctx_execute for all context-heavy operations
- Use claude-mem for cross-session progress tracking
- Clear context memory after every 3rd batch run
- Save this prompt to keywords/pipeline-prompt.md for reuse
