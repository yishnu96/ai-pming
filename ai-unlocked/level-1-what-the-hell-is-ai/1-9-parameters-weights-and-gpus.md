---
sidebar_position: 9
title: "Parameters, Weights, and GPUs: What's Inside an AI Model"
description: "Learn what parameters and weights are, why model size matters, and why AI needs GPUs. A plain-English guide to understanding AI hardware and model architecture."
slug: /level-1/parameters-weights-and-gpus
tags: [ai-basics, parameters, weights, gpu, beginners]
keywords: [what are parameters in ai, what are weights in ai, why ai needs gpu, ai model size explained, gpu vs cpu for ai]
sidebar_label: "Parameters & GPUs"
---

GPT-4 has roughly 1 trillion adjustable numbers inside it. Your brain has about 100 trillion synapses. Both "learn" by changing how strongly different connections fire.

That's not a coincidence. And understanding what those numbers are — and why they need special hardware to run — will change how you think about choosing AI tools.

<!-- IMAGE_PROMPT: A transparent box labeled "AI Model" filled with billions of tiny dials and sliders, most blurred in the background with a few in sharp focus showing numerical values like 0.73, -1.2, 0.05. Clean, flat illustration style with bold colors and thick black outlines. -->
![Tokenization: English vs Japanese token comparison](/img/ai-unlocked/level-1/1-9-parameters-weights-first.png)


## What's Inside a Model

When someone says "GPT-4 has 1 trillion parameters," they mean there are 1 trillion adjustable numbers inside the model. That's it. No magic. Just numbers.

**Parameters** are like dials on an enormous mixing board — not 10 or 100 dials, but billions. During training, the system slowly turns each dial until the output sounds right. Once training is done, every dial is locked in place.

**Weights** are the exact positions those dials are set to. A weight of 0.73 might strengthen one pattern. A weight of -1.2 might suppress another. Together, billions of weights determine how the model responds to any input.

Here's the important part: **the training data is gone after training.** The model didn't memorize your data. What's left — frozen in place — are just the weights. The model is nothing but numbers now.

:::info Think About It
What's the difference between a parameter and a weight? A parameter is the dial. A weight is the position the dial is set to. In practice, people use the terms interchangeably — and that's fine. Just know that "175 billion parameters" means "175 billion numbers that were adjusted during training."
:::

## Does Size Actually Matter?

Here's the counterintuitive part: a 7 billion parameter model can beat a 70 billion parameter model on your specific task.

Generally, bigger models are more capable. Doubling the parameters usually improves accuracy, reasoning, and versatility. But the improvement plateaus — a 100B model isn't twice as smart as a 50B model.

And in 2026, a major shift is happening: **smaller, fine-tuned models often outperform larger general-purpose models** on specific tasks.

Think of it like a generalist doctor vs. a cardiologist. The GP knows more overall, but for heart conditions, the cardiologist wins every time. A 7B model fine-tuned on legal contracts will outperform a 70B general model for legal contract work — while being cheaper and faster.

| Size | Parameters | Use Case |
|---|---|---|
| **Small** | 1–7B | Mobile apps, edge devices, fast responses |
| **Medium** | 8–20B | Enterprise tasks, balanced speed/quality |
| **Large** | 50–200B | Complex reasoning, multi-domain tasks |
| **Very large** | 200B+ | Frontier research, most capable models |

:::tip Key Takeaway
The "best" AI for your company probably isn't the biggest. It's the right-sized model for your task. A fine-tuned 7B model can be cheaper, faster, and more accurate than a general 70B model — if it's optimized for what you need.
:::

## Why AI Needs GPUs

Think about the last time a webpage loaded slowly. Now imagine waiting 45 minutes for an AI to respond to a single prompt. That's what happens if you try to run AI on a regular CPU.

A **CPU** (your computer's normal processor) is like one cashier processing every customer one at a time. It's great at complex, sequential tasks — but AI needs billions of simple calculations done simultaneously.

A **GPU** is like 1,000 cashiers all working at the same time. Each one handles a different calculation in parallel. AI models need massive matrix multiplications at every step — exactly the kind of repetitive, parallel math GPUs were built for.

Here's the fun twist: GPUs weren't designed for AI. They were designed for **video games** — rendering millions of pixels on screen simultaneously. AI researchers realized in the early 2010s that the same chip architecture was perfect for neural network math.

<!-- IMAGE_PROMPT: Side-by-side comparison. Left: a single cashier with a long line of customers labeled "CPU - one at a time." Right: 1,000 parallel cashier lanes with customers flowing through simultaneously labeled "GPU - all at once." Clean, flat illustration style with bold colors. -->
![Tokenization: English vs Japanese token comparison](/img/ai-unlocked/level-1/1-9-parameters-weights-second.png) 

:::info Think About It
Why can't a regular CPU handle AI workloads at the same speed? Because a CPU processes tasks one at a time (or a handful at most). A GPU has thousands of smaller cores running in parallel. AI's billions of matrix multiplications are perfectly suited for this parallel architecture.
:::

## VRAM: The Hard Wall

Here's the constraint nobody mentions when they talk about model size: **GPU memory (VRAM).**

Running a 70 billion parameter model requires roughly 140GB of GPU memory. A single top-of-the-line NVIDIA A100 has 40–80GB. You'd need at least two — and each costs $10,000–$30,000.

Think of VRAM as a desk. You can only work with what fits on the desk right now — even if you have a huge filing cabinet for storage. A bigger model needs a bigger desk. If the model doesn't fit, it simply won't run.

This is why **"what model can I run?"** is always a VRAM question first. And it's why cloud API access exists — paying per use is far cheaper than buying the hardware yourself for most businesses.

| Model Size | VRAM Needed | Hardware Required |
|---|---|---|
| 7B | ~14GB | Single consumer GPU |
| 13B | ~26GB | High-end consumer GPU |
| 70B | ~140GB | 2-4 data center GPUs |
| 200B+ | ~400GB+ | Multiple enterprise GPUs |

NVIDIA dominates AI hardware because their **CUDA** software ecosystem is the industry standard. The main chips you'll hear about: A100, H100, and the newer H200 — each designed for AI workloads at different scales.

:::tip Try This Now
Next time someone mentions a model size (like "we're using a 7B model" or "GPT-4 has a trillion parameters"), you now know what that means: the number of adjustable numbers inside, the hardware needed to run it, and the cost tradeoff between size and speed.
:::

Now you know what's inside an AI model and what hardware runs it. But there's another hard limit that shapes every conversation you have with AI — one that has nothing to do with hardware. It's about how much text AI can "see" at once.

**Next up:** [Context Window, Memory, and Performance](/level-1/context-window-memory-and-performance) — why AI forgets everything between conversations, and what you can do about it.

## Good Read

1. [What are Model Parameters?](https://www.ibm.com/think/topics/model-parameters) — IBM
2. [Why GPUs Are Great for AI](https://blogs.nvidia.com/blog/why-gpus-are-great-for-ai/) — NVIDIA
3. [What is a GPU & Its Importance for AI](https://cloud.google.com/discover/gpu-for-ai) — Google Cloud
4. [AI Model Parameters Explained: 2B vs 7B vs 40B](https://travis.media/blog/ai-model-parameters-explained/) — Travis Media
