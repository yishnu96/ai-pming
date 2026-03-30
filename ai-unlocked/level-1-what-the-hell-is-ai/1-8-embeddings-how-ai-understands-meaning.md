---
sidebar_position: 8
title: "Embeddings: How AI Understands Meaning"
description: "Learn what embeddings are, how AI converts words into numbers that capture meaning, and why 'time off' finds 'vacation guidelines.' No math required."
slug: /level-1/embeddings-how-ai-understands-meaning
tags: [ai-basics, embeddings, semantic-search, beginners]
keywords: [what are embeddings in ai, how ai understands meaning, embeddings explained simply, semantic search vs keyword search, king queen embedding example]
sidebar_label: "Embeddings"
---

You search your company handbook for "time off." Nothing. You try "leave policy." Still nothing. The answer is in there — filed under "vacation guidelines" — but because you used different words, the search failed.

AI had this exact problem. And the fix wasn't more keywords. It was teaching AI to understand *meaning* — using numbers.

<!-- IMAGE_PROMPT: A 2D scatter plot showing word clusters as dots on a map. One cluster contains "vacation," "time off," "annual leave" close together. Another cluster shows "invoice," "payment," "billing" nearby each other. The two clusters are far apart. Clean, flat illustration style with bold colors and no axis labels. -->
![Tokenization: English vs Japanese token comparison](/img/ai-unlocked/level-1/1-8-embeddings.png)

## Words as Locations

Imagine a map where every word has a location. Words with similar meanings sit close together. Words with different meanings sit far apart.

- "Vacation," "time off," and "annual leave" — clustered together, two blocks apart
- "Invoice," "payment," and "billing" — clustered in a different neighborhood
- "Vacation" and "invoice" — across town from each other

This is what an **embedding** does. It converts a word into a set of coordinates — a list of numbers like `[0.23, -0.91, 0.44, ...]` — that places it on this meaning map.

The core rule is simple: **distance on the map = difference in meaning.**

- Small distance = similar meaning ("vacation" ↔ "time off")
- Large distance = different meaning ("vacation" ↔ "tax filing")

This is why embedding-powered search finds "vacation guidelines" when you type "time off." It doesn't match words — it matches *locations on the meaning map*.

:::info Think About It
If "doctor" and "physician" are neighbors on the meaning map, where would "mechanic" be? Farther away — different profession, different context. But "mechanic" and "technician" would be neighbors. The map organizes words by meaning, not by spelling.
:::

## How AI Learned This

Here's the surprising part: nobody sat down and placed words on this map. The AI figured it out on its own.

During training, the AI read billions of sentences and noticed which words keep showing up near each other. "Doctor" appears near "patient," "hospital," "diagnosis." "Mechanic" appears near "engine," "repair," "garage." Words that appear in similar contexts end up at similar coordinates on the map.

Think of it this way: if you've never met someone but you know they hang out with the same friends, work the same jobs, and go to the same places — you'd guess you have a lot in common. AI figured out word relationships the same way. Not by being told. By observing patterns.

:::tip Key Takeaway
Embeddings aren't a fancy keyword lookup. A keyword system asks: "does this exact word appear?" An embedding system asks: "does this *meaning* appear?" That's why AI-powered search finds the right answer even when you use the wrong words.
:::

## Math on Meaning

Because meaning is stored as coordinates, something remarkable happens: you can do math on meaning.

The most famous example:

**King − Man + Woman ≈ Queen**

The coordinates for "king" include properties like "ruler" and "male." Subtract "male" (by removing the "man" coordinates), add "female" (by adding the "woman" coordinates), and you land almost exactly on "queen."

Nobody programmed this rule. It fell out of the map naturally — because the AI learned from billions of sentences where kings and queens, men and women, appeared in parallel contexts.

This isn't a parlor trick. It's proof that the map captures *structure* — relationships between concepts, not just which words are popular.

Think of it geographically: Paris is to France what Berlin is to Germany. The *relationship* (capital → country) is the same arrow on the map, just pointing to different locations. Embeddings capture these arrows automatically.

:::info Think About It
If embeddings can calculate King − Man + Woman ≈ Queen, what does that tell you? The map doesn't just store word frequency — it stores *relationships*. Gender, profession, hierarchy, geography — all encoded as directions on the map.
:::

## Why This Changes Search

Let's come back to where we started. You searched for "time off" and couldn't find "vacation guidelines." Here's why embedding-powered search fixes this:

**Old keyword search:** Does "time off" appear in the document? No → no result.

**Embedding search:** Where does "time off" sit on the meaning map? Right next to "vacation." → Found it.

This is called **semantic search** — search by meaning, not by matching exact words. And it's already built into tools you use every day:

- **ChatGPT's retrieval** finds relevant context from uploaded documents using embeddings
- **Notion AI search** finds notes by meaning, not just keywords
- **HR systems** match resumes to job descriptions even when the wording differs
- **Customer support bots** find the right help article regardless of how you phrase the question

:::tip Try This Now
Next time you use an AI-powered search (Notion, Slack AI, ChatGPT with files), deliberately use different words than what's in the document. Search for "contract expiry" when the document says "agreement end date." If it finds the right result, you just saw embeddings in action.
:::

Embeddings explain how AI understands meaning inside text. But here's the next question: what actually makes one AI model smarter or more capable than another? That comes down to something called parameters and weights — and the sheer amount of computing power behind them.

**Next up:** [Parameters, Weights, and GPUs](/level-1/parameters-weights-and-gpus) — the building blocks that determine how powerful an AI model is.

## Good Read

1. [What is Embedding?](https://www.ibm.com/think/topics/embedding) — IBM
2. [What are embeddings in machine learning?](https://www.cloudflare.com/learning/ai/what-are-embeddings/) — Cloudflare
3. [Introduction to Text Embeddings](https://cohere.com/llmu/text-embeddings) — Cohere LLMU
4. [Embeddings](https://developers.google.com/machine-learning/crash-course/embeddings) — Google ML Crash Course
