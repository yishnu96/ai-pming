---
title: "System Prompts and Custom Instructions"
description: "How to set the AI's personality, save persistent preferences, and fine-tune creativity — so every conversation starts on your terms."
slug: /system-prompts-and-custom-instructions
hide_table_of_contents: false
sidebar_position: 7
tags:
  - AI basics
  - prompting
  - ChatGPT
  - Claude
  - productivity
readingTime: 4
---

# Control Your AI

Every time you open ChatGPT, you are walking into a conversation that already started. Before you type a single word, the AI has already received a set of instructions — a hidden layer that defines its personality, its rules, and its behavior. You never see these instructions, and yet they shape every single response.

Most people never change them.

73% of ChatGPT Plus users never configure custom instructions. They leave the most powerful feature untouched, then wonder why the AI feels like talking to a polite stranger who does not really know them.

The fix is one settings menu away.

## What Is a System Prompt?

Every AI has a **default personality**. It is trained to be helpful, polite, and safe. That works fine for casual questions. It falls apart for professional work where tone, format, and style matter.

A system prompt is a set of **persistent instructions** that shape how AI behaves across an entire conversation. Think of it like giving a new employee a handbook before their first day. Without it, they improvise. With it, they know the role, the expectations, and the boundaries.

Your regular prompt says "Write a follow-up email to a client." The system prompt says "You are a B2B copywriter who writes short, direct emails in active voice. No fluff." The first tells the AI **what** to do. The second tells it **who to be**.

Behind the scenes, every message goes through a hidden sequence:

```
System: You are a helpful assistant.
User: Write a follow-up email to a client.
AI: [responds based on both above]
```

The system message is invisible to you — until you get control of it.

### Anatomy of a Strong System Prompt

A strong system prompt has four parts:

1. **Role** — What expertise the AI should draw on. "You are an experienced project manager who specializes in stakeholder communication."
2. **Rules** — How the AI should behave. "Always ask clarifying questions before recommending a course of action."
3. **Format** — How responses should look. "Use short paragraphs. No bullet lists longer than five items."
4. **Boundaries** — What the AI should avoid. "Never use jargon without explaining it first."

You do not need all four every time. But the more you include, the more consistent your results become.

### Where to Find Them

Every major platform has this feature. They just use different names:

| Platform | Feature | Where to Find It | Character Limit |
|---|---|---|---|
| **ChatGPT** | Custom Instructions | Settings → Personalization | ~3,000 characters |
| **ChatGPT** | Custom GPTs | Explore → Create a GPT | Higher limits |
| **Claude** | Project Instructions | Projects → Create | ~8,000 characters |
| **Gemini** | Gems | Create a Gem | ~2,000 characters |

The mechanism is identical across all of them: persistent instructions that apply before every message you send.

## Custom Instructions

Custom instructions are the simplest form of a system prompt. They are two text boxes that live in your account settings and apply to **every new conversation**.

**Box 1: "What should the AI know about you?"**

Tell AI your role, industry, and context:
- "I am a real estate agent in Austin, Texas."
- "I manage a team of six salespeople."
- "I draft 20+ emails per day."

**Box 2: "How should the AI respond?"**

Tell AI how you want output shaped:
- "Keep responses under 150 words."
- "Use bullet points for lists."
- "Write in a professional but warm tone."

Once set, every new chat remembers these preferences. No more repeating "write shorter" or "be less formal."

### Real-World Example

Imagine you are a property manager who writes maintenance response emails every day. Instead of typing "Write an email to a tenant about the plumber coming Tuesday" and then editing the generic result every time, you set up Custom Instructions like this:

> **About you:** "I manage 200 rental units. I communicate with tenants who range from professionals to retired residents."
>
> **Response style:** "Always be polite but firm. Use plain language, not legal jargon. Keep emails to 3-5 sentences. Include specific dates, times, and contact information. End with a clear action item."

Now any prompt like "Email unit 4B about the gas inspection" produces a polished, on-brand draft in seconds. One setup. Hundreds of saved hours.

> 🧪 **Try This Now:** Open ChatGPT → Settings → Custom Instructions. Fill in both boxes with your own professional details. Start a new chat and ask a task you typically perform. Notice the difference in how AI responds.

## Temperature and Creativity Controls

System prompts shape AI's personality. Temperature controls how **wildly** it expresses that personality.

Think of temperature as a creativity dial:

**Low temperature (0.1–0.3): Focused and consistent**
- Best for factual tasks — summarizing a meeting, extracting data, writing formal emails.
- AI sticks close to its most likely responses. Less variety, more predictability.

**Medium temperature (0.4–0.6): Balanced**
- Best for everyday tasks — drafting, editing, analysis.
- AI is clear but not rigid. The default setting on most platforms.

**High temperature (0.7–1.0): Creative and surprising**
- Best for brainstorming — naming ideas, marketing hooks, creative writing.
- AI takes more risks. More variety in word choice and approach. Also more likely to be inaccurate.

### Where to Adjust Temperature

- **ChatGPT Plus** has creativity controls in settings (or via the API with `temperature` parameter).
- **Claude through the API** lets you set `temperature` directly.
- **Google AI Studio** has a visible temperature slider.

For most everyday use, the default works fine. Only adjust temperature when your task demands it — tighten for emails and reports, loosen for brainstorming.

Some platforms also offer **top-p**, which controls a different aspect of randomness. Where temperature affects all word choices equally, top-p limits the pool of words the AI considers. Think of temperature as "how wild the swings are" and top-p as "how narrow the menu is." You usually only need to adjust one.

### Real-World Example

A nonprofit communications director uses AI for two very different tasks:
- **Grant proposals** — temperature set low (0.2). Accuracy matters. The tone must be formal and factual.
- **Social campaign slogans** — temperature set high (0.8). Creativity matters. They want unexpected, attention-grabbing ideas.

Same AI. Different temperature. Completely different results from the same tool.

## Common Mistakes

**Too vague.** "Be helpful and professional." This is the AI's default behavior already. It changes nothing. Be specific: "Write in plain English. Avoid jargon. Use active voice."

**Too long.** A 3,000-word system prompt is not better. AI loses focus in the middle. Conflicting instructions dilute each other. Keep it concise — under 500 words for custom instructions.

**Contradictory instructions.** "Be concise" and "be thorough and comprehensive" cannot both be true. Read your system prompt once before saving.

:::tip[The Golden Rule]
A system prompt should be specific enough to change the output. If you can remove it and get the same result, it is not working hard enough.
:::

## Try This Now

> 🧪 Create two Custom GPTs (or Claude Projects):
> 
> 1. **"Email Assistant"** — Role: professional communicator. Tone: clear and direct. Format: draft, then suggest improvements. Max 200 words per email.
> 2. **"Brainstorm Partner"** — Role: creative strategist. Tone: energetic. Format: 5 ideas per request. Encourage unconventional thinking.
> 
> Test both with the same input: "Ideas for our Q2 client appreciation event." Compare the outputs.

## Why This Matters

Every hour you spend re-explaining your preferences to AI is an hour wasted. System prompts and custom instructions are **one-time investments** that pay back on every single conversation.

A professional who sets up a system prompt for email drafting saves roughly 8-10 minutes per email. At 50 emails per week, that is 6-8 hours saved weekly from a single setup. Multiply that across five system prompts covering different task categories, and you are looking at 15-20 hours per week of recovered time.

The gap between AI users who configure their tools and those who do not is widening. The feature is free. The setup takes five minutes. The return compounds every day.

## Try This Now

1. **Set up Custom Instructions** — Go to Settings → Custom Instructions. Fill in both fields with your professional context and output preferences. Test with a task you do daily.
2. **Create a Claude Project** — Make a project for one area of your work. Add instructions and upload a relevant document. Use it for all related conversations.
3. **Experiment with temperature** — If your platform offers temperature controls (Google AI Studio has a visible slider), try the same prompt at 0.2 and 0.8. Ask it to "Write a tagline for a coffee shop." See the difference.

## Good Read

- [SurePrompts: System Prompts and Custom Instructions Guide](https://sureprompts.com/blog/system-prompts-custom-instructions-guide) — Comprehensive guide to writing system prompts and custom instructions.
- [PromptPlaybook: System Prompts Explained (2026)](https://promptplaybook.ai/blog/system-prompts-explained-2026/) — How professionals build custom AI assistants.
- [AI Prompts Pro: System Prompts for Claude and ChatGPT](https://ai-prompts-pro.com/blog/how-to-write-system-prompts-claude-chatgpt.html) — Practical templates and common mistakes to avoid.
