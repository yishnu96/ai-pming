---
sidebar_position: 6
title: "How LLMs Work: The Transformer Architecture Explained"
description: "Understand how the Transformer architecture works — attention, multi-head attention, and why this 2017 breakthrough powers every AI tool you use today."
slug: /level-1/how-llms-work-the-transformer
tags: [ai-basics, transformer, attention-mechanism, beginners]
keywords: [how llms work, what is a transformer, attention mechanism explained, transformer architecture simple, why transformers changed ai, attention is all you need]
sidebar_label: "The Transformer"
---

You know that feeling when you're reading a long document and by page 10, you've forgotten what page 1 said? You have to scroll back, re-read, and piece it together.

That was exactly the problem with AI before 2017. Old AI systems read text one word at a time, and by the time they reached word 50, they'd already forgotten word 1. Long conversations, complex paragraphs, nuanced context — all lost.

Then a team at Google published a paper with a bold title: *"[Attention Is All You Need.](https://arxiv.org/pdf/1706.03762)"* And everything changed.

## The Old Way

Before Transformers, AI used a system called [**RNNs** (Recurrent Neural Networks)](https://www.geeksforgeeks.org/machine-learning/introduction-to-recurrent-neural-network/). They processed text sequentially — one word at a time, in order.

Think of it like reading a novel letter by letter, keeping a tiny notepad where you overwrite your notes as you go. By chapter 5, your notes about chapter 1 are gone. That's how RNNs worked:

- **Slow** — each word had to wait for the previous word to be processed. You couldn't speed it up
- **Forgetful** — long sentences lost their early context. The model couldn't connect word 1 to word 50
- **Expensive** — training on large amounts of text took impractically long

These weren't minor inconveniences. They were fundamental blockers. You simply couldn't build ChatGPT with an RNN. The technology couldn't handle it.

:::info Think About It
Imagine trying to understand the sentence "The doctor who treated the patient in the emergency room last Tuesday recommended rest" — but you can only hold 5 words in memory at a time. By the time you reach "recommended," you've lost "doctor." That's what RNNs struggled with.
:::

## Attention Is All You Need

In 2017, researchers introduced the **Transformer** — and it solved both problems at once.

Instead of reading word by word, the Transformer takes a satellite photo of the entire sentence at once. Every word visible. Every relationship potentially within reach. No waiting. No forgetting.

It solved two problems simultaneously:

**Speed** — because all words are processed in parallel (not one-by-one), training became dramatically faster. This is what made it possible to train on billions of documents — which is what eventually made ChatGPT possible.

**Memory** — because every word can directly "see" every other word, the model doesn't forget early context. Word 1 and word 500 can connect to each other directly.

This wasn't just a technical improvement. It was the breakthrough that unlocked the entire modern AI era. GPT-2 (2019), GPT-3 (2020), ChatGPT (2022), Claude, Gemini — every AI tool you use today runs on this architecture.

:::tip Key Takeaway
The Transformer's two superpowers are parallelization (fast) and direct word-to-word connections (smart). Together, they made it practical to train AI on all the text humans have ever written.
:::

## What Attention Does

So the Transformer reads everything at once. But how does it know which words actually matter to each other? That's where **attention** comes in.

Consider this sentence: *"The chef prepared the meal because she was hungry."*

When the model processes "she," it needs to figure out: who does "she" refer to? The chef? The meal? Attention solves this by scoring every other word in the sentence:

- "she" → "chef" = **high score** (she refers to the chef)
- "she" → "meal" = low score (meals aren't "she")
- "she" → "prepared" = medium score (related action)
- "she" → "the" = very low score (not relevant)

<!-- IMAGE_PROMPT: A sentence "The chef prepared the meal because she was hungry" with lines connecting "she" to other words. The line to "chef" is thick and bold, the line to "meal" is thin, and lines to other words are faint or dotted. Clean diagram style with bold colors.

![Tokenization: English vs Japanese token comparison](/img/ai-unlocked/level-1/1-9-parameters-weights-first.png) -->

Image : 1-6-chef.png

The model does this for **every single word** in the sentence, simultaneously. Each word asks: "which other words are most relevant to me right now?" Then it pulls in information from the highest-scoring words.

Think of it as a highlighter that gets brighter on relevant words and fades on irrelevant ones. The model highlights different words depending on which word it's currently focused on.

:::info Think About It
In the sentence "The chef prepared the meal because she was hungry," which word does "she" attend most strongly to? "Chef" — because attention learned from millions of similar sentences that pronouns typically refer back to the subject performing the action.
:::

## Multiple Spotlights

One attention pass isn't enough. A sentence has many relationships happening at once — subjects and verbs, adjectives and nouns, pronouns and their references.

So the Transformer runs **multiple attention passes simultaneously**, each looking for different types of relationships. This is called **multi-head attention**:

- **Head 1** might focus on: which nouns connect to which verbs
- **Head 2** might focus on: which adjectives describe which nouns
- **Head 3** might focus on: which pronouns refer to which people

Think of a film director watching the same scene with multiple camera operators. One captures faces, one captures props, one captures body language. Each sees something different. The director combines all feeds to understand the full picture.

All these attention heads run at the same time, and their outputs are combined. This is why Transformers understand context so well — they're looking at your text from multiple angles simultaneously.

One more detail: because the Transformer reads all words at once, it needs a way to know word order. So before attention runs, each word gets a **position tag** — a marker that tells the model "this is word 1, this is word 2, this is word 15." Without this, "dog bites man" and "man bites dog" would look the same.

## Decoder-Only = LLM

The original Transformer had two parts:

- **Encoder** — reads and understands the input
- **Decoder** — generates the output

LLMs like ChatGPT and Claude use **only the decoder**. They're trained to do one thing: predict the next word. Over and over, at massive scale.

Your phone's autocomplete predicts one word at a time. An LLM does the same thing — but trained on essentially all the text humans have ever written, so its "next word" predictions form coherent paragraphs, arguments, and even code.

That's the full picture: Transformer architecture + attention mechanism + decoder-only design + trillions of words of training = the LLMs you use every day.

:::tip Try This Now
Next time you use ChatGPT or Claude, watch the response stream in word by word. That's the decoder at work — predicting one token at a time, using attention to keep track of everything it's already written and everything you asked. You're watching a Transformer in action.
:::

One thing we glossed over: before any of this runs, your words get broken into chunks called **tokens**. "ChatGPT" might be one token. "Unbelievable" might be three. And that changes everything about how the model processes your input — and what it costs to run.

**Next up:** [Tokenization: How AI Reads Your Words](/level-1/tokenization-how-ai-reads-your-words) — the first step in how your text becomes something AI can work with.

## Good Read

1. [What Is a Transformer Model?](https://blogs.nvidia.com/blog/what-is-a-transformer-model/) — NVIDIA
2. [But what is a GPT? Visual intro to Transformers](https://youtu.be/wjZofJX0v4M) — 3Blue1Brown (Video)
3. [What is a Transformer Model?](https://www.ibm.com/think/topics/transformer-model) — IBM
4. [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/) — Jay Alammar
