---
id: ai-user
title: User Experience for AI & Data
description: Design great UX for AI. Find the core user problem, build personas, and use AI-specific prototypes.
date: 2023-07-12
author: Yishnu Pramanik
sidebar_label: User Experience
tags:
  - Product Management
  - AI & Data
  - Product
  - Frameworks
  - AI PM
---

As a product manager, a core part of your role is focusing on the **User Experience (UX)**, which is about understanding the user's emotions and how easily they can interact with your product. This is different from the **User Interface (UI)**, which is the specific visual design of the product. A popular analogy explains it well: "UI is the saddle, the stirrups, and the reins. UX is the feeling you get being able to ride the horse." Your designer builds the UI; your focus is on the UX—the feeling.

### Three Types of Users

A product manager might build products for three different types of users:

* **Consumer Users:** The general public who use your product (B2C models).
* **Internal Users:** Employees within your own company. This is a very common user type for AI PMs, as many AI projects are developed to optimize internal business operations or generate internal insights.
* **SaaS (B2B) Users:** Other businesses that use your product. For AI PMs, this often involves customizing a model by retraining it on a specific client's unique data.

### Understanding the Difference: User vs. Customer

It is crucial to distinguish between your users and your customers, as they are often not the same person.

* **The Customer** is the individual or entity that *buys* the product.
* **The User** is the individual who *interacts with* the product day-to-day.

This distinction is especially important in a B2B or SaaS context, where a company executive (the customer) might purchase a tool that their employees (the users) will use. As a PM, you must be aware of the potentially different needs and motivations of both your users and your customers.

## Getting to Core Problem

A single AI product can often appeal to multiple different user groups. For example, an AI that classifies images could help casual explorers, creators organizing their photos, or an internal legal team. Since you cannot be everything to everyone, a Product Manager's first step is to focus on **one primary user group**—specifically, the one with the biggest, most urgent problem that needs solving.

### Adopting the Problem, Not the Solution

Once you've identified your user, your next job is to understand their core problem. Users, stakeholders, and leadership will constantly give you feature requests and ideas. A great PM knows not to simply build what is asked for, but to uncover the deeper need behind the request. The guiding principle is: **"Don't adopt a user's solution. Adopt a user's problem."**

### The "Three Whys" Method for Finding the Core Problem

A simple yet powerful technique for getting to the root of a request is the "Three Whys" method. By asking "why?" at least three times, you can dig past the surface-level suggestion to find the fundamental problem.

For example, an internal team requested a feature to collect the age of a book's main character.
* **First "Why?":** *Why do you need the character's age?*
  * "To know the target reader demographic."
* **Second "Why?":** *Why do you need the reader demographic?*
  * "So we can share this data with publishing houses."
* **Third "Why?":** *Why do publishers need that data?*
  * "Because they categorize and sell books based on genres like Middle Grade, Young Adult, and Adult."

The investigation revealed the core problem wasn't a lack of character age data; it was the need to classify a book by its **target demographic genre**. This understanding led to a much better and more direct solution that solved the actual problem without having to collect messy and difficult data about a character's specific age.

## User Research Method

To truly understand your user and their core problem, you should follow a structured **User Research Funnel**. This approach starts with a broad, high-level view and gradually narrows down to specific insights, ensuring you adopt the user's problem, not just your own assumptions.

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src="/work/user-research-funnel.png" alt="Stats Data" style={{ height: '40vh', width: 'auto' }} />
</div>

### The User Research Funnel

The process moves through three key stages, from quantitative data to qualitative understanding and back to quantitative validation.

* **Market Research & User Data (Top of Funnel):** Begin with broad, **quantitative** data to understand the landscape. This includes analyzing public sources like census data and research reports, or, if you have an existing product, your own user analytics. The goal is to get a high-level picture of your user base, their demographics, and their key activities.
* **Exploratory Interviews (Middle of Funnel):** Based on your initial data, select a small group of users for open-ended, **qualitative** interviews. The goal here is to understand their motivations and uncover their pain points organically. **Crucially, never present your solution idea** (e.g., "What do you think of this feature?"). This introduces bias. Instead, ask broad questions like, "How do you currently handle X?" and listen to see if they bring up the problem you're trying to solve on their own.
* **Surveys (Bottom of Funnel):** Once your interviews have given you a strong hypothesis about a common user problem, use surveys to validate it at scale. Surveys allow you to gather both quantitative and qualitative data from a much larger audience to confirm if the pain points you identified in interviews are widespread.

### The Biggest Risk: Confirmation Bias

The single biggest danger in user research is unintentionally searching for data to support a solution you have already come up with. As a product manager, you must remain vigilant against this confirmation bias. Avoid asking leading questions in interviews or surveys. The goal is to discover the user's true problem, not to validate your own pre-existing ideas.

## User Persona

After identifying your user and their core problem, the next step is to understand them on an emotional level. To help your team and stakeholders empathize with the person you're building for, you can create a **User Persona**. This is a fictional character profile, rooted in your research data, that represents your target user. It's far more effective to build for "Tom, a 26-year-old who loves 'League of Legends'," than for a dry stats page of demographic data.

### Building an Empathy Map

A powerful tool for developing your user persona is the **Empathy Map**. It's a simple framework designed to build a deeper, more empathetic understanding of your user, reminding your team that you're building for a real person with thoughts and feelings, not just a data point.

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src="/work/empathy-map.png" alt="Stats Data" style={{ height: '60vh', width: 'auto' }} />
</div>

An empathy map is typically a 2x2 grid that explores four key quadrants related to the user's core problem:

* **Says:** What the user says out loud about the problem. This can include direct quotes from your user interviews.
* **Thinks:** What the user is likely thinking about the problem but might not say publicly.
* **Does:** The actions the user currently takes, especially any workarounds they use to deal with the problem.
* **Feels:** The emotions the user experiences in relation to the problem, such as frustration, anxiety, or confusion.

### The PM's Role in Creating Personas

While a UX Designer would traditionally create these personas and empathy maps, AI and data teams often operate without a dedicated designer, especially if the product has no direct user interface. Therefore, it is a critical skill for an AI Product Manager to be able to build these tools themselves. Creating a user persona ensures that the entire team remains focused on and empathetic toward the real person they are trying to help throughout the development process.

## Prototype

A prototype is a preliminary model of a product used to test a concept with users before committing to a full build. While traditional software prototypes often rely on **wireframes** (simple visual layouts), these are often insufficient for AI products. It's difficult to convey an improved recommendation engine or a self-driving car's behavior with a static design. Therefore, AI Product Managers must use more creative prototyping methods.

### Two Prototyping Methods for AI Products

To effectively test the user experience of an AI concept, consider these two powerful techniques:

* **AI Personality Design:** This method involves testing different "personalities" for an AI to see which one resonates best with your target users. This is especially critical for products that replace human interaction, like chatbots, voice assistants, or robots. For example, by testing personas, Apple determined that Siri should have a male default voice in the UK and a female default voice in the US to best match user preferences.

* **Wizard of Oz (WOZ) Experiments:** This is a design experiment where a user believes they are interacting with a fully autonomous AI system, but in reality, a human is secretly "behind the curtain" operating the system's responses. This is an excellent way to test a complex AI idea—like an AI-powered editor or a personal recommender—and gauge user reactions to the experience before investing in building the actual model. Since the goal of many AI systems is to mimic human capabilities, having a human stand in for the AI is the perfect way to prototype the interaction.

Prototyping is essential for validating a product idea and de-risking development. For AI products, PMs must expand their toolkit beyond wireframes and use innovative methods like personality design and WOZ experiments to truly understand and perfect the user experience before the complex work of building the model begins.