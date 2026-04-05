---
title: "The Anatomy of a Good Image Prompt"
description: "Learn the five elements that separate stunning AI images from generic ones — subject, style, lighting, composition, and medium — plus why aspect ratio matters."
slug: "/anatomy-of-a-good-image-prompt"
tags:
  - AI image generation
  - prompt engineering
  - AI art
  - image prompting
readingTime: 5
sidebar_position: 5
---

# The Anatomy of a Good Image Prompt

Type *"a cat on a chair"* into any AI image generator and you will get garbage. Every time.

Not because AI is broken. Not because the tool is bad. Because you gave it permission to guess.

The AI does not know which cat. Which chair. Which room. What mood. What style. You gave it four words and asked it to make a million decisions.

A good image prompt makes those decisions for the AI.

## Five Building Blocks

Every effective image prompt contains up to five elements. You do not need all of them every time, but knowing the full toolkit means you control the output instead of hoping for something usable.

### 1. Subject

The subject is what you want to see. Be specific.

- **"A dog"** gives you a generic stock-photo dog with no personality.
- **"A weathered border collie mid-leap over a fallen log"** gives you something worth keeping.

Precision matters. Name the species, age, gender, action, expression, quantity. *"Two"* is very different from *"a crowd of."*

:::tip The Professional Test

Think of a product photo you need. Instead of *"woman with laptop,"* try *"a freelance designer in a sunlit cafe, 30s, laughing at her laptop with a flat white nearby."* See the difference in your own mental image? Same principle applies to AI.

:::

### 2. Style

Style tells the AI the visual language. This is where most prompts either shine or collapse into *"generic AI art."*

Common style references include:

- **Art movements:** Impressionism, Art Deco, Art Nouveau, Ukiyo-e
- **Photography types:** Street photography, editorial fashion, photojournalism, product photography
- **Media:** Oil painting, watercolor, charcoal sketch, 3D render, pixel art
- **Eras:** 1970s Polaroid, Victorian illustration, Y2K aesthetic
- **Genres:** Noir, cyberpunk, cottagecore, vaporwave

You can combine styles for unique results. *"Ukiyo-e woodblock print of a modern subway station"* produces something far more interesting than either style alone.

:::info

Avoid filler words like *"beautiful," "stunning," "epic,"* or *"ultra-detailed."* These do not constrain the AI's behavior. They are empty instructions.

:::

### 3. Lighting

Lighting is the single most underused element in image prompts. Photographers spend years learning it. You can describe it in five words.

Key lighting terms that work:

- **Golden hour** — warm, directional, long shadows
- **Blue hour** — cool, ambient, moody, right before sunrise or after sunset
- **Rembrandt lighting** — dramatic, triangle shadow on the cheek, a portraiture classic
- **Rim lighting** — subject outlined in light with a dramatic silhouette effect
- **Overcast / diffused** — soft, even, no harsh shadows, natural documentary feel
- **Neon** — colored artificial light sources, urban night photography
- **Volumetric** — visible light rays through fog or atmosphere

**Before:** *"a portrait of a chef"*
**After:** *"a portrait of a chef, Rembrandt lighting from the left, warm kitchen glow in the background, steam rising from a pan catching the backlight"*

Lighting does the heavy lifting between *"an image of a person"* and *"a shot."*

### 4. Composition

Composition tells the AI the camera perspective, framing, and layout.

Describe it like you would describe instructions to a photographer:

- **Shot type:** Close-up, wide shot, overhead view, extreme close-up of eyes
- **Angle:** Shot from below, bird's-eye view, eye level, Dutch angle
- **Lens feel:** *"85mm portrait lens"* is more actionable than *"professional portrait"*
- **Subject placement:** *"Subject on the left third, looking into negative space on the right"*
- **Depth of field:** Shallow background blur, everything sharp, focus tracking on subject
- **Background policy:** If you do not specify *"minimal props"* or *"clean background,"* the AI will invent clutter you never asked for

Spatial language should be boring and explicit. *"Dynamic composition"* means nothing to the AI. *"Centered, head and shoulders, plain textured wall behind, 3:2 aspect ratio"* means everything.

### 5. Medium

Medium specifies what the image should look like it was made with.

- *"Shot on medium format film"*
- *"Digital illustration with clean vector lines"*
- *"Oil painting on canvas, visible brush strokes"*
- *"Charcoal sketch on textured paper, high contrast"*
- *"3D render, Octane Engine, physically-based materials"*

Medium works hand-in-hand with style. Style is the aesthetic direction. Medium is the material pipeline.

## The Prompt Formula

When you are staring at a blank prompt field, use this structure:

**[Subject + Action] + [Setting] + [Style/Medium] + [Lighting] + [Composition]**

You do not need every element. A strong subject plus style plus lighting often beats a prompt with all elements but weak specifics. Quality beats quantity.

### Putting It All Together

**Before:** *"a beautiful landscape"*

**After:** *"a misty Scottish highland at dawn, heather blooming across rolling hills, a single stone cottage with smoke from the chimney, low clouds clinging to the valleys, atmospheric landscape photography, shot on medium format film"*

**Before:** *"a woman in a city"*

**After:** *"a Japanese woman in her 60s crossing a rain-slicked Shibuya intersection at dusk, carrying a yellow umbrella, neon signs reflected in puddles, shot from street level, cinematic framing"*

## Why Vague Prompts Fail

When you write *"a cat on a chair,"* the AI must decide:

1. What kind of cat? Tabby, Siamese, Persian, cartoon, realistic?
2. What chair? Dining chair, armchair, throne, beanbag?
3. Where? Living room, garden, space station?
4. Style? Photograph, painting, 3D render, sketch?
5. Lighting? Bright noon sunlight, warm lamp, moonlight, neon?
6. Composition? Close-up, wide, overhead, eye level?

That is six categories of decisions the AI fills with its own defaults. Those defaults produce the *"generic AI look"* everyone recognizes now. Overly glossy, center-framed, emotionally flat.

Vague prompts fail because they tell the model nothing specific. The AI has been trained on billions of images. Without constraints, it averages them all. The result is nothing in particular.

## Aspect Ratios and Resolution

The default output size for most AI image tools is square (1:1). But your content rarely is.

### Common Aspect Ratios

- **16:9** — Landscape scenes, blog headers, YouTube thumbnails, desktop wallpapers
- **9:16** — Phone wallpapers, Instagram Stories, TikTok content, vertical mobile views
- **4:5** — Instagram feed portraits (the maximum height Instagram allows)
- **1:1** — Standard square, good for generic content
- **3:2** — Classic photography ratio, natural for portraits

The aspect ratio you choose dramatically changes how the AI composes the image. A landscape scene cramped into a square looks wrong. A portrait shot stretched to 16:9 puts too much empty space around the subject.

:::tip

Most tools let you set the aspect ratio with a parameter. In Midjourney, add `--ar 16:9` at the end of your prompt. In DALL-E, you pick it from the menu before generating. Always match the ratio to your use case.

:::

### Resolution

Resolution determines how sharp the image is at different display sizes. Most generators produce images around 1024x1024 pixels by default. That is fine for screens under 15 inches, but prints and large displays need more.

If you need high-resolution output, use the tool's upscaling feature after generating a image you like. Generate at the right aspect ratio first. Upscale second. Never try to guess the final resolution until the image is right.

## Try This Now

**Exercise 1: The Bad Prompt Fix**

Write *"a nice restaurant"* and generate it. Note everything the AI got wrong. Now write a prompt that specifies: the type of restaurant, the time of day, the style of interior, the lighting mood, and the camera perspective. Generate again. The difference should be dramatic.

**Exercise 2: The Aspect Ratio Test**

Take one prompt you like. Generate it three times with three different aspect ratios: 1:1, 16:9, and 9:16. Notice how the AI recomposes the same subject for each shape. It is not just cropping. The AI rethinks the entire layout.

**Exercise 3: The Lighting Swap**

Pick a subject. Generate it three times with three different lighting setups: golden hour, neon, and overcast. Same subject, same style, same composition. Only the light changes. This single variable has more impact on mood than anything else in your prompt.

## Good Read

- [How to Write AI Image Prompts: Complete Guide](https://sureprompts.com/blog/how-to-write-ai-image-prompts/)
- [AI Image Prompt Formulas for Lighting, Style, and Composition](https://rephrase-it.com/blog/ai-image-prompt-formulas-for-lighting-style-and-composition-)
- [AI Image Prompts Guide](https://aicompetence.org/ai-image-prompts-guide/)
