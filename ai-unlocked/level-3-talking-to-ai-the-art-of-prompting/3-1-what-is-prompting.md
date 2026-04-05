---
title: What is Prompting?
description: Why AI gives garbage sometimes and how the right prompt changes everything.
slug: /what-is-prompting
hide_table_of_contents: false
sidebar_position: 1
---

# What is Prompting?

You typed something into ChatGPT and got garbage. Not just bad — embarrassingly bad. Generic, overly enthusiastic text that no human would ever send. You probably thought: "This AI thing is overhyped."

It's not. Your prompt is.

The same AI model that produced your terrible result can produce something indistinguishable from expert work. The difference has nothing to do with which AI you use. It has everything to do with what you give it.

By the end of this article, you'll understand what a prompt actually is — and why the same AI gives wildly different answers to different people.

## You Typed Garbage

Most people open an AI chat and type something like "write a marketing email" and hit Enter. Then they stare at the wall of generic fluff and feel that familiar sinking feeling. The one that says AI isn't for people like them.

But here's what actually happened.

:::tip[The Real Problem]
A prompt is not just asking a question. A prompt is instructions, context, constraints, and format all packed together. When you leave pieces out, the AI guesses. And AI guesses are painfully generic.
:::

Think about how you'd brief a new coworker on writing that same email. You wouldn't just say "write a marketing email" and walk away. You'd tell them who it's for, what the product does, what tone to use, how long it should be, and what to skip.

An AI prompt works the exact same way. The gap between a terrible experience and a brilliant one is rarely the model. It's the prompt.

## Why AI Guesses

Large language models predict the next word based on patterns in their training data. They don't know your situation. They don't know your audience. They don't know what "good" looks like for you.

When you give a vague prompt, the AI fills in the blanks with the most common pattern it's seen. That's why every "write a marketing email" result sounds like a 2007 spam bot. It's the mathematical average of every marketing email on the internet.

:::warning[Prompt Quality Matters Most]
Prompt quality is the single biggest factor in AI output quality. Not the model. Not the price. A more expensive model with a bad prompt loses to a cheaper model with a good one, every time.
:::

## Same AI, Different Results

This is why two people using the exact same AI get completely different results.

Person A types: "Help me with my resume."

Person B types: "I'm a project manager with 8 years in construction applying for a tech PM role. Rewrite my resume summary to highlight transferable skills. Keep it under 50 words. No buzzwords."

Both prompts take thirty seconds. Person A gets a Wikipedia article about resumes. Person B gets something they could paste into their resume right now.

:::info[The 2026 Shift]
The AI industry is moving away from "prompt engineering" toward "context engineering." The lesson learned: clarity and structured context beats clever tricks. In mid-2025, even Shopify's CEO and AI researcher Andrej Karpathy endorsed this shift. You don't need a special skill. You need to give the AI the right background.
:::

## The Prompt Difference

Here's what happens when you fill in all four parts versus leaving them blank:

| Bad Prompt | Good Prompt |
| — | — |
| "Write a marketing email." | "Write a marketing email for our project management tool launching a time-tracking feature. Audience: small business owners with 5-20 people on their team. Under 150 words. Professional but warm. No exclamation marks." |
| AI guesses everything | AI knows exactly what to do |
| Generic, fluffy output | Focused, usable result |
| You feel AI is useless | You feel like a pro |

Both prompts take roughly the same time to type. One gives you garbage. The other gives you something you'd actually use.

Anthropic's golden rule puts it perfectly: *Show your prompt to a colleague who has minimal context. If they're confused, the AI will be too.*

Research confirms this across every major provider — OpenAI, Anthropic, and Google all converge on the same principles: clear instructions, structured formatting, examples, and iterative testing. People who use structured prompts get up to 10x more useful outputs.

## Try This Now

Open any AI chat tool and do this. Two minutes.

**First prompt:** Type exactly this:
> Write me a marketing email.

Notice how generic it feels. Who's it for? What product? What's the goal? None of that is specified — so the AI makes everything up.

**Second prompt:**
> Write a marketing email for a fitness app launching a meditation feature. Audience: busy professionals aged 30-45. Under 120 words. Friendly tone, no exclamation marks.

Same AI. Completely different result. That's prompting. You just did it.

In the next article, you'll learn when plain text is enough — and when you need structured prompts — so you stop guessing which approach fits your situation.

## Good Read

- [Anthropic's Prompting Guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview) — Clear, practical patterns for better AI responses
- [OpenAI Prompting Guide](https://platform.openai.com/docs/guides/prompt-engineering) — Best practices from OpenAI
- [Context Engineering Explained](https://www.anthropic.com/research/context-engineering) — The shift from tricks to clear communication
