---
id: ai-product-development
title: Product Development for AI & Data
description: Learn the AI development lifecycle. Master the AI Flywheel, dual-approach problem solving & prioritization.
date: 2023-07-14
author: Yishnu Pramanik
sidebar_label: Product Development
tags:
  - Product Management
  - AI & Data
  - Product
  - Frameworks
  - AI PM
---

Unlike traditional products which have a lifecycle of rise and fall, AI products operate in a continuous, self-improving cycle known as the **AI Flywheel Effect**. While a product like a CD-ROM becomes less valuable over time, an AI product like voice recognition becomes more valuable and more competitive the more it is used.

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src="/work/product-lyfecycle.png" alt="Stats Data" style={{ height: '20vh', width: 'auto' }} />
</div>

**The Traditional Product Lifecycle:** Follows a predictable curve of introduction, growth, maturity, and eventual decline. The product's value diminishes over its lifecycle.

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src="/work/ai-flyweel.png" alt="Stats Data" style={{ height: '30vh', width: 'auto' }} />
</div>

**The AI Flywheel Effect:** This is a virtuous cycle where the product improves with use. It works as follows:
    1.  You start with **Data**.
    2.  This data is used to build an **AI** that makes better **Predictions**.
    3.  Better predictions create a better **Customer Experience**.
    4.  A better experience attracts **More Users**.
    5.  More users generate **More Data**, which feeds back into the start of the cycle, making the AI even better.

**A Classic Example: Google's Autocomplete.** This feature perfectly illustrates the flywheel:
    * Google used its massive amount of **search query data** to build an AI that could predict what users were typing.
    * This **better prediction** improved the customer experience by making search faster.
    * The great experience led to **more users** choosing Google.
    * More users generated even **more search data**, which was then used to retrain and improve the autocomplete AI, making it more accurate over time.

**The AI PM's Goal:** The key responsibility for an AI Product Manager is to ensure their product is designed to fit this flywheel. You must build a system where increased usage naturally generates more data that can be used to continuously improve the model, creating a growing competitive advantage.

While traditional product management focuses on solving problems from one direction, an AI Product Manager must use a dual approach, generating ideas from two distinct starting points.

## Top & Bottom Problem Solving

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src="/work/user-research-approch.png" alt="Stats Data" style={{ height: '30vh', width: 'auto' }} />
</div>

**The Top-Down (Problem-First) Approach:** This is the classic product management method. You start with a core user problem and then brainstorm various solutions.
    - **Challenge for AI PMs:** For any given problem, the best solution might not involve AI at all. This means an AI PM could spend a great deal of time on user research only to conclude that a simple, non-AI feature is the right answer, which doesn't help them build AI products.

**The Bottom-Up (Data-First) Approach:** This method is unique to AI and data product management. You start with a large, complete, and unique dataset that your company owns and then brainstorm AI-powered solutions that could leverage this valuable asset.
    - **Benefit:** This approach is much more likely to generate ideas that genuinely require an AI or data-science solution.
    - **Risk:** The solutions generated from a dataset might not solve a critical or high-priority user problem. It's a balance that must be carefully managed.

**The PM's Role: Balancing Both Approaches:** The AI PM's job is not to be the sole problem-solver but to facilitate idea generation from both directions. Your role is to listen to both the problems and the data-driven ideas and weigh their respective strengths and weaknesses.

**Gathering Inputs for Both Approaches:**
    - **For Core Datasets:** You should work closely with your data team (lead data scientists, data engineers) to identify the strongest and most unique datasets your organization possesses.
    - **For Core Problems:** You should gather problems from multiple sources, which can be remembered by the acronym **EMUC**:
        - **E**mployees: Anyone in the company, including your own ideas.
        - **M**etrics: Insights from product usage data and analytics.
        - **U**sers: The people who directly interact with the product.
        - **C**ustomers: The individuals or organizations who pay for the product.

## Product Ideation Techniques

After identifying a core problem or a core dataset, the next step is to generate creative solutions. However, a traditional, unstructured brainstorm can be flawed, as it can make people nervous to share, introduces bias, and is often the only method used. To generate better ideas, it's crucial to use structured techniques with a diverse group of people from various roles and backgrounds.

Here are three effective product ideation techniques:

1. **Crazy Eights:** This technique uses speed to force creativity. Each participant folds a piece of paper into eight sections. Then, for a given problem or dataset, they have a very short, fixed amount of time (e.g., 15 seconds) to sketch or write an idea in each of the eight boxes. The intense time pressure prevents overthinking and self-censorship, encouraging a high quantity of raw ideas that can be filtered later.

2. **Round Robin:** This is a collaborative method for building upon ideas. Everyone starts by writing down one idea on a piece of paper in one minute. Then, everyone passes their paper to the person on their left. For the next minute, each person adds a new idea to the page they just received, inspired by what's already written. This process of passing and adding continues until everyone gets their original paper back, now filled with developed and evolved concepts.

3. **The Fake Press Release:** This technique encourages big, innovative thinking. Participants are asked to imagine their solution is a huge success and to write a "fake press release" for it. In about five minutes, they must write three key things:
    -  A catchy press headline.
    -  A brief summary of the idea.
    -  A quote from a happy customer.
    This exercise forces the group to think about the product's major benefits and how it would be perceived as a groundbreaking innovation.

For an AI Product Manager, using a variety of these techniques is especially important because you need to generate ideas from two directions: top-down (from a core problem) and bottom-up (from a core dataset).


## Complexity vs. Benefit Prioritization

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src="/work/proptratization-graph.png" alt="Stats Data" style={{ height: '50vh', width: 'auto' }} />
</div>

Product prioritization is the critical task of identifying what needs to be built now versus what can be done later. For AI and data products, this requires a structured approach that goes beyond simply listening to the loudest users, chasing quick wins, or relying on gut feelings.

**The AI Prioritization Graph:** The core method for prioritizing AI projects is to plot them on a 2x2 graph. This provides a clear, data-informed way to make decisions.
    - **The Y-Axis (Vertical) is Technical Complexity:** Your technical team ranks each potential product idea on a scale of 1 (very easy) to 10 (nearly impossible) based on their expert opinion of development difficulty. Simpler methods like predictive analytics are less complex than advanced methods like reinforcement learning.
    - **The X-Axis (Horizontal) is User Benefit:** As the product manager, you rank each idea on a scale of 1 (low benefit) to 10 (high benefit). This ranking is based on your user research—interviews, surveys, testing, and market analysis.

**The Four Quadrants of Prioritization:** Once plotted, your ideas will fall into one of four categories, which dictates their priority.
    1.  **Must Do (Bottom Right: High Benefit, Low Complexity):** These are your top priorities. They deliver the maximum user value for the minimum technical effort and should generally be tackled first.
    2.  **Need to Do (Top Right: High Benefit, High Complexity):** These are next in line. They provide significant value but require a major investment of time and resources.
    3.  **Can Do (Bottom Left: Low Benefit, Low Complexity):** These are lower priority. While easy to build, they don't provide as much user benefit as other ideas.
    4.  **Do Case by Case (Top Left: Low Benefit, High Complexity):** These are your lowest priority and should often be avoided. They are very difficult to build and offer little return.

**Key Considerations and Strategy:** A common mistake is being distracted by the "newest and sexiest" AI methods, leading to over-investment in highly complex features for minimal gain. The "Must Do" quadrant is almost always the best place to start.
    - **An Important Exception:** For organizations *just starting* their AI journey, it can be strategic to tackle **"Can Do"** projects immediately after **"Must Do"** projects. While these "Can Do" ideas have lower user benefit, their low complexity allows the team to deliver value quickly. This helps build the organization's confidence and understanding of AI before committing to the more difficult, high-risk "Need to Do" projects.

## MVPs & MVDs (Minimum Viable Data)

While a **Minimum Viable Product (MVP)** is a core concept in traditional product development, its application to AI and data science products is often limited.

**The Traditional MVP:** An MVP is the simplest, most pared-down version of a product that can be released to users to gather feedback quickly. The goal is to avoid over-investing in a complex product that nobody wants.
    - *Analogy:* To solve the problem of getting from point A to B, you don't build a car piece by piece. You start with a skateboard (a viable product), get feedback, and iterate towards a scooter, then a bike, and eventually a car.

**Why MVPs Fail for AI:** The concept of a "simple version" often doesn't make sense for complex AI systems.
    - How do you launch an MVP of a driverless car? Have it drive "half as well"?
    - How do you create an MVP of a recommendation system? Launch one with recommendations that are only half as good?
    - A traditional MVP approach for these products won't provide the right kind of feedback to validate the core AI.

**The AI Alternative: Minimum Viable Data (MVD):** For AI products, it's often better to focus on the MVD. This is the **smallest amount of data required** to develop a functional version of your AI model.
    - Instead of starting with massive datasets that are time-consuming to store, clean, and process, the team starts with the smallest viable dataset and the simplest possible model.
    - *Analogy:* Instead of building a complex deep neural net from day one, you start with a simple model like **regression analysis** that requires little data. As you collect more data and validate the approach, you can iterate to more complex models like **decision trees**, and only later move to a deep neural net that requires massive amounts of data.

**Benefits of the MVD Approach:** The MVD approach de-risks AI development much like an MVP de-risks traditional products. It allows your team to answer critical questions early with minimal investment:
    - Are we leveraging the right kind of data?
    - Is the model's performance improving with each iteration?
    - Are the results providing value to the user or the business?
    - While there are exceptions (some problems like image recognition require deep learning from the start), the principle of starting with the minimum data and infrastructure possible remains a valuable strategy for AI product managers.

## Agile & Data Kanban

While agile development is the standard for building products iteratively, the popular **Scrum** framework is often a poor fit for AI and data science projects. Scrum's use of fixed-time "sprints" (e.g., 1-2 weeks) doesn't align with the unpredictable and experimental nature of AI work, where it's nearly impossible to guarantee a workable model in a set timeframe.

A better-suited agile methodology for AI teams is **Kanban**.

**What is Kanban?** Kanban (Japanese for "signboard") is a framework designed to visualize work and manage flow, making it ideal for teams whose work isn't tied to a strict schedule, like research or customer support. Instead of pushing work into a fixed sprint, teams "pull" tasks from a backlog as they have the capacity. Its core goal is to limit the amount of "Work in Progress" (WIP) at any given time to prevent bottlenecks.

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src="/work/kanban.png" alt="Stats Data"  />
</div>

**The "Data Kanban" Board:** For AI projects, a standard Kanban board can be modified into a "Data Kanban" board to reflect the unique workflow. The key difference is that the backlog consists of **promising datasets** to work with, not a list of features. The typical columns are:
    1.  **Backlog:** A list of promising datasets.
    2.  **Processing:** The stage for preparing and cleaning the data.
    3.  **Modeling:** Building a model with the cleaned data.
    4.  **Training:** The iterative process of training and retraining the model.
    5.  **Testing:** Evaluating the model's performance against requirements.
    6.  **Done.**
    This visual workflow helps the entire team identify bottlenecks—for instance, if too many models are stuck in the "Training" column.

**The Core Principle for AI PMs:** It's more important to adopt an **agile mindset** than to rigidly follow a specific framework. This means embracing iterative work, checking in on progress frequently, and providing data scientists with the space to experiment, while using a visual tool like a Data Kanban board to maintain visibility and manage flow.

