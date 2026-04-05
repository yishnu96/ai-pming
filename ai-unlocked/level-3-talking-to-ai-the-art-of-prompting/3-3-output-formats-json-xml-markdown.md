---
title: "Output Formats: JSON, XML, Markdown"
description: "How to ask AI for structured output in JSON, XML, and Markdown — and when each format matters."
slug: /output-formats-json-xml-markdown
hide_table_of_contents: false
sidebar_position: 3
---

# Shape Matters

You ask AI to analyze customer feedback and it responds with three paragraphs of insights. Helpful — but you needed a **table** to paste into your quarterly report, or a **list** of scores to drop into a spreadsheet.

The problem is not what AI says. It is **how** AI says it. And you can control that.

## Tell AI How to Format

AI does not guess your preferred output shape unless you spell it out. The fix takes one extra sentence in your prompt: specify the format upfront.

Three formats cover almost every business use case.

## JSON: Structured Data

JSON organises information in labelled pairs. Think of it as a filled-in form.

When you need names, ratings, dates, or any data destined for a spreadsheet, ask for JSON:

> "Return a JSON object with: name, email, satisfaction score (1-10), main complaint."

The AI responds with:

```json
{
  "name": "Sarah Chen",
  "email": "sarah@example.com",
  "satisfaction_score": 6,
  "main_complaint": "Long wait times on phone support"
}
```

:::tip[When to use JSON]
You plan to move the output into a spreadsheet, database, or another tool. JSON gives you clean fields — no messy copy-paste from paragraphs.
:::

Both OpenAI and Anthropic support structured JSON modes that guarantee parseable output. For everyday use, simply asking for JSON works perfectly fine.

## XML: Structured Prompts

XML uses angle-bracket tags like labels on filing boxes. `<context>`, `<instructions>`, `<data>`, `<task>`.

Here is the surprising part: **Claude responds better when you structure your input with XML tags**. It separates your instructions from the information they apply to — reducing confusion.

:::info[The 30 percent trick]
Put your data at the top and your question at the end of a prompt. Tests show this alone improves response quality by up to 30 percent, especially with long documents.
:::

Example structure:

```
<context>
Q3 customer survey results: 2,400 responses. Average satisfaction: 6.4/10.
Top complaint: delivery times. Top praise: product quality.
</context>

<task>
Draft an email to the logistics team summarising key findings and recommending three actions.
</task>
```

By boxing each section, you prevent the AI from mixing instructions with context — a common source of confused outputs.

## Markdown: Human Readable

Markdown is the format people actually read: tables, bullet lists, headers.

Instead of asking for raw data, ask for a table:

> "Return a table with columns: Feature | Status | Priority"

The AI gives you a clean table ready for a slide deck, memo, or email.

| Feature | Status | Priority |
|---------|--------|----------|
| Online booking | Live | High |
| Loyalty program | Planned | Medium |
| Chat support | In development | High |

Markdown excels when the reader is a human. JSON excels when the reader is a system.

## Try This Now

Pick one of these exercises. It takes two minutes.

1. **JSON practice**: Paste five customer reviews into ChatGPT and add: "For each review, return JSON with: reviewer_name, sentiment (positive/negative/neutral), key_issue, suggested_action."
2. **XML practice**: Take any long email or memo, wrap it in `<context>` tags, then add `<task>Summarise in three bullets</task>` at the bottom.
3. **Markdown practice**: Ask any AI to "Compare ChatGPT, Claude, and Gemini in a table with columns: Best For, Strength, Weakness, Price."

:::warning[Common mistake]
Never assume the AI will choose the right format. Always state the output shape you want as the last line of your prompt — right before you hit enter.
:::

## Good Read

- [Anthropic: Use XML Tags](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags) — How structured tags improve Claude's understanding.
- [OpenAI: Structured Outputs](https://platform.openai.com/docs/guides/structured-outputs) — Forcing valid JSON from AI responses.
- [Prompting Guide: Output Formatting](https://www.promptingguide.ai/techniques/format) — Comprehensive guide to format-driven prompting.
