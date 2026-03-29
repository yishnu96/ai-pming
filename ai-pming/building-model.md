---
id: ai-building-model
title: Building The Model 
description: Make the Build vs. Buy decision. Evaluate vendors, use MLaaS, and manage builds by tracking returns.
date: 2023-07-14
author: Yishnu Pramanik
sidebar_label: Building The Model
tags:
  - Product Management
  - AI & Data
  - Product
  - Frameworks
  - AI PM
---
As an AI Product Manager, one of the most critical strategic decisions you'll make is whether your team should **build** an AI model from the ground up or **buy/leverage** an existing external solution. Just because an AI solution is needed doesn't automatically mean your team should be the one to build it.

#### A Case Study: The "Build vs. Buy" Decision in Action.

A product manager at a large online book platform, whose team specialized in Natural Language Processing (NLP) to understand book content, faced new business needs:
    1.  A chatbot to handle thousands of daily customer support questions.
    2.  An image recognition AI to flag inappropriate book covers.
    While both were important problems, the PM decided **not** to build these solutions in-house for three key reasons:
    * **Core Competency:** The team's expertise was in NLP, not in building chatbots or image recognition systems.
    * **Data Availability:** They did not have the specialized datasets required to train either of these new models.
    * **Competitive Advantage:** Building these tools would divert resources from their main strategic focus, which was using NLP to gain a competitive advantage in understanding books. Instead, they opted to use enterprise AI solutions (Ada for the chatbot, Clarifai for image recognition) and kept their team focused on their core strength.

#### The Decision Framework
To guide this "build vs. buy" choice, ask three fundamental questions. This is similar to a traditional software company deciding whether to build a payment system from scratch or use an API like Stripe or PayPal.
    1.  **Is this problem *core* to my business?** You must distinguish between what is "important" and what is "core." Customer support is always important, but for the book platform, it wasn't their core function of connecting readers with stories.
    2.  **Can we realistically get the dataset needed?** Without the right data, an in-house build is not feasible.
    3.  **Do we have an experienced machine learning team?** Critically, does the team have experience in the *specific AI discipline* required (e.g., computer vision, NLP, reinforcement learning)?
 
 > **The Takeaway:** Your job as an AI PM isn't just to identify problems that can be solved with AI, but to strategically determine the best and most efficient way to acquire that solution—whether that means building it yourself or leveraging the expertise of others.


### Enterprise AI

Once you decide to **buy** an AI solution instead of building it, your work as an AI Product Manager is far from over. The next critical phase involves identifying the right external partner and implementing their solution. The fastest and often easiest way to do this is by leveraging **Enterprise AI**—third-party AI products designed for quick integration.

The key factor for choosing Enterprise AI remains the same: is the problem **core** to your business? If you run a photo app, using AI for customer service is an important but not a core function, making it a perfect candidate for an Enterprise AI solution. However, using AI to sort images by theme is much closer to your core business and might warrant an in-house build.

### How to Evaluate Enterprise AI Vendors

After deciding to pursue an Enterprise AI solution, you must rigorously evaluate potential vendors. The success of the implementation depends on finding the right fit for your organization across six key criteria:

* **Data:** What data does the vendor's AI learn from? Is its data source relevant to your specific needs? Critically, does the vendor allow you to use your own data to customize their model for better performance within your context?
* **Specialization:** Vendors that specialize in a single industry often produce better results. A chatbot AI trained primarily on e-commerce clients will likely perform better for an e-commerce company than one with clients across many different industries.
* **Integration:** How will the solution be integrated into your existing product? You must understand the technical requirements, whether they provide a well-documented API, and what level of technical and management support they offer during the integration process.
* **Customization:** Does the vendor offer the ability to customize their AI with your company's data? You must also determine if this level of customization is even necessary for your use case.
* **Security:** How does the vendor manage data security, especially if they are using your proprietary data for customization? Ensure they meet all the necessary compliance requirements for your specific industry (e.g., healthcare, finance).
* **Price:** Does the vendor's pricing model fit within your budget? Be sure to clarify if the cost includes ongoing maintenance, support, and performance optimizations over time.

> **The Takeaway:** Choosing to "buy" an AI solution shifts your responsibility from internal development management to external vendor management. A thorough evaluation using these six criteria is essential to de-risk the investment and ensure the partner you select can deliver the value your product and users need. If no vendor meets these requirements, an alternative solution must be considered.


## Timelines & Diminishing Returns

Because AI development timelines are uncertain, an AI Product Manager must manage the project by tracking for the **law of diminishing returns**—the point where each investment of time and effort yields progressively smaller improvements in model performance.

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src="/work/diminishing-return.png" alt="Stats Data" style={{ height: '30vh', width: 'auto' }} />
</div>

### Knowing When to Stop Investing

To make this call, you must identify which of the three investment phases your project is in:

* **Productive Phase:** Initial work yields large and growing returns in performance.
* **Diminishing Returns Phase:** The performance graph flattens as each new investment produces smaller and smaller gains.
* **Negative Returns Phase:** More work yields no improvement or even degrades performance.

The rule is to stop investing once you have clearly entered the **diminishing returns phase**. This decision is critical even if the model is still performing poorly (e.g., has a 40% error rate). Continuing to invest for minimal gain indicates the current approach is likely not viable and it's better to stop and find an alternative solution.

Your job as the PM is to use the data on inputs (time, cost) versus outputs (performance) to make this tough, data-driven decision and communicate to stakeholders why further investment is no longer worthwhile.


## Setting a Model Performance Metric

Before building an AI model, you must set a specific and realistic performance goal, or "evaluation metric." Since 100% accuracy is impossible, the initial goal should be the minimum performance required to deliver real value to the customer; you can always improve the model later. The winning model in the famous ImageNet competition, for example, still has a 2.3% error rate.

### Three Methods for Setting AI Performance Goals

To set a clear target for your team, you can use one of three methods:

* **Human-Level Performance:** Set the AI's target to match the performance of an average human on the same task. If a human transcribes audio with a 5% error rate, that becomes the benchmark for your AI. This method is best when the AI is intended to fully replace a human task.
* **Base-Model Metric:** First, build a quick, simple model to establish a performance baseline. More complex and time-intensive models are then measured against this initial benchmark to demonstrate clear improvement, which helps in setting realistic, iterative goals.
* **Satisficing and Optimizing Metrics:** This method balances two types of goals. The **optimizing** metric is the main target you want to maximize (e.g., accuracy). The **satisficing** metric is a minimum threshold that the model *must* meet (e.g., response time must be under 100ms). You then choose the model with the best optimizing score from among those that meet the non-negotiable satisficing requirement.

Setting a clear goal before development begins is crucial. It gives the team a unified and concrete target to work towards, ensuring everyone is aligned on what "success" looks like for the model.