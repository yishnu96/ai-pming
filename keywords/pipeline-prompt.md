# Content Pipeline Prompt

Read keywords/tracker.md → find next 3 "Not Started" topics.
Syllabus : keywords\Updated_Syllabus.md
Main Folder : ./ai-unlocked
Agents: .claude\agents

For EACH topic, run a pipeline of agents in serial: web-summarizer → content-scoper → learning-architect → content-writer → doc-formatter

Run agents for 3 topics in parallel (e.g., 3.4, 3.5, 3.6).

For all topics (MD files) run these agents in sequence: web-summarizer → content-scoper → learning-architect → content-writer → doc-formatter that are present in .claude\agents only

After all 3 agents complete:
- Use ctx_batch_execute to update tracker.md → mark ✅
- Use claude-mem search to store progress: "Completed topics X, Y, Z on YYYY-MM-DD"
- Report: "Done: X, Y, Z — Next: A, B, C"

## RULES
- Use ctx_search/ctx_execute for all context-heavy operations
- Use claude-mem for cross-session progress tracking
- Don't Remove Good Read
- Run all the agents mention mandatory
- Use the Agents present in .claude\agents only. Don't use generic purpose agents
- If any of agent hit any kind of error try to fix it first if it don't fix pause and report
- Show status of each topic in table format with Name of topic and Agent running 
- Do for all topics present in Level 4
