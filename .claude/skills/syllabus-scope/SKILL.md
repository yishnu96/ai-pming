---
name: syllabus-scope
description: Validates whether an article's planned content stays within its syllabus topic boundaries before writing begins
---

# Syllabus Scope Validator

Run this BEFORE writing any article to ensure the planned content matches exactly what the syllabus specifies for that topic and does NOT bleed into adjacent topics.

## How to Use

1. Tell me which article you want to scope (e.g., "1.7 Tokenization" or "Level 4, section 4.3")
2. I will:
   - Read the syllabus topic from `keywords/Updated_Syllabus.md`
   - Read the planned article outline or draft
   - Cross-check each planned section against the syllabus
   - Flag any content that belongs to a sibling topic
   - Return a GO / REVISE verdict

## Scoring

| Verdict | Meaning |
|---------|---------|
| **GO** | All planned sections map to syllabus. No scope creep. |
| **REVISE** | Some sections belong to other topics. Remove or defer them. |
| **UNCERTAIN** | Ambiguous boundary. Flag and ask for human decision. |

## Why This Matters

Adjacent topics often overlap on concepts. For example:
- 1.5 (LLM) vs 1.6 (Transformer) — both discuss language models but at different levels
- 5.3 (AI Agents) vs 1.17 (Agents vs LLMs) — different framing but related
- 12.3 (Copyright) vs 12.7 (Responsible AI) — overlapping ethics territory

Catching scope creep BEFORE writing saves wasted effort.
