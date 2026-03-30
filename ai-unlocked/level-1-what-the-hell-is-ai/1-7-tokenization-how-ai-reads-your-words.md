---
sidebar_position: 7
title: "Tokenization: How AI Reads Your Words"
description: "Learn what tokens are, why AI reads chunks instead of words, and how tokenization affects your API costs and speed. Includes a hands-on tokenizer tool."
slug: /level-1/tokenization-how-ai-reads-your-words
tags: [ai-basics, tokenization, tokens, beginners]
keywords: [what are tokens in ai, tokenization explained, how ai reads text, ai tokens and cost, why ai uses tokens not words]
sidebar_label: "Tokenization"
---

You've been chatting with AI for months. You type a sentence, it responds. Feels simple, right?

But AI doesn't read your sentence the way you do. It doesn't even see words. It sees something much stranger — and understanding what it sees will explain why your Japanese colleague pays twice as much to use the same AI tool you do.

## Not Words. Chunks.

When you read "unbelievable," you see one word. AI sees three chunks:

**"un" + "believ" + "able"**

These chunks are called **tokens**. They're the fundamental units AI works with — not words, not letters, but something in between.

Some words are common enough to be a single token. "Cat" is one token. "The" is one token. But longer or rarer words get split into smaller pieces the model recognizes.

Here's what a simple sentence looks like in tokens:

> "The cat sat on the mat."
> → "The" + " cat" + " sat" + " on" + " the" + " mat" + "."
> = **7 tokens** for 6 words

The rough rule: **1 English word ≈ 1.3 tokens**. But that ratio shifts dramatically depending on the word — and the language.

:::info Think About It
If "unbelievable" is 3 tokens and "cat" is 1 token, what determines the split? Frequency. Common words stay whole. Rare words get broken into familiar pieces. The AI doesn't need to "know" every word — it just needs to recognize the parts.
:::

## Why Not Just Words?

Using whole words sounds simpler. So why doesn't AI just do that? Two problems:

**Problem 1: Too many words.** English alone has over 170,000 active words. Add names, slang, technical jargon, and new words ("COVID," "ChatGPT," "TikTok") — the list never stops growing. A word-based system would need an impossibly large vocabulary that keeps expanding.

**Problem 2: Unknown words break everything.** If the AI encounters a word it's never seen — a brand name, a typo, a foreign term — it's stuck. It can't process what it can't recognize.

Subword tokens solve both problems. "ChatGPT" might split into "Chat" + "G" + "PT" — the AI has never seen the whole word, but it knows the parts. New words, misspellings, technical terms — all handled by breaking them into familiar pieces.

The most common method for creating these token vocabularies is called **BPE** (Byte Pair Encoding) — it's what GPT, Llama, and most major models use. You don't need to remember the name. Just know that the system learns which chunks are most useful by analyzing enormous amounts of text.

:::tip Key Takeaway
Subword tokenization gives AI a compact, flexible vocabulary that handles any text — including words it's never seen before. It's the reason AI can process brand names, slang, and typos without breaking.
:::

## Your Language, Your Bill

Here's where tokenization gets personal: **API pricing is per token, not per word.**

The same idea expressed in different languages produces wildly different token counts:

<!-- IMAGE_PROMPT: A side-by-side comparison showing the same short phrase in English and Japanese. English side shows 5-6 colored token blocks. Japanese side shows 12-15 colored token blocks for the same meaning. Clean, flat illustration with bold colors and a dollar sign showing the cost difference. -->
![Tokenization: English vs Japanese token comparison](/img/ai-unlocked/level-1/1-7-tokenization.png)

| Language | Phrase | Words | Tokens (approx.) |
|---|---|---|---|
| English | "Hello, how are you?" | 4 | 5-6 |
| Japanese | "こんにちは、お元気ですか？" | 4-5 | 12-15 |

Same meaning. Same AI tool. **2-3x the tokens in Japanese.** And since you pay per token, that means 2-3x the cost.

Why? English words are separated by spaces, which makes tokenization straightforward. Chinese, Japanese, and Korean text doesn't use spaces between words. Characters are semantically rich but don't align neatly with how tokenizers split text. Models trained primarily on English have vocabularies optimized for English — other languages get broken into more, smaller pieces.

This also affects speed. More tokens means more processing time. A verbose prompt in any language costs more and responds slower than a concise one.

:::info Think About It
If an English prompt costs $0.01 to process, the same prompt in Japanese might cost $0.02-0.03. Over thousands of API calls per month, that language gap adds up significantly. This is a structural reality of how tokenization works, not a limitation that's being "fixed."
:::

## See It Yourself

Theory is useful. Seeing it is better.

OpenAI provides a free tokenizer tool where you can paste any text and watch it get sliced into tokens in real time:

**[platform.openai.com/tokenizer](https://platform.openai.com/tokenizer)**

Each token gets highlighted in a different color. You can see exactly where words split, count the total, and compare different inputs.

:::tip Try This Now
1. Go to [platform.openai.com/tokenizer](https://platform.openai.com/tokenizer)
2. Paste: "The quick brown fox jumps over the lazy dog"
3. Count the tokens (you'll see about 9)
4. Now paste the same sentence translated to Japanese or Chinese (use Google Translate)
5. Watch the token count jump — same meaning, more tokens

This is the single most useful exercise for understanding how AI actually processes your text.
:::

You now know how AI slices text into tokens — and why that matters for your wallet and your wait time. But once AI has those tokens, what does it actually do with them? It turns each one into a set of numbers that capture *meaning*. And that's where things get genuinely fascinating.

**Next up:** [Embeddings: How AI Understands Meaning](/level-1/embeddings-how-ai-understands-meaning) — how AI converts tokens into numbers that carry meaning.

## Good Read

1. [What are tokens and how to count them?](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them) — OpenAI Help Center
2. [Explaining Tokens — the Language and Currency of AI](https://blogs.nvidia.com/blog/ai-tokens-explained/) — NVIDIA
3. [Tokenization in large language models, explained](https://seantrott.substack.com/p/tokenization-in-large-language-models) — Sean Trott
