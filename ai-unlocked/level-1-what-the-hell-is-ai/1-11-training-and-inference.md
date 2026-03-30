---
sidebar_position: 11
title: "Training and Inference: How AI Learns and Responds"
description: "Learn the difference between AI training and inference, why training costs millions but inference is cheap, and why AI doesn't learn from your conversations."
slug: /level-1/training-and-inference
tags: [ai-basics, training, inference, beginners]
keywords: [ai training vs inference, how ai learns, what is ai inference, does ai learn from conversations, ai training cost]
sidebar_label: "Training & Inference"
---

You type a question into ChatGPT. It answers in two seconds. Somewhere in the back of your mind, you wonder: is it learning from me right now?

No. It isn't. And understanding why requires knowing the two completely separate phases of how AI works — one that costs millions of dollars, and one that costs a fraction of a penny.

## Two Phases, One AI

Think of a student preparing for a medical exam. There are two distinct stages:

**Studying** — months of reading textbooks, practicing questions, absorbing knowledge. This is expensive (tuition, time, effort) and happens once.

**Taking the exam** — applying what they already know to answer specific questions. This is fast, cheap, and happens repeatedly.

AI works exactly the same way:

- **Training** = studying. The model reads billions of documents and adjusts its internal numbers to learn patterns. This takes weeks or months, costs millions, and happens once (or rarely).
- **Inference** = taking the exam. The model uses what it already learned to answer your question. This takes seconds and costs fractions of a cent.

Every time you use ChatGPT, Claude, or Gemini, you're only seeing inference. The training happened months ago, in a data center, before you ever opened the app.

:::info Think About It
When you chat with AI, you're not watching it learn. You're watching it recall. The "studying" phase ended long before you typed your first message.
:::

## How Training Works

Training is like a game of hot and cold — played billions of times.

The model sees a sentence with the last word hidden: "The cat sat on the ___." It guesses "car." Wrong — the answer was "mat." The model adjusts its internal numbers slightly, so next time, "mat" becomes more likely.

Now repeat this process. Billions of sentences. Trillions of guesses. Each wrong answer triggers a tiny adjustment. Over weeks of training, those tiny adjustments accumulate into something remarkable — a model that can predict not just the next word, but coherent paragraphs, logical arguments, and even working code.

<!-- IMAGE_PROMPT: A simple loop diagram showing: "See text → Predict next word → Check answer → Adjust numbers → Repeat." The loop circles back with arrows. One side shows a red X (wrong guess) with a small dial being turned, and the other shows a green checkmark (correct guess). Clean, flat illustration with bold colors. -->

The numbers being adjusted are the **weights** you learned about in the parameters article. Training is just the process of setting all those billions of dials to the right positions.

Here's what makes training expensive:

| Factor | Scale |
|---|---|
| Data | Petabytes of text (books, websites, code) |
| Hardware | Thousands of GPUs running simultaneously |
| Time | Weeks to months of continuous computation |
| Cost | $10M–$100M+ for frontier models |

:::tip Key Takeaway
Training is a one-time investment that produces a frozen model. Once training ends, the weights are locked. The model doesn't get smarter from use — it gets smarter from retraining.
:::

## Training vs. Inference

Here's where most people get confused. Training and inference look the same from the outside — text goes in, text comes out. But under the hood, they're completely different operations.

Think of a factory. **Training** is building the factory — designing the assembly line, installing equipment, testing everything. It takes years and costs a fortune. **Inference** is the factory running — products roll off the line quickly and cheaply, using the machinery that's already built.

| | Training | Inference |
|---|---|---|
| **Purpose** | Learn patterns from data | Apply learned patterns |
| **Frequency** | Once (or rarely) | Millions of times per day |
| **Cost** | $10M–$100M+ | $0.001–$0.01 per query |
| **Time** | Weeks to months | 1–10 seconds |
| **Hardware** | Thousands of GPUs | A few GPUs per request |
| **Changes the model?** | Yes | No |

This cost gap explains why AI companies can offer free tiers. The expensive part (training) is already done. Serving your individual query costs almost nothing.

:::info Think About It
When OpenAI releases "GPT-5," they're announcing a new training run — not an upgrade to the existing model. GPT-4 doesn't slowly become GPT-5. A completely new model is trained from scratch (or near-scratch), and the old one keeps running unchanged.
:::

## AI Doesn't Learn From You

This is the most important takeaway: **when you chat with AI, it doesn't learn from your conversation.**

Think of a photograph. Training is the moment the photo is taken — it captures everything in the scene. Inference is showing that photo to people. No matter how many people look at it, the photo doesn't change. It can't add new objects or update the background.

Your conversation with ChatGPT is the same. The model was "photographed" during training. Your messages don't update its weights. Your clever prompts don't make it permanently smarter. Close the chat, and it forgets everything — not because of a bug, but because inference doesn't modify the model.

There are exceptions: some platforms save your chat history to personalize future sessions (like ChatGPT's memory feature). But that's the application storing notes about you — not the underlying model learning. The model itself remains frozen.

:::tip Key Takeaway
AI doesn't learn from your conversations. It applies what it already learned during training. This is why it can't permanently remember your preferences, your name, or that correction you made three chats ago — unless the app explicitly stores that information separately.
:::

You now understand the two phases: training creates the model, inference uses it. But "training" itself isn't one step — it's actually three distinct stages, each doing something different. The first gives the model knowledge. The second gives it focus. The third gives it manners.

**Next up:** [Fine-tuning, Pre-training, and RLHF](/level-1/fine-tuning-pre-training-and-rlhf) — the three stages that turn raw compute into the AI assistant you actually use.

## Good Read

1. [What's the Difference Between Training and Inference?](https://blogs.nvidia.com/blog/difference-deep-learning-training-inference-ai/) — NVIDIA
2. [What is AI inference?](https://cloud.google.com/discover/what-is-ai-inference) — Google Cloud
3. [What is LLM Inference?](https://www.ibm.com/think/topics/llm-inference) — IBM
4. [What is Machine Learning?](https://www.ibm.com/think/topics/machine-learning) — IBM
