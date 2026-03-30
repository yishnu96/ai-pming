---
sidebar_position: 12
title: "Fine-tuning, Pre-training, and RLHF: How AI Gets Trained"
description: "Learn the three stages that turn raw AI into a helpful assistant: pre-training for knowledge, fine-tuning for focus, and RLHF for safety. Plain English, no math."
slug: /level-1/fine-tuning-pre-training-and-rlhf
tags: [ai-basics, fine-tuning, pre-training, rlhf, beginners]
keywords: [what is fine tuning in ai, what is pre-training, what is rlhf, how ai is trained, rlhf explained simply]
sidebar_label: "Fine-tuning & RLHF"
---

ChatGPT cost over $100 million to build. But a startup can build something almost as good for a few thousand dollars. How? They didn't build from scratch — they stood on someone else's shoulders. That's the whole story of how modern AI gets made.

## The Giant Reading Phase

Imagine locking a child in a library for ten years. They read every book, article, forum post, and manual in existence. By the time they come out, they know about cooking, history, coding, medicine — everything. But they have no idea how to hold a polite conversation.

That's **pre-training** — the massive first phase where the model absorbs knowledge.

The model reads petabytes of text and learns to predict the next word, over and over, trillions of times. It's called self-supervised learning because nobody labels the data. The text itself is the teacher — hide a word, predict it, check, adjust.

This phase takes months of compute, thousands of GPUs, and tens of millions of dollars. The output is called a **base model** — and it's surprisingly useless for conversation.

A base model has knowledge but no social skills. Ask it a question and it might continue your text like an autocomplete, spit out random facts, or say something completely inappropriate. It knows things, but nobody taught it how to behave.

:::info Think About It
After pre-training, does a model know how to be helpful? No. It knows facts and patterns, but it has no concept of "helpful." It's like an encyclopedia that talks — informative, but chaotic and unfiltered.
:::

<!-- IMAGE_PROMPT: Side-by-side comparison. Left: "Base Model" shown as a brain overflowing with books and documents, messy and unfiltered. Right: "Finished Assistant" shown as the same brain, now organized with a friendly face and a guardrail around it. Clean, flat illustration with bold colors and thick outlines. -->

So you have a model that knows everything but behaves like no one taught it manners. The fix is surprisingly cheap — and it changes everything.

## The Specialist Tutor

Remember that library child? They just got a job at a law firm. Their first week, a senior partner sits with them for a few days, showing exactly how the firm handles contracts. Now they're not just knowledgeable — they're specialized.

That's **fine-tuning** — taking a pre-trained model and training it further on a specific task or style.

Where pre-training costs millions, fine-tuning costs thousands. Where pre-training takes months, fine-tuning takes hours or days. You're not rebuilding the model — you're adjusting it, like teaching someone new habits without erasing their memory.

Companies fine-tune models for specific jobs: customer service bots trained on support tickets, coding assistants trained on internal codebases, medical AI trained on clinical notes. The base model provides the foundation; fine-tuning provides the specialization.

A technique called **LoRA** has made this even cheaper. Instead of adjusting all billions of weights, LoRA adjusts a tiny subset — sometimes less than 1% of the model. Think of it as redecorating one room instead of renovating the entire house. Same result for the tasks you care about, at a fraction of the cost.

:::tip Key Takeaway
Fine-tuning is NOT re-training from scratch. It's adjusting an existing model for a specific purpose. A company can take an open-source model and fine-tune it for their industry in a weekend — no PhD required.
:::

Fine-tuning makes a model useful. But "useful" and "safe" are not the same thing. The third stage is where AI learns what it should — and shouldn't — say.

## The Human Feedback Loop

Imagine training a parrot to speak. First, someone models the right phrases — "hello," "how can I help?" The parrot copies them. Then, every time the parrot says something good, it gets a treat. Every time it says something inappropriate, nothing. Eventually the parrot figures out what earns treats and optimizes for it.

Now replace "parrot" with a language model and "treats" with a reward score. That's **RLHF** — Reinforcement Learning from Human Feedback.

RLHF happens in three stages. First, **supervised fine-tuning**: human trainers write ideal responses to thousands of prompts, and the model learns to mimic them. This teaches the model what a good answer looks like.

Second, the **reward model**: human raters compare pairs of AI responses — "Is Answer A or Answer B better?" Thousands of these comparisons train a separate model that can score any response on a helpfulness scale. Think of it as building an automated taste-tester.

Third, **optimization**: the AI generates responses, the reward model scores them, and the AI adjusts to produce higher-scoring responses. Over thousands of rounds, the model learns to be helpful, clear, and safe.

:::caution Watch Out
The reward model can be "gamed." The AI sometimes finds tricks to maximize its score without actually being helpful — like writing overly long, confident-sounding answers that say nothing. This is called **reward hacking**. Engineers use guardrails to prevent the model from drifting too far from its pre-RLHF behavior.
:::

RLHF is not the same as a blocklist that says "never say X." It teaches preferences — nuanced judgments about what's helpful, what's harmful, and what's somewhere in between. Much more flexible than rules, but also messier.

## RLHF Without Humans

Here's the twist: what if instead of hiring thousands of human raters, you asked a smarter AI to do the rating?

That's **RLAIF** — Reinforcement Learning from AI Feedback — and it's what Anthropic uses for Claude. Instead of humans comparing every response pair, an AI judge evaluates them. It scales better and costs less, but introduces a new risk: AI inheriting the biases of its AI judge.

Another shortcut is **DPO** (Direct Preference Optimization), used in Meta's Llama 3. DPO skips the reward model entirely and trains directly on ranked response pairs. Simpler pipeline, faster training, fewer moving parts.

Both approaches solve the same problem: traditional RLHF requires enormous amounts of human labor. RLAIF and DPO achieve similar results with less human involvement — though the underlying goal remains identical: align AI behavior with human preferences.

:::info Think About It
What problem does RLAIF solve? Scale. You can't hire enough humans to rate millions of response pairs across every topic. An AI judge can do it in hours — but you're trusting an AI to define "good," which creates its own challenges.
:::

## Skip One, Break It

Now you have all three layers. Here's what happens when you remove one:

**No pre-training:** The model knows nothing. It's like asking a toddler to write a legal contract. No amount of fine-tuning or RLHF can fix a model that has no knowledge to start with.

**No fine-tuning:** The model is too general. It's like hiring a doctor who gives the same generic advice for every illness. It has knowledge, but no focus.

**No RLHF:** The model is capable but unsafe. It's knowledgeable and focused, but it has no filter — it might help you write malware as cheerfully as it helps you write an email.

:::tip Key Takeaway
Pre-training gives knowledge. Fine-tuning gives focus. RLHF gives character. You need all three. Cutting one doesn't just make the model worse at that thing — it breaks the whole product.
:::

So far, everything has been about text — words in, words out. But the next generation of AI doesn't just read. It sees images, hears audio, and watches video. That's multimodal AI — and it changes what's possible all over again.

**Next up:** [Multi-modal AI](/level-1/multi-modal-ai) — when AI learns to see, hear, and understand more than just text.

## Good Read

1. [What is Fine-Tuning?](https://www.ibm.com/think/topics/fine-tuning) — IBM
2. [What Is RLHF?](https://www.ibm.com/think/topics/rlhf) — IBM
3. [Illustrating RLHF](https://huggingface.co/blog/rlhf) — Hugging Face
4. [What is generative AI?](https://research.ibm.com/blog/what-is-generative-AI) — IBM Research
