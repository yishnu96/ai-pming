---
id: ai-managing-teams
title: Managing Data Science & AI Teams
description: Lead effective AI teams. Understand team structure, core roles, and use Triple-Track Agile.
date: 2023-07-14
author: Yishnu Pramanik
sidebar_label: Managing Teams
tags:
  - Product Management
  - AI & Data
  - Product
  - Frameworks
  - AI PM
---

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src="/work/hirerachy-of-teams.png" alt="Stats Data" style={{ height: '60vh', width: 'auto' }} />
</div>

Before an organization can successfully build AI products, it needs both a solid technical foundation and a culture that is ready for the investment. An AI Product Manager must first evaluate the company's readiness by assessing two key areas: its position on the **AI Hierarchy of Needs** and its **tolerance for risk**.

### The AI Hierarchy of Needs

Think of AI readiness as a pyramid where each level must be satisfied before the next can be achieved. An AI PM must identify where their organization sits and advocate for shoring up the foundations first. The hierarchy, from the bottom up, is:

* **Data Collection:** The absolute foundation. You must have large, accessible datasets.
* **Data Infrastructure:** The pipelines, storage, and systems needed to reliably move and manage data.
* **Data Analysis:** The ability to use the data and infrastructure to clean data, generate reports, and run basic experiments.
* **Data Science:** The capacity to apply advanced modeling and machine learning techniques.
* **Advanced AI:** The final stage of building complex, integrated AI products, which is only possible when all lower levels are stable.

### Evaluating Organizational Risk Tolerance

By nature, AI projects are risky and have uncertain timelines. You must accurately gauge your organization's willingness to invest in projects that may take over a year with no guarantee of success.

If you determine your organization has a **low tolerance for risk**, you should adapt your strategy accordingly. Instead of starting with high-risk, high-reward projects, begin with smaller initiatives that can deliver early wins. Prioritize low-risk, low-benefit projects first to build the organization's confidence and capabilities in AI before tackling more ambitious goals.

As an AI PM, you must evaluate both your company's technical maturity and its cultural mindset toward risk. This assessment is crucial for tailoring your product management style and prioritizing your work in a way that will succeed within your organization's specific environment.

<br/>

How an AI and data team is placed within an organization significantly impacts its effectiveness. While many tech companies are organized into feature-focused **Business Units (BUs)**—each with its own PMs, designers, and engineers—embedding AI specialists directly into each of these teams is not the best approach.

### Why a Separate AI Business Unit is Best Practice

It is most effective to structure your AI team as its own dedicated business unit, similar to a centralized **Research and Development (R&D)** department. There are two primary reasons for this:

* **Talent Scarcity:** Experienced data scientists and machine learning engineers are rare. It is impractical and difficult to hire enough specialized talent to staff every single business unit.
* **Different Workflows:** AI product development has a unique, research-oriented lifecycle that is very different from traditional software development. Managing both workflows within a single team is inefficient and complex.

### The Impact of a Centralized AI Team

A central AI team focuses on building foundational models that can be leveraged by *multiple* other business units across the company. For example, on a video platform, a single AI model that understands video content can be used by the Discovery BU for recommendations and by the Safety BU for content moderation.

This structure places a unique demand on the AI Product Manager, whose role becomes heavily focused on **collaboration**. The AI PM must act as a bridge between their team and the rest of the organization, working to understand the needs of other BUs, align goals, and ensure the infrastructure is in place for other teams to easily integrate the AI models into their products. This centralized approach allows a small group of specialists to create powerful AI that has a broad and valuable impact across the entire business.

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
<div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src="/work/workflow-ai.png" alt="Stats Data"  />
</div>

Building an AI application follows a step-by-step process where each phase relies on the completion of the previous one. The key stages and the roles that lead them are:

1.  **Problem & Metrics Definition:** Led by the **Product Manager** and **UX Designer**, this phase involves research and brainstorming to define the problem to be solved and the metrics for success.
2.  **Data Sourcing & Infrastructure:** Led by the **Data Engineer**, this involves identifying, extracting, and preparing the necessary data for the model.
3.  **Modeling & Training:** Led by the **Data Scientist**, this is where the model is built, trained, and tested using the prepared data.
4.  **Deployment & UI Build:** The **Data Engineer** works to put the model into production, while the **Software Engineer** builds the user-facing interface that will deliver the AI's output.
5.  **Monitoring:** An ongoing, post-launch effort led by **Data Scientists** and **Data Engineers** to track the model's performance and data flows in the live environment.

### The Management Challenge: Avoiding Downtime

Because this workflow is sequential, a major challenge is avoiding significant downtime for team members. If the team worked on only one project at a time, the data scientist would be idle waiting for the data engineer, and the software engineer would be waiting for the model to be finished.

In practice, this means AI teams must work on multiple projects simultaneously, with each project at a different stage of the lifecycle. This adds a layer of complexity for the AI Product Manager, whose critical responsibility is to manage this multi-project workflow to ensure there are no long gaps in work and that all team members remain productive.

<br/>

The sequential nature of the AI product workflow often leads to team members waiting for others to complete tasks, creating significant downtime. To solve this, AI product managers can adapt the standard "Dual-Track Agile" methodology into a more suitable framework called **Triple-Track Agile**.

### The Three Tracks of AI Agile

This approach separates the workflow into three parallel tracks, each with its own owner and backlog. The output of one track becomes the input for the next, creating a continuous flow of work.

* **1. Discovery Track:**
    * **Owner:** Product Manager (often with UX designers/researchers).
    * **Focus:** To identify problems and validate product ideas through research and brainstorming.
    * **Output:** A backlog of validated ideas, which feeds the Data Track.

* **2. Data Track:**
    * **Owner:** Data Engineer.
    * **Focus:** To take the validated ideas from the Discovery Track and then source, clean, and prepare the necessary datasets.
    * **Output:** A backlog of clean, ready-to-use datasets, which feeds the Development Track.

* **3. Development Track:**
    * **Owner:** Data Scientist.
    * **Focus:** To take the prepared datasets from the Data Track and then build, train, and test the AI models.

By using a Triple-Track agile workflow, you ensure that there is always a queue of validated ideas and prepared data ready for the data scientists to work on. This minimizes downtime and allows the product manager, data engineers, and data scientists to all work simultaneously on different projects pulled from their own unique backlogs, creating a much more efficient and continuous development process.