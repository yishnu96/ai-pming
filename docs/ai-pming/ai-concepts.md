---
id: ai-concepts
title: Key Technological Concepts 
description: Learn the foundations of AI. Differentiate Machine Learning (ML) vs. Deep Learning (DL) and the types of learning.
date: 2023-07-14
author: Yishnu Pramanik
sidebar_label: AI Concepts
tags:
  - Product Management
  - AI & Data
  - Product
  - Frameworks
  - AI PM
---

## Machine Learning

While Artificial Intelligence (AI) is the broad practice of getting machines to make human-like decisions, **Machine Learning (ML)** is the specific, and most common, subset of AI that you will be working with. ML uses algorithms to teach machines how to learn from large datasets without being programmed with explicit rules. The basic formula is: **Training Data + ML Algorithm = ML Model**.

### How to Explain Machine Learning: The "Baby Analogy"

A simple and effective way to explain ML to non-technical stakeholders is to compare it to how a baby learns.

You teach a baby what a "dog" is by showing them many different examples—pictures, cartoons, and real dogs—and repeating the word "dog." The baby eventually learns to recognize the pattern on its own. You *don't* teach the baby by giving it a complex set of rules like, "if it has fur, two ears, and a wet nose, then it is a dog."

Machine learning works the same way. Instead of writing explicit "if-then" rules, you **train a model** by feeding it thousands of labeled examples (e.g., images that are tagged as "dog"). The ML algorithm then finds the patterns on its own, learning from the data just like the baby learns from examples.

### Key Points for Stakeholders

Explaining how ML works can generate a lot of excitement, so an AI PM must immediately pair this with a dose of reality. When discussing ML with stakeholders, always emphasize these three points:

* **Garbage In, Garbage Out:** The performance of any ML model is completely dependent on the quality of the data it is trained on.
* **The Machine is Only as Good as its Data:** This reinforces that the data, not some magic in the algorithm, is the single most critical component for success.
* **Humans are Still Needed:** Building an effective ML model requires a significant amount of human effort, especially for the crucial tasks of labeling the training data and validating the model's outputs.


## Deep Learning

**Deep Learning (DL)** is a newer and more advanced subset of Machine Learning. The relationship is simple: AI is the broad field, Machine Learning is a subfield of AI, and Deep Learning is a subfield of ML. While Machine Learning is inspired by how humans *learn* (through examples), Deep Learning is inspired by how the human *brain works*, using what are called **Artificial Neural Networks (ANNs)**.

### How to Explain Deep Learning: The "Lab Researchers" Analogy

A simple way to explain Deep Learning to stakeholders is to imagine a group of lab researchers tasked with reproducing the smell of a rose.

* **Input Layer:** The first team of researchers (neurons) analyzes the original rose to deconstruct its scent.
* **Hidden Layers:** This is where the "deep" in Deep Learning comes from. Multiple other teams of researchers work in successive layers. Each layer experiments with different combinations of scents based on the findings from the previous layer, getting progressively closer to the right formula.
* **Output Layer:** The final, reproduced rose scent is presented as the result.

In essence, a deep learning model is like a massive team of researchers running countless, layered experiments to find the best possible answer to a complex problem.

### Key Concepts for Product Managers

As a PM, you don't need to know the deep math, but you should understand these key concepts:

* **The Core Difference:** A simple way to distinguish the two is that traditional **Machine Learning** is primarily based on **statistics**, while **Deep Learning** is based on **artificial neural networks**.
* **Common Types:** You should be familiar with two common types of neural networks:
    * **Convolutional Neural Networks (CNNs):** Widely used for image recognition problems.
    * **Recurrent Neural Networks (RNNs):** Often used for sequential data, like in text-to-speech applications.
* **The Trade-off:** While more layers in a deep learning model can lead to better performance, they also require significantly more data and are far more complex to build and train. For many problems, traditional Machine Learning is still the better, more efficient choice.


## When to use Machine Learning vs Deep Learning

Choosing between a traditional **Machine Learning (ML)** approach and a more advanced **Deep Learning (DL)** approach is a key strategic decision for an AI Product Manager. The choice is not about which method is universally "better," but about which is the right fit based on critical trade-offs involving your data, resources, and product requirements.

### Machine Learning vs. Deep Learning: A Comparison

To make the right decision, you must consider five key factors:

| **Consideration** | **Traditional Machine Learning (ML)** | **Deep Learning (DL)** |
| :--- | :--- | :--- |
| **Data Amount** | Performs well with small to medium-sized datasets. | Requires **massive** datasets to achieve its high-performance potential. |
| **Hardware** | Can often run on standard **CPUs**. | Requires expensive and powerful **GPUs**. |
| **Training Time** | Relatively fast to train and iterate on. | Significantly slower and more computationally intensive to train. |
| **Feature Selection**| Relies on a **human expert** to select the most important input data features for the model. | The model **determines the important features on its own** from the raw data. |
| **Interpretability**| **Easy to interpret.** Because a human chose the inputs, you can generally explain why the model made a decision. | **A "black box."** It is very difficult to explain the specific reasoning behind its output. |


In short, the decision between ML and DL is a strategic trade-off. Deep Learning can achieve state-of-the-art performance and discover novel patterns in data, but it requires massive datasets, specialized hardware, and is not easily explainable. Traditional Machine Learning is often faster, cheaper, more interpretable, and the better choice for many business problems, especially when data is limited or you need to be able to explain the "why" behind your AI's decisions.

Here are few examples: 

### When to Use Machine Learning or Deep Learning

| | Machine Learning | Deep Learning |
| :--- | :--- | :--- |
| **DATA** | Fewer data points needed. 1,000s | Many more data points needed. 10,000s |
| **HARDWARE** | Can be trained on a basic computer. | Need specialized hardware - a GPU (Graphical Processing Unit) |
| **TIME** | Hours to Days | Days to Weeks |
| **INPUT** | Human Feature Extraction | Machine Feature Selection |
| **TESTING** | Time to test increases with Data Size | Time to test does not increase with Data Size |
| **INTERPRETABILITY** | Interpretable | Black Box Problem |


## Supervised, Unsupervised, & Reinforcement Learning

Choosing between a traditional **Machine Learning (ML)** approach and a more advanced **Deep Learning (DL)** approach is a key strategic decision for an AI Product Manager. The choice is not about which method is universally "better," but about which is the right fit based on critical trade-offs involving your data, resources, and product requirements.

### Machine Learning vs. Deep Learning: A Comparison

To make the right decision, you must consider five key factors:

| **Consideration** | **Traditional Machine Learning (ML)** | **Deep Learning (DL)** |
| :--- | :--- | :--- |
| **Data Amount** | Performs well with small to medium-sized datasets. | Requires **massive** datasets to achieve its high-performance potential. |
| **Hardware** | Can often run on standard **CPUs**. | Requires expensive and powerful **GPUs**. |
| **Training Time** | Relatively fast to train and iterate on. | Significantly slower and more computationally intensive to train. |
| **Feature Selection**| Relies on a **human expert** to select the most important input data features for the model. | The model **determines the important features on its own** from the raw data. |
| **Interpretability**| **Easy to interpret.** Because a human chose the inputs, you can generally explain why the model made a decision. | **A "black box."** It is very difficult to explain the specific reasoning behind its output. |


In short, the decision between ML and DL is a strategic trade-off. Deep Learning can achieve state-of-the-art performance and discover novel patterns in data, but it requires massive datasets, specialized hardware, and is not easily explainable. Traditional Machine Learning is often faster, cheaper, more interpretable, and the better choice for many business problems, especially when data is limited or you need to be able to explain the "why" behind your AI's decisions.

* **Supervised Learning**
    * **How it works:** You "supervise" the model by showing it what you want it to do. This involves training it on **labeled data** where the correct answer is already provided (e.g., images of cats that are labeled "cat").
    * **Best for:** Classifying things into categories and predicting trends.

* **Unsupervised Learning**
    * **How it works:** You let the model find hidden patterns and structures on its own. This involves giving it **unlabeled data** and seeing what insights it discovers.
    * **Best for:** Clustering similar items together and detecting anomalies or unusual behavior.

* **Reinforcement Learning**
    * **How it works:** You give the model a goal and let it figure out the best way to achieve it through **trial and error**. The model receives rewards for good actions and penalties for bad ones, learning a "strategy" over time.
    * **Best for:** Game-playing AI (like chess or Go) and robotics tasks.