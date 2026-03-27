---
sidebar_position: 3
title: "LLM Terminology — The Spec Sheet Behind Every AI Model"
description: "Context window, parameters, weights, latency, throughput, memory, and GPUs — every key LLM term explained simply for non-technical professionals."
slug: /llm-terminology
tags: [ai-foundation, llm, terminology, beginners]
keywords:
  [
    ai terminology for beginners,
    what is context window in ai,
    llm parameters explained,
    why gpus are important for ai,
    ai latency and throughput,
  ]
sidebar_label: "LLM Terminology"
authors: [yash]
---

Every AI model has a spec sheet. You have probably seen numbers like "200K context window" or "405 billion parameters" thrown around in announcements from OpenAI, Google, or Anthropic. They sound impressive, but what do they actually mean for you?

Think of it this way. When you buy a car, you check horsepower, fuel efficiency, and trunk space. You don't need to be a mechanic — you just need to know what matters. AI models work the same way. A handful of key specs tell you what a model can do, how fast it does it, and what hardware powers it.

In the [previous article](/ai-unlocked/training-and-inferencing), we covered how AI models learn through training and respond through inference. Now let's decode the terms you will see on every model's spec sheet.

<!-- IMAGE_PROMPT: A clean, friendly infographic showing an "AI Model Spec Sheet" styled like a car spec sheet. On the left, a simple AI robot icon. On the right, labeled specs: Parameters, Context Window, Latency, Throughput, Memory, GPU. Each has a small icon next to it (brain for parameters, ruler for context window, stopwatch for latency, highway for throughput, notepad for memory, chip for GPU). Bright colors, thick black borders, neobrutalism style. -->

## Size: The Brain

### Parameters

When we talk about a model having "70 billion parameters" or "405 billion parameters," we are describing its brain size.

**Parameters are the individual numbers inside a model that control how it thinks.** During [training](/ai-unlocked/training-and-inferencing), the model adjusts these numbers millions of times until it gets good at recognizing patterns in language.

Here is a simple analogy. Imagine learning to cook. Every time you taste your dish and adjust the salt, the heat, or the cooking time — each adjustment is like one parameter being tuned. A home cook might track 5-10 adjustments. An AI model tracks billions.

More parameters generally means the model can handle more complex tasks — but it also means it needs more computing power to run.

| Model | Parameters |
| --- | --- |
| GPT-3 | 175 billion |
| Llama 3 (small) | 8 billion |
| Llama 3 (large) | 405 billion |
| GPT-4 | ~1.8 trillion (estimated) |

### Weights

You will often hear "parameters" and "weights" used interchangeably. They are closely related but not identical.

**Weights are the actual values stored inside those parameters.** If parameters are the dials on a mixing board, weights are the specific positions those dials are set to. During training, the model keeps adjusting its weights until it produces accurate responses.

When someone says they are downloading "model weights," they mean the finished product — all those billions of numbers, already tuned and ready to use. The weights are what make GPT-4 different from Llama. Same architecture concept, different learned knowledge.

:::info Think About It
If two models have the same number of parameters but different weights, they would behave completely differently. Why? Because the weights represent what each model learned from its unique training data — like two students who studied different textbooks.
:::

## Speed: The Engine

### Latency

**Latency is the time between your question and the first word of the AI's response.** It is the pause you feel after hitting "Send."

Think of ordering coffee. Latency is how long you wait between placing your order and receiving your cup. A fast barista has low latency. A slow one has high latency.

For AI chatbots and voice assistants, low latency matters a lot. Nobody wants to wait 10 seconds for a response mid-conversation. Most modern AI models aim for latency under 1-2 seconds for the first token to appear.

### Throughput

**Throughput is how many requests an AI can handle at the same time.** While latency measures speed for one person, throughput measures capacity for many.

Back to the coffee shop. Latency is how fast one coffee gets made. Throughput is how many coffees the shop can serve per hour. A single barista might have great latency (fast hands) but low throughput (only one person working). Add five baristas, and throughput shoots up.

This matters when companies deploy AI for thousands of users simultaneously. A model with high throughput can serve a busy customer support system without slowing down.

:::tip Key Takeaway
When choosing an AI tool, think about your use case. Building a chatbot? Prioritize low latency. Processing thousands of documents overnight? Prioritize high throughput.
:::

## Capacity: The Workspace

### Context Window

As we learned in [Embeddings and Tokenization](/ai-unlocked/embeddings-and-tokenization), tokens are the small pieces AI breaks your text into. The **context window** is the maximum number of tokens a model can work with at one time.

Think of the context window as a desk. Everything the AI can "see" during your conversation — your messages, its responses, any documents you uploaded — has to fit on that desk. Once the desk is full, older items fall off the edge.

This is why long conversations sometimes go sideways. The AI is not forgetting on purpose. It literally cannot see the earlier messages anymore.

Here is how context windows have grown over time:

| Model | Context Window | Roughly Equals |
| --- | --- | --- |
| GPT-3.5 | 4,000 tokens | ~6 pages |
| GPT-4 | 128,000 tokens | ~200 pages |
| Claude 3.5 | 200,000 tokens | ~300 pages |
| Gemini 1.5 Pro | 2,000,000 tokens | ~3,000 pages |

The jump is dramatic. Early models could barely hold a short conversation. Today's models can process entire books in one go.

:::caution Important
The context window includes both your input AND the model's output. If you paste a 100-page document and the context window is 200 pages, you only have about 100 pages left for the AI's response and any follow-up questions.
:::

### Memory

Context window is short-term — it only lasts for one conversation. But what about remembering things across conversations? That is where **memory** comes in.

AI memory comes in two flavors:

**Short-term memory** is the context window itself. Everything within the current conversation. When the conversation ends or the window fills up, it is gone.

**Long-term memory** is a newer feature that some AI tools now offer. ChatGPT, Claude, and others can save key facts about you — your name, your job, your preferences — and recall them in future conversations. This is not the model itself remembering. Behind the scenes, the system writes notes and injects them into the context window of your next chat.

Think of it this way. Short-term memory is a whiteboard you erase after each meeting. Long-term memory is a notebook you carry between meetings and flip open at the start of each one.

:::info Think About It
If long-term memory is just notes injected into the context window, what happens when someone has years of saved memories? The system has to choose which memories are relevant — it cannot load everything every time.
:::

## Hardware: The Engine Room

### GPU

Every term we have covered — parameters, latency, throughput, context window — ultimately depends on one piece of hardware: the **GPU** (Graphics Processing Unit).

GPUs were originally built for video games. Games need to calculate the color and position of millions of pixels on your screen at the same time. It turns out AI needs something almost identical: multiplying millions of numbers at the same time.

A regular computer processor (CPU) handles tasks one after another, like a single cashier at a grocery store. A GPU handles thousands of tasks simultaneously, like having a thousand cashiers all ringing up customers at once.

This is why AI companies spend billions on GPUs. NVIDIA's H100 chip became the most sought-after piece of hardware in the tech world — not because of gaming, but because training and running large AI models requires the kind of parallel math that only GPUs can deliver efficiently.

Here is how GPUs connect to every term we covered:

| Term | GPU Connection |
| --- | --- |
| Parameters | More parameters need more GPU memory to store |
| Weights | Loading weights into GPU memory is the first step of inference |
| Latency | Faster GPUs produce responses more quickly |
| Throughput | More GPUs allow more simultaneous users |
| Context Window | Larger context windows require more GPU memory |

<!-- IMAGE_PROMPT: A simple illustration comparing CPU vs GPU. On the left, a single highway lane labeled "CPU" with cars going one by one. On the right, a massive highway with hundreds of lanes labeled "GPU" with many cars moving simultaneously. Below, text reads "AI needs thousands of calculations at once — GPUs deliver." Clean, bold, neobrutalism style with thick black borders and bright colors. -->

:::tip Key Takeaway
You do not need to buy a GPU or understand chip architecture. But knowing that GPU availability directly affects AI model speed, cost, and capability helps you understand why some AI tools are more expensive or slower than others.
:::

## What You Learned

Every AI model can be described by a handful of key specs:

- **Parameters and weights** determine how much the model knows and how it thinks
- **Latency and throughput** describe how fast and how scalable it is
- **Context window and memory** define how much information it can work with at once
- **GPUs** are the hardware that makes all of it possible

You don't need to memorize exact numbers. But the next time you see a model announcement bragging about "1 million token context" or "405 billion parameters," you will know exactly what that means — and whether it matters for your use case.

Now that you understand the terminology behind AI models, the next topic builds on one of the most important concepts we touched on: memory. In [What is RAG?](/ai-unlocked/retrieval-augmented-generation), we will explore how AI can reach beyond its training data and pull in fresh, real-time information — solving one of the biggest limitations of every model we discussed here.

## Good Read

- [What is a Context Window? (IBM)](https://www.ibm.com/think/topics/context-window)
- [What is a Context Window for Large Language Models? (McKinsey)](https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-a-context-window)
- [What Are LLM Parameters? A Simple Explanation (Towards AI)](https://pub.towardsai.net/what-are-llm-parameters-a-simple-explanation-of-weights-biases-and-scale-c2dde8945738)
- [Why GPUs Are Great for AI (NVIDIA Blog)](https://blogs.nvidia.com/blog/why-gpus-are-great-for-ai/)
- [What is a GPU and Its Importance for AI (Google Cloud)](https://cloud.google.com/discover/gpu-for-ai)
- [Understanding Latency in AI (Galileo AI)](https://galileo.ai/blog/understanding-latency-in-ai-what-it-is-and-how-it-works)
