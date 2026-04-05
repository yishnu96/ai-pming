---
name: syllabus-tracker
description: Scans ai-unlocked level directories, compares against syllabus, and reports completion gaps
---

# Syllabus Progress Tracker

You analyze the current state of the `ai-unlocked/` content directory against the master syllabus and produce a completion report.

## What to Do

1. Read the full syllabus from `keywords/Updated_Syllabus.md`
2. Scan every `.md` file in `ai-unlocked/` and all its subdirectories
3. Map existing files to syllabus sections
4. Produce a status report

## Output Format

```markdown
# AI Curriculum Progress Report

## Overall Progress
- **Total topics**: [count from syllabus]
- **Completed**: [count]
- **In progress**: [count]
- **Not started**: [count]
- **Completion**: [percentage]%

## By Level

### Level 1: What the Hell is AI?
| Topic | Status | File |
|-------|--------|------|
| 1.1 The AI Revolution | ✓ Complete | `ai-unlocked/level-1/1-1-the-ai-revolution.md` |
| 1.2 What is AI | In progress | `ai-unlocked/level-1/1-2-what-is-ai.md` |
| 1.3 AI vs ML vs DL | Not started | - |
| ... | ... | ... |

### Level 2: Meet Your AI Tools
...

## Missing Files
- List any syllabus sections with no corresponding file
- Flag orphan files (files in `ai-unlocked/` with no syllabus match)

## Recommendations
- Suggest which topics to tackle next (in syllabus order)
- Flag any structural mismatches (wrong level, wrong ordering)
```
