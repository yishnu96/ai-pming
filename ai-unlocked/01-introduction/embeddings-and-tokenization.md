---
sidebar_position: 4
title: "Embeddings and Tokenization — How AI Reads Your Words"
description: "What are tokens and embeddings? Learn how AI breaks down text and understands meaning — explained with everyday analogies, no math needed."
slug: /embeddings-and-tokenization
tags: [ai-basics, tokenization, embeddings, beginners]
keywords:
  [
    what is tokenization in ai,
    what are embeddings,
    ai terminology for beginners,
    how ai understands text,
  ]
sidebar_label: "Embeddings & Tokenization"
authors: [yash]
---

Here's something that surprises most people: AI doesn't understand words.

Not a single one. Not "hello," not "urgent," not your name.

In our previous article, we learned [how LLMs and Transformers work](/ai-unlocked/how-llm-transformer-works) — how attention and prediction power every AI conversation. But we skipped a crucial first step: before any of that can happen, your words need to become **numbers**.

Computers only understand numbers. Every photo you see on screen is numbers. Every song you stream is numbers. And every word you type into ChatGPT becomes numbers too.

The process of converting your words into numbers has two steps: **tokenization** (breaking text into pieces) and **embeddings** (giving those pieces meaning). Let's walk through both.

## What is Tokenization?

Tokenization is the act of chopping your text into small, digestible pieces called **tokens**.

Think of it like LEGO bricks.

You don't hand someone a complete LEGO castle and say "understand this." You break it into individual bricks, each one a manageable unit. Tokenization does the same thing with text.

Here's what it looks like in practice. The sentence:

> "I love artificial intelligence"

Gets broken into tokens like this:

| Token   | Piece         |
| ------- | ------------- |
| Token 1 | "I"           |
| Token 2 | " love"       |
| Token 3 | " artificial" |
| Token 4 | " intelli"    |
| Token 5 | "gence"       |

Notice something? "Intelligence" got split into two tokens: "intelli" and "gence." That's because AI doesn't always tokenize by whole words. It uses **subword** tokenization — breaking long or uncommon words into smaller, reusable pieces.

Why? The same reason you learn root words in school. If you know "bio" means life and "logy" means study, you can guess what "biology" means even if you've never seen the word. AI does the same thing with subword tokens.

:::info Think About It
The word "unhappiness" might tokenize as "un" + "happiness" or "un" + "happ" + "iness." Why would this help AI understand new words it hasn't seen before?

_Because it can recognize familiar pieces ("un" means negation, "happy" is a known concept) and combine their meanings — just like you do._
:::

<!-- IMAGE_PROMPT: A visual showing a sentence "I love artificial intelligence" being broken into LEGO-like blocks. Each block is a different color and labeled with its token. The word "intelligence" is shown split into two blocks "intelli" + "gence" with a small dotted line showing the split. Clean, colorful, minimal style. -->

## Tokens Have Limits

Here's where tokenization directly affects your daily AI use.

Every AI model has a **context window** — the maximum number of tokens it can process at once. Think of it as the model's desk. A bigger desk holds more papers. A smaller desk means some papers fall off the edge.

| Model          | Context Window    |
| -------------- | ----------------- |
| GPT-3.5        | ~4,000 tokens     |
| GPT-4          | ~128,000 tokens   |
| Claude 3.5     | ~200,000 tokens   |
| Gemini 1.5 Pro | ~2,000,000 tokens |

A rough rule: **1 token is about 3/4 of a word.** So 4,000 tokens is roughly 3,000 words — about 6 pages. And that limit includes both your input AND the AI's response.

This is why long conversations sometimes go sideways. When you exceed the context window, the AI can't "see" your earlier messages anymore. It's not forgetting — it literally cannot access them.

:::tip Key Takeaway
When ChatGPT seems to "forget" what you said earlier in a long conversation, it's not a bug — you've exceeded the token limit. Start a new conversation or summarize the key points to reset.
:::

## What are Embeddings?

Tokenization breaks text into pieces. But pieces alone are meaningless. The number "42" means nothing until you know it represents a temperature, an age, or the answer to life itself.

**Embeddings** give tokens meaning by converting them into lists of numbers (called vectors) that capture relationships between words.

Here's the best way to think about it. Imagine a giant map — not of places, but of **meanings**.

On this map, "king" and "queen" are close together (both are royalty). "King" and "banana" are far apart (nothing in common). "Dog" and "puppy" are neighbors. "Dog" and "cat" are in the same neighborhood but a few streets apart.

Each word gets a position on this map, represented by a list of hundreds of numbers. These numbers are the embedding.

The beautiful part? These positions capture real relationships:

- **King** minus **Man** plus **Woman** equals... **Queen**
- **Paris** minus **France** plus **Japan** equals... **Tokyo**

The AI never learned geography or royal titles. It absorbed these relationships from the patterns in billions of sentences.

:::info Think About It
If "happy" and "joyful" have very similar embeddings (close on the meaning map), what does that tell you about how AI handles synonyms?

_AI can treat them as near-interchangeable — it understands they carry similar meaning, even though they're different words._
:::

<!-- IMAGE_PROMPT: A 2D scatter plot "meaning map" showing words as dots. Clusters visible: "king" and "queen" close together, "dog" and "puppy" close together, "car" and "truck" close together, with "banana" far from the royalty cluster. Dotted arrows show the famous "king - man + woman = queen" analogy. Clean, friendly illustration with soft colors. -->

## Why This Matters

Understanding tokens and embeddings isn't academic trivia. It changes how you use AI tools every day.

**Pricing is based on tokens.** When you use the ChatGPT API or Claude API, you pay per token. A 1,000-word document costs roughly 1,300 tokens. Knowing this helps you estimate costs and write more efficiently.

**Prompt length affects quality.** A prompt that's too long wastes tokens on context the model might not need. A prompt that's too short doesn't give enough information for good embeddings. The sweet spot is specific but concise.

**Language matters.** Non-English languages often require more tokens per word. A sentence in Japanese might use 2-3x more tokens than the same sentence in English. This means non-English users hit context limits faster.

**Search is changing.** Traditional search matches keywords. AI-powered search uses embeddings to match _meaning_. That's why you can search for "how to fix a slow computer" and get results about "improving PC performance" — the embeddings are close even though no words match.

## What You Learned

Before AI can do anything with your text, it converts words into tokens (small pieces) and then into embeddings (numbers that capture meaning). Tokens determine what the model can see and how much it costs. Embeddings determine what the model understands — capturing relationships, synonyms, and concepts as positions on a giant meaning map.

These two building blocks — tokens and embeddings — feed directly into the Transformer architecture we covered in the [previous article](/ai-unlocked/how-llm-transformer-works). Together, they form the foundation of every AI language interaction.

Now that you understand the building blocks — AI, LLMs, Transformers, tokens, and embeddings — it's time to meet a new kind of AI that goes beyond just generating text. Next, we'll explore [What is an AI Agent?](/ai-unlocked/what-is-an-ai-agent) — AI that can actually take action in the real world.

## Good Read

- [Tokenization vs Embeddings — How Are They Different? (Airbyte)](https://airbyte.com/data-engineering-resources/tokenization-vs-embeddings)
- [The Building Blocks of LLMs: Vectors, Tokens and Embeddings (The New Stack)](https://thenewstack.io/the-building-blocks-of-llms-vectors-tokens-and-embeddings/)
- [How LLMs Work: Tokens, Embeddings, and Transformers (Dremio)](https://www.dremio.com/blog/how-llms-work-tokens-embeddings-and-transformers/)
- [A Beginner's Guide to Tokens, Vectors, and Embeddings (Medium)](https://medium.com/@saschametzger/what-are-tokens-vectors-and-embeddings-how-do-you-create-them-e2a3e698e037)
- [Representing Words: Tokens and Embeddings (APXML)](https://apxml.com/courses/intro-large-language-models/chapter-2-simplified-mechanics-of-llms/tokens-and-embeddings)
