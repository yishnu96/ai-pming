---
id: ai-continuous-improvement
title: Deployment & Continuous Improvement
description: Improve models post-launch. Monitor for staleness, use feedback loops, and test with shadow deployment.
date: 2023-07-14
author: Yishnu Pramanik
sidebar_label: Continuous Improvement
tags:
  - Product Management
  - AI & Data
  - Product
  - Frameworks
  - AI PM
---

Deploying a machine learning model into a product is a notoriously difficult challenge, often requiring more effort than building the model itself. This field, known as **MLOps (Machine Learning Operations)**, involves choosing the right deployment strategy based on a key question: how will the model's predictions be consumed—on a case-by-case basis, on a schedule, or in real-time?

### Three Methods of Model Deployment

There are three common deployment methods, ranging from low to high engineering effort.

* **Ad-Hoc Predictions via SQL (Low Effort):** This simple method treats the ML model like a function inside a database that can be called with an SQL query. It is best for internal tools where predictions are needed infrequently and on an as-needed basis, as it can often be set up quickly by data scientists without dedicated engineers.
* **Batch Predictions (Medium Effort):** This involves running the model on a fixed schedule (e.g., once a day) to process a large amount of data at once. This approach is ideal for features that need regular updates but don't have to be live, such as generating daily performance reports or content recommendations.
* **Real-Time Predictions (High Effort):** This method serves predictions instantly as new data arrives. It is the most complex and resource-intensive option but is essential for applications where the user experience depends on immediate results, such as chatbots, voice assistants, and self-driving cars.

Choosing the right deployment method is a critical strategic decision. You should always carefully consider how and when the model's output is truly needed and avoid the significant cost and complexity of real-time deployment unless it is absolutely necessary for the product to function.

Good Read : [Hidden Technical Debt in Machine Learning Systems](https://proceedings.neurips.cc/paper_files/paper/2015/file/86df7dcfd896fcaf2674f757a2463eba-Paper.pdf)

<br/>

Once an AI model is deployed, its performance must be continuously monitored to prevent **model staleness**. This happens when a model's predictive power decreases over time because the real-world data it encounters no longer matches the data it was trained on. For example, a fashion recommendation model will become stale as fashion trends change.

### Monitoring for Model Staleness

A deployed model needs regular checkups, just like a patient at a doctor's office. The frequency of this monitoring depends on how quickly the problem environment changes. A model classifying dog breeds needs infrequent checks, while a model detecting credit card fraud needs constant monitoring as fraudsters invent new tactics. If you detect a downward trend in performance, the solution is to **refresh** the model by retraining it with new, more relevant data.

### Proactive vs. Reactive Monitoring

A major challenge is that confirming a model's poor performance can take too long, especially for rare events like fraud. By the time you have enough data to confirm the model is failing, significant losses may have already occurred. To prevent this, a robust monitoring strategy must include two approaches:

* **Reactive Monitoring:** The standard approach of analyzing confirmed errors to understand what went wrong *after* the mistake has happened.
* **Proactive Monitoring:** An early warning system. This involves analyzing new, incoming real-world data to spot patterns or outliers that differ from the original training data. This helps you identify that the world is changing *before* your model's performance officially declines.

A complete AI product strategy must always include a plan for both proactive and reactive monitoring. This ensures your model remains effective and relevant, adapting to a constantly changing environment.

<br/>

One of the most effective ways to monitor a deployed AI model is by building **user feedback loops** directly into your product. For AI, this goes beyond traditional surveys and involves designing product features that capture quantitative data on how well the model is performing and solving the user's problem.

### Designing Feedback Loops and Using "Humans-in-the-Loop"

A product manager must work with UX designers to create features that provide a clear signal about the AI's performance. Examples of these signals include:

* **Recommendation Systems:** Thumbs up/down buttons, "hide post" actions, or click-through rates.
* **Voice Assistants:** The number of times a user has to repeat a question.
* **Chatbots:** The frequency with which users type "Can I speak to a human?"

When these feedback loops indicate an error, the data can be used to improve the model through a process called **"humans-in-the-loop" (HITL)**. This system turns incorrect predictions into valuable new training data. The process is simple:

1.  An incorrect prediction from the AI is flagged and collected (e.g., an audio clip that a voice assistant misunderstood).
2.  This data is sent to **human annotators** who review and correct the error (e.g., they accurately transcribe the audio clip).
3.  This newly labeled data is then fed back to retrain and improve the AI model.

Amazon's Alexa uses this exact method. When Alexa misunderstands a command, the audio clip is sent to human annotators who label it correctly, and that new data is used to make the voice recognition model smarter.

A well-designed user feedback loop, powered by a "humans-in-the-loop" process, is a powerful tool. It not only allows you as a PM to monitor your model's real-world performance but also creates a virtuous cycle of continuous improvement.

<br/>

When you're ready to replace an existing AI model (Model A) with a new, improved version (Model B), there's a risk that the new model might perform worse in the real world, despite looking better in testing. To safely manage this transition, you can use a technique called **shadow deployment** (or a "dark launch").

### How Shadow Deployment Works

Think of a shadow deployment like an actor's understudy: it runs in the background, ready to take over but invisible to the audience. In practice:

1.  The new "shadow" model (Model B) is deployed alongside the existing model (Model A).
2.  Both models receive and process the exact same live, real-world data in parallel.
3.  The existing model continues to serve its predictions to your users as usual.
4.  The shadow model's predictions are **not** shown to users. Instead, they are logged and stored for analysis.

This allows your team to directly compare the performance of both models on identical real-world data, ensuring the new model performs better and can handle the production traffic, all with minimal risk because the user experience is never affected.

### When to Use a Shadow Deployment

While powerful, this technique is resource-intensive as you are essentially running two models at once. Before deciding to use a shadow deployment, an AI Product Manager should ask three key questions:

* **Is the risk high?** If a new model underperforming would cause significant harm to the business or user experience, the safety of a shadow deployment is worth it. If the risk is low, it might be overkill.
* **Do I have time to test?** A shadow test can take days or weeks to collect enough data for a confident comparison. If your current model is failing badly and needs an urgent replacement, you may not have time to wait.
* **Do I have the capacity?** Deploying and maintaining a dual-model system is complex. If your engineering team doesn't have the bandwidth, it may not be a feasible option.

Shadow deployment is a powerful method for validating a new model in a live environment without the risks of an A/B test, as it never exposes users to a potentially worse experience.

<br/>

AI and data teams are composed of highly specialized, senior individuals, which requires a specific team structure and a unique management approach.

### The Core Roles of an AI Team

While team composition can vary, nearly every AI team includes three essential roles:

* **AI & Data Product Manager:** The person accountable for the product vision—the *what, when,* and *why* of what is being built.
* **Data Scientist:** The person who builds the AI models and conducts advanced analysis. This is often the most numerous role on the team.
* **ML Data Engineer:** The person who develops and maintains the data infrastructure, pipelines, and storage. One engineer can typically support several data scientists.

A common mistake organizations make is trying to hire a "unicorn" data scientist who is also an expert data engineer. These are distinct, specialized skill sets, and it's best practice to hire for both roles separately. If the AI team is also responsible for launching user-facing products, it will also need **UX Designers** and **Software Engineers**.

### Seniority and Management of AI Teams

AI teams are generally more senior than other product teams. Data scientists often hold advanced degrees, ML data engineers have specialized production-level skills, and AI PMs tend to have more frequent communication with leadership due to the high-risk, high-investment nature of AI projects.

Because the team consists of senior experts who are good at self-managing and have strong opinions, the management style must adapt. Micromanaging workflows is ineffective. Instead, the AI Product Manager must act as a **team facilitator**. Their primary role is to guide discussions, manage ideas, and unite the various senior members around a shared goal, fostering collaboration rather than dictating tasks.

<br/>

The workflow for an AI product team is fundamentally different from that of a traditional software team. While traditional backend and frontend engineers often work in parallel on the same feature, the specialized roles in an AI team—data engineer, data scientist, and software engineer—typically work in a more **sequential** fashion. This creates a unique management challenge for the AI Product Manager.

### The Sequential AI Product Workflow

Building an AI application follows a step-by-step process where each phase relies on the completion of the previous one. The key stages and the roles that lead them are:

1.  **Problem & Metrics Definition:** Led by the **Product Manager** and **UX Designer**, this phase involves research and brainstorming to define the problem to be solved and the metrics for success.
2.  **Data Sourcing & Infrastructure:** Led by the **Data Engineer**, this involves identifying, extracting, and preparing the necessary data for the model.
3.  **Modeling & Training:** Led by the **Data Scientist**, this is where the model is built, trained, and tested using the prepared data.
4.  **Deployment & UI Build:** The **Data Engineer** works to put the model into production, while the **Software Engineer** builds the user-facing interface that will deliver the AI's output.
5.  **Monitoring:** An ongoing, post-launch effort led by **Data Scientists** and **Data Engineers** to track the model's performance and data flows in the live environment.

### The Management Challenge: Avoiding Downtime

Because this workflow is sequential, a major challenge is avoiding significant downtime for team members. If the team worked on only one project at a time, the data scientist would be idle waiting for the data engineer, and the software engineer would be waiting for the model to be finished.

In practice, this means AI teams must work on multiple projects simultaneously, with each project at a different stage of the lifecycle. This adds a layer of complexity for the AI Product Manager, whose critical responsibility is to manage this multi-project workflow to ensure there are no long gaps in work and that all team members remain productive.

Good Read: [Cleaning Big Data: Most Time-Consuming, Least Enjoyable Data Science Task, Survey Says](https://www.forbes.com/sites/gilpress/2016/03/23/data-preparation-most-time-consuming-least-enjoyable-data-science-task-survey-says/#3d1dbfd36f63)


