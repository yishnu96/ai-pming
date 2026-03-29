---
id: ai-data-management
title: Data Management for AI & Data
description: Master Data Strategy for AI. Use the Data SWOT analysis and learn the five methods of data collection.
date: 2023-07-12
author: Yishnu Pramanik
sidebar_label: Data Management
tags:
  - Product Management
  - AI & Data
  - Product
  - Frameworks
  - AI PM
---

Data strategy is the domain that uniquely separates an AI Product Manager from a traditional PM. An AI PM is responsible not only for the product itself but also for ensuring the team has the necessary data to build and train the AI models, requiring them to think "two steps ahead" of product development.
An AI PM's responsibilities are centered on the strategic use of data to grow the business. Data strategy considers two main areas:

#### Data to Run the Business
This relates to optimizing internal processes like managing data science workflows, ensuring safe data storage, and speeding up data processing. These tasks are typically handled by senior data scientists, data engineers, or a Chief Data Officer.

#### Data to Grow the Business
This is the strategic area where the AI PM must be involved. It's about using data for innovation, growing revenues, and exploring new product opportunities. This responsibility can involve negotiating data acquisition contracts, creating product features to encourage users to label data, or managing teams of data annotators.

### The Data SWOT Analysis 
The first step in creating a data strategy is to perform a Data SWOT Analysis. This adapts the traditional business framework to specifically analyze the Strengths, Weaknesses, Opportunities, and Threats of your organization's existing data assets.

For example, a business phone app might have a Strength in its large, proprietary collection of voice data. However, a Weakness could be that the data lacks diversity (e.g., it only contains American English accents). The Opportunity is to build valuable new voice recognition features, while a Threat could be user privacy concerns.

### Five Data Collection Methods
To address these weaknesses, an AI PM has a toolkit of five primary methods to consider, with clear examples for each:
    1.  **Open Data:** Using free, publicly available datasets. *e.g., A startup building an image recognition AI can start by training its model on **ImageNet**, a massive, free online database of labeled images.*
    2.  **Company Data:** Leveraging data that is already owned by your organization. *e.g., An e-commerce company wanting to build a recommendation engine can use its vast history of internal **customer purchase data and Browse logs.***
    3.  **Crowdsourcing:** Getting a large group of people to help collect and label data. *e.g., A self-driving car company might use a service like **Amazon Mechanical Turk** to pay thousands of people to draw boxes around pedestrians in photos taken from its vehicles.*
    4.  **New Feature Data:** Building a new feature into your product with the specific purpose of collecting new data from users. *e.g., A music streaming service could add a "thumbs up/down" button to its radio feature, directly collecting user feedback to improve its song recommendation AI.*
    5.  **Acquisition/Purchase:** Buying or acquiring data from another organization. *e.g., A healthcare AI company might **purchase anonymized patient records and medical scans** from a research hospital to train a diagnostic model for a rare disease.

## Open Data

[Best Free Open Data Sources Anyone Can Use](https://www.freecodecamp.org/news/https-medium-freecodecamp-org-best-free-open-data-sources-anyone-can-use-a65b514b0f2d/)

Of the various data collection methods, the easiest way to start gathering data for an AI product is by leveraging **open data**.

**What is Open Data?** Inspired by open-source technology, open data is information that is freely available for anyone to use, reuse, combine, and republish without copyright or patent restrictions. Before building an AI model, this is the first place a product manager should look for necessary data. True open data must be:
    - **Available and Accessible:** Easy to find and obtain.
    - **Reusable and Redistributable:** Can be mixed with other datasets.
    - **Universal:** Can be used for any purpose, whether commercial or non-commercial.

**Benefits and Uses:** Open data is a powerful resource for several reasons. It can be used to train an entire model from scratch, supplement and expand your existing private datasets, or simply allow your team to experiment with new ideas without a high upfront cost. A key benefit is its potential to reduce bias in AI systems.
    * *e.g., The Mozilla Foundation created a large open database of diverse voices to help train voice recognition AI, making it less biased against different accents and dialects.*

**Downsides and Considerations:** While incredibly useful, open data has potential drawbacks. The datasets are often very broad and may not be specific enough for your product's niche needs. Furthermore, you must be able to trust the validity of the data and its source—is it accurate, reliable, and collected ethically?

**How to Find It:** You can use specialized search engines to find relevant datasets, such as Google's Dataset Search, Dataverse.org, and OpenDataKit.org. As a product manager, you should always encourage your team to explore these free resources first as part of any data strategy.

## Company Data
After exploring open data, another one of the simplest and most powerful ways to gather a dataset is to use the data your company already has. This is often superior to open data because it is proprietary and uniquely yours, creating a significant competitive advantage.

**What Constitutes Company Data?** Even organizations that don't believe they have unique data almost always do. This data exists in many forms and the key is to have a large volume of it, which is why larger organizations often have an advantage. Common sources include:
    - **User Behavior Data:** Clicks, session times, and user activity logs from your website or app, often found in tools like Google Analytics or your product database.
    - **CRM Data:** Information about customers stored in a Customer Resource Management system.
    - **Email Activity:** Metrics like email open rates and click-through rates.
    - **Customer Support Correspondence:** The text from emails and chats with your support team.

**Legal & Privacy Considerations:** Before using any internal data, it is crucial to consult with your legal team. You must ensure that using the data for AI development complies with your product's privacy agreements and terms of service. If the current terms don't allow for it, you will need to work with the legal team to update them.

**Application in Machine Learning:** How you use this data depends on the type of AI model you are building.
    - **For Unsupervised Learning,** raw data can often be fed directly into a model to find patterns or anomalies without any extra work.
    - **For Supervised Learning,** the data must be **labeled**. Sometimes, your data may already contain labels. For example, a sales team might already tag customers in a CRM with labels like "renewed" or "paused," which can be used directly. However, if your data is unlabeled, the product manager is responsible for creating a strategy to get it labeled.



##  Crowdsourcing Labeled Data

**Data annotation** is the critical and often human-intensive process of labeling data to make it usable for supervised machine learning models. Even if your organization has a massive dataset, it may be unusable without proper labels.

**Why Human Annotation is Necessary:** Simple algorithms often fail to understand the nuance, context, and sarcasm present in real-world data. A human is required to interpret these complexities.
    * *e.g., An algorithm can spot foul language in a social media comment, but it can't tell if the comment is negative or positive ("---, this is awesome!"). Similarly, only a human can understand the sarcasm in a comment like, "Wow, this was not a waste of time at all."*
    * Netflix famously employs human "taggers" to watch films and label them with dozens of detailed tags (like mood, character professions, and plot twists), creating a rich dataset that powers their recommendation AI in a way no algorithm could.

**How to Get Data Annotated:** While you could build an in-house team like Netflix, this is a massive effort. The most common approach is to use third-party data annotation companies.
    * These services, such as **Amazon Mechanical Turk**, **CloudFactory**, and **Appen**, have large workforces ready to label data for a fee. This market is so important that companies like Uber have acquired data annotation firms outright.

**The AI PM's Role and Vendor Selection:** It is the AI Product Manager's responsibility to manage the data annotation process, which primarily involves selecting the right external vendor. When assessing vendors, consider these four key criteria:
    1.  **Specialization:** Does the company specialize in the type of annotation you need (e.g., image, text, audio)? A vendor specializing in text will likely be more accurate and efficient with text-based tasks.
    2.  **Cost:** Vendors charge per annotation, and the price varies based on task difficulty (e.g., labeling a photo of a cat is cheap; identifying complex grammatical errors is expensive). You must work within your project's budget.
    3.  **Speed:** How many annotations can the vendor complete per day? This depends on their workforce size and current workload. Ensure their timeline matches your project's deadline.
    4.  **Training:** Does your task require subjective judgment? Labeling a stop sign doesn't require training, but labeling a comment as "offensive" according to your company's specific standards does. You must verify if the vendor supports and excels at training its annotators for such custom, nuanced tasks.

Ultimately, data annotation is a costly but essential investment. The quality of your labeled data directly impacts the potential performance and success of your AI model.


## New Feature Data

When open data is unavailable, existing company data is insufficient, and data annotation is too expensive or slow, another powerful method for data collection is to **build a new feature** specifically designed to gather the exact data you need. This highlights a unique aspect of the AI Product Manager's role: sometimes you build data collection tools, not just the final AI product.

**The Core Principle: You Must Provide Value to the User.** A feature designed for data collection cannot simply take from the user; it must also provide a direct benefit in return. Without a clear advantage for the user, they will have no incentive to provide accurate information, leading to poor data quality and a negative user experience. The key question to ask is: "How can this new feature both delight the user and collect the data we need?"

**Case Study: Facebook's Emoji Reactions.** A perfect example of this principle is Facebook's introduction of emoji reactions (Love, Haha, Wow, etc.).
    - **Facebook's Goal:** To understand the specific emotions each post evoked in users, so their AI could better optimize the newsfeed to keep people engaged.
    - **The Data Needed:** Emotionally labeled data for millions of posts.
    - **The Solution:** Instead of just asking users to label posts, they created a feature that was delightful and expressive. Users loved having more ways to react than a simple "Like," and willingly provided nuanced emotional data, which Facebook then used to train its newsfeed AI.

**When is This Method Necessary?** This approach is essential when you need highly specific or nuanced data that would be nearly impossible to get otherwise. For instance, if a writing platform needs data on a book's major themes or the specific chapter where the climax occurs, hiring human annotators to read thousands of books would be prohibitively expensive. The better solution is to build a feature that entices the authors themselves to provide this information in a structured way, likely by offering them a benefit like better analytics or discovery in return.

Even when a feature's primary purpose is data collection, it must be developed with standard product management practices to ensure it provides a great user experience.

## Acquisition/Purchase Data Collection
Acquiring or purchasing data from another organization is one of the most difficult methods of data collection. The difficulty is not technical for your team—they don't have to build anything—but lies in the complex, time-consuming, and expensive business process required to find, negotiate, and pay for the data.

**Why It's a Major Undertaking:** This process is a massive cross-functional effort that requires significant time from your legal, business development, and leadership teams. As a product manager, you must strongly advocate for why the business should make a large financial investment. Because of this, data acquisition is typically practiced by larger organizations or those with a clear, long-term vision.

**Methods of Acquisition:** There are two primary approaches:
    - **Acquiring a Company:** Buying an entire organization specifically to gain access to its valuable dataset.*e.g., Google acquired Waze, and Spotify acquired The Echo Nest, primarily to get the data needed to improve their core AI mapping and recommendation systems.*
    - **Licensing or Purchasing Data:** A more common approach where you pay a fee to use another organization's data without buying the company itself.

**Justifying the Investment:** Before proceeding, you must build a strong business case.
    - **Calculate ROI:** Use a Return on Investment calculation `(ROI = (Gains - Cost) / Cost)` to determine if the purchase is worthwhile. The "Cost" is the price of the acquisition or license. The "Gains" are the projected new revenue or cost savings your AI product will generate with this data—a figure you'll need to estimate with other business leaders.
    - **Consider Opportunity Cost:** You must also analyze the cost of *not* acting. What would it mean for the business if this AI product could not be built? Would you fall behind competitors?

**When to Use This Method:** This option should be considered a last resort for long-term strategic goals, only after determining that all other data collection methods (open data, company data, annotation, or building a new feature) are insufficient. While it is a costly and time-consuming endeavor, it's a necessary consideration when a specific dataset is the fundamental requirement for a critical AI product.

## Databases, Data Warehouses, & Data Lakes

After data is collected, an AI Product Manager must understand how it is stored and managed, as this directly impacts the team's ability to build products. In most organizations, data is scattered across multiple **databases** (silos), which is like having kitchen tools hidden in different cupboards all over the house, making it slow and difficult to prepare a meal.

To solve this, companies centralize their data into one of two main systems:

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src="/work/etl-process.png" alt="Stats Data" style={{ height: '30vh', width: 'auto' }} />
</div>

**Data Warehouse:** This is a system that pulls historical data from various sources into one place for a specific analytical purpose. Data engineers use an **ETL (Extract, Transform, Load)** process to clean and structure the data before loading it into the warehouse.
    - **The Limitation:** A data warehouse is built with a single goal in mind.
    * *Analogy: It's like creating a drawer in the kitchen that contains only the tools and ingredients needed to bake cookies. It’s very efficient for making cookies, but useless if you suddenly want to make a pizza.*

**Data Lake:** This is a more modern and flexible approach. A data lake is also a central repository, but it stores vast amounts of **raw, unstructured, and unfiltered data** without a pre-defined purpose.
    - **The Advantage:** This flexibility allows different teams to access the raw data and adapt it for a wide variety of analyses and AI models over time.
    * *Analogy: It's like organizing all your cooking tools—for baking, frying, and grilling—into one central, easily accessible place. The cook has the flexibility to make anything they want, not just cookies.*

**The Current Trend:** While building a data lake requires significantly more upfront investment and effort than creating a data warehouse, more and more organizations are moving in this direction. The long-term benefit is that it makes all future AI and data projects much easier and faster for the teams involved.