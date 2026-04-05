---
title: Evaluating and Using AI Images
description: How to spot AI image artifacts, judge if an image is good enough for your purpose, and navigate the ethics of deepfakes and copyrighted styles.
slug: /evaluating-and-using-ai-images
hide_table_of_contents: false
sidebar_position: 7
---

# Evaluating AI Images

Last month, a small restaurant chain in the UK posted a gorgeous photo of their new summer menu. The salad looked like it was photographed for a magazine — crisp lettuce, golden hour lighting, everything perfectly composed. The only problem? The fork in the photo had six tines. And one was melting into the edge of the plate.

Someone noticed. The post went viral — for the wrong reasons. The restaurant didn't know better about AI image artifacts, and they used the image directly on their website. Thousands of people saw it.

This is not a rare story anymore. AI Forensics found that **25% of posts on TikTok are now AI-generated content**, a flood of synthetic imagery most people don't recognize as fake. And as researchers at the University at Buffalo have documented, deepfakes have grown from 500,000 online instances in 2023 to about **8 million in 2025** — an annual growth rate of 900%.

Here's the reality: AI image generators are good, but they're not perfect. And using an AI-generated image in your work means understanding both what it gets wrong and what it gets right.

## The Artifacts Checklist

Every AI image generator — from Midjourney to DALL-E — produces recognizable errors. They're called **synthetic artifacts**. Once you know where to look, they become easy to spot.

### Hands and Fingers

The classic giveaway. AI models struggle with hands because human hands have complex structure — joints, overlapping fingers, varying angles — and training data contains millions of hand positions that don't always make sense to a model trying to predict the most likely pixel arrangement.

Look for:
- Extra or missing fingers
- Fingers merging into each other
- Nails bending in impossible directions
- Hands that look like they have too many joints

### Text in Images

AI generators treat text as visual pattern, not language. The letters they produce often look like real letters but spell nothing recognizable.

Look for:
- Signs or labels with gibberish text (like "COFEEE SHOP" instead of "COFFEE SHOP")
- Letters in different fonts on the same sign
- Text that curves or warps unnaturally
- Words in the wrong writing direction for the language

### Background and Pattern Errors

Even when the main subject looks convincing, AI generators often mess up surrounding details.

Look for:
- Background objects that blend into each other or don't connect properly
- Repeating patterns that break mid-sequence (tiles, wallpaper, fabric)
- Reflections in mirrors or windows that don't match the scene
- Shadows that point in different directions
- Glasses frames that don't connect to each other
- Shoes with asymmetrical or impossible construction

:::warning[Zoom In Every Time]
Before using any AI-generated image, zoom in at least 200%. Most artifacts are visible only at close inspection. The image may look perfect at thumbnail size — but fail completely at full resolution.
:::

## Is It Good Enough?

Not every AI artifact means the image is unusable. The real question is: **good enough for what?**

### Low-Risk Uses

These uses can tolerate minor artifacts because most viewers won't look closely:

- Social media thumbnails and post images
- Blog post headers where text is overlaid
- Internal presentations and mood boards
- Concept mockups for team discussion

:::tip[The Thumbnail Rule]
If the image will be displayed at less than 300 pixels wide, most artifacts become invisible. An AI image that's imperfect at full size may be perfectly fine as a thumbnail.
:::

### Medium-Risk Uses

These require a careful review because your audience will look more closely:

- Website hero images
- Marketing materials for email campaigns
- Slides presented to clients or stakeholders
- Printed flyers and brochures

### High-Risk Uses

These demand near-perfect quality because the image represents your brand:

- Product photography or commercial advertising
- Publications with editorial standards
- Print media in large formats (posters, billboards)
- Legal or official documents

:::info[Quick Decision Framework]
Ask three questions:
1. **Will people look closely?** If yes, scrutinize harder.
2. **Does the image represent your brand directly?** If yes, perfection matters.
3. **Can you explain it if someone asks?** If you can't explain why it's AI-generated, don't use it.
:::

## Ethics: What to Avoid

Using AI-generated images is not just about quality. It's about responsibility.

### Deepfakes and Real People

A deepfake is AI-generated media that depicts a real person doing or saying something they never did. As computer scientist Siwei Lyu from the University at Buffalo has noted, deepfakes have crossed what he calls the "indistinguishable threshold" — meaning they can now reliably fool non-expert viewers in everyday scenarios like video calls and social media.

**Never use an AI image that depicts:**
- A specific, recognizable person without their consent
- A public figure in a misleading context (political, endorsement, personal)
- Anyone in a scenario that could damage their reputation

:::warning[This Is Not a Gray Area]
Deepfakes depicting real people without consent are both ethically wrong and increasingly illegal. Multiple jurisdictions have passed deepfake-specific legislation. If your AI generator produces a face that looks like someone real, discard the image and regenerate.
:::

### Copyrighted Art Styles

AI models are trained on billions of images from the internet, many of which are under copyright. This creates a gray area: the images AI generates are not direct copies, but they can evoke specific artists' styles so accurately that they effectively replicate someone's creative work.

Consider before using "in the style of [living artist]" prompts:
- The artist did not consent to having their style replicated
- It may confuse your audience about the source of the imagery
- If your project is commercial, it could raise legal questions

**A better approach:** Describe the visual qualities you want — "warm watercolor illustration with soft edges" — rather than naming a specific artist. This achieves a similar aesthetic without the ethical concern.

### General Rules to Follow

1. **Disclose use of AI** when the image is used publicly, especially in journalism, marketing, or academic contexts
2. **Do not use AI images to mislead** — for example, fake product photos before the product exists, or fake event attendance photos
3. **Check your organization's policy** — many companies now have guidelines about AI-generated content
4. **Keep records** of your prompts and the tool used, so you can answer questions about the image's origin

## Good Read

- [AI Forensics: The Human Guide to Detecting AI Imagery](https://aiforensics.org/work/ai-detection-guide) — A detailed, step-by-step guide to identifying synthetic artifacts in AI-generated images and videos
- [Deepfakes Leveled Up in 2025 — University at Buffalo](https://www.buffalo.edu/home/story-repository.host.html/content/shared/university/news/ub-reporter-articles/stories/2026/01/lyu-conversation-deep-fakes-2026.detail.html) — Expert perspective on how deepfakes have evolved and why they matter
- [International AI Safety Report 2026](https://internationalaisafetyreport.org/publication/international-ai-safety-report-2026) — Comprehensive report on AI safety, ethics, and governance from leading global organizations
