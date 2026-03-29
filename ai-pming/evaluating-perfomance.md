---
id: ai-evaluating-performance
title: Evaluating Performance
description: Go beyond accuracy. Use the Confusion Matrix and metrics like Precision & Recall to measure performance.
date: 2023-07-14
author: Yishnu Pramanik
sidebar_label: Evaluating Performance
tags:
  - Product Management
  - AI & Data
  - Product
  - Frameworks
  - AI PM
---


To properly develop and evaluate an AI model, you must divide your available data into three separate sets. This ensures the model is trained effectively and then tested fairly on data it has never seen before, which is crucial for understanding its true performance.

### The Three Data Sets and Their Purpose

A common practice is to split your data as follows, though the ratios can change for very large datasets (e.g., 98/1/1):

* **Training Set (~80%):** This is the largest portion of the data, used to let the machine learning model learn the underlying patterns.
* **Validation Set (~10%):** Also called a development set, this data is used *during* the building process to repeatedly tune the model’s learning algorithm and parameters. It helps optimize the model without "contaminating" the final test.
* **Testing Set (~10%):** This data is held back and used only *once* after all training and tuning are complete. It provides a final, unbiased evaluation of how the model will perform in the real world on completely new data.

### Data Consistency, Bias, and Variance

It is critical that the data in each of the three sets is a similar, representative sample of the whole. If not, you can introduce two common errors:

* **High Bias (Underfitting):** The model is too simple and misses the underlying patterns in the data. Using an archery analogy, this is like **aiming in the wrong place**.
* **High Variance (Overfitting):** The model learns the training data too well, including its noise, and fails to generalize to new data. This is like **having an unsteady aim**.

The goal is to build a model with **low bias and low variance**, which accurately captures the true patterns and performs reliably on new data.

## The Confusion Matrix

Looking only at a model's overall accuracy or error rate is not enough to understand its performance. For classification models, which classify data into categories (e.g., "dog" or "not dog"), a **Confusion Matrix** is used to get a deeper insight. It's a simple grid that visualizes the specific strengths and weaknesses of a model by showing not just what it got right, but also the *types* of errors it made.


### Understanding the Confusion Matrix

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src="/work/confusion-metrix.png" alt="Stats Data" style={{ height: '40vh', width: 'auto' }} />

  <img src="/work/confusion-metrix-simple.png" alt="Stats Data" style={{ height: '40vh', width: 'auto' }} />
</div>

A confusion matrix is a 2x2 grid that compares the model's predictions against the actual truth, breaking down performance into four key outcomes:

* **True Positives (TP):** The model correctly predicts "yes." (e.g., correctly identifies an image as a dog).
* **True Negatives (TN):** The model correctly predicts "no." (e.g., correctly identifies a picture of a cat as "not a dog").
* **False Positives (FP):** The model incorrectly predicts "yes" when the truth is "no." This is a Type I error. (e.g., misidentifying a cat *as* a dog).
* **False Negatives (FN):** The model incorrectly predicts "no" when the truth is "yes." This is a Type II error. (e.g., failing to identify a dog, calling it "not a dog").

By separating the results into these four categories, the confusion matrix gives you a much clearer picture of your model's behavior than a single accuracy score. These four values—TP, TN, FP, and FN—are the essential building blocks for calculating the most important evaluation metrics for classifiers: **Precision and Recall**.


## Optimizing for Experience

While accuracy measures how many predictions a model got right out of the total, it doesn't tell the whole story. To truly understand a classification model's performance, **Precision** and **Recall** are the preferred metrics because they measure different aspects of the model's correctness.

### Calculating Precision, Recall, and F1 Score

Using the outputs from the confusion matrix (TP, FP, FN), you can calculate the three most important evaluation metrics for a classifier.

* **Precision**
    * **The Question It Answers:** Of all the times the model predicted "yes," how often was it correct? It measures the quality of the positive predictions.
    
    * ***The Formula:** $Precision = \frac\{TP\}\{TP + FP\}$

* **Recall**
    * **The Question It Answers:** Of all the things that were actually "yes," how many did the model successfully find? It measures the model's completeness or its ability to find all positive instances.
    
    * **The Formula:** $Recall = \frac\{TP\}\{TP + FN\}$  

* **F1 Score**
    * **What It Is:** The harmonic mean of Precision and Recall. It combines both metrics into a single score, providing a balanced measure of a model's performance. It's useful when you need to consider both precision and recall simultaneously.
    
     * **The Formula:** $F1 Score = 2 \times \frac\{Precision \times Recall\}\{Precision + Recall\}$ 

These three metrics—Precision, Recall, and the F1 Score—give you a comprehensive view of your model's performance. They are the standard tools used to compare different models and select the one that best fits your product's goals.

## Error Recovery

Since no AI model is 100% accurate, a critical part of AI product management is developing an **Error Recovery Strategy**. Instead of only focusing on perfecting the model (which has diminishing returns), you must also design a plan to minimize the negative impact on users when the AI inevitably makes a mistake.

### Designing an Error Recovery Strategy

Different types of errors have vastly different consequences. In credit card fraud detection, a **False Positive** (wrongly freezing a customer's card) can be more immediately painful for the user than a **False Negative** (missing a fraudulent charge). Your strategy should therefore focus on minimizing this user pain.

To build your strategy, ask these key questions:

* **Identify the Consequences:** What is the specific impact on the user and the business for both a False Positive and a False Negative?
* **Cushion the Error:** How can you lessen the damage from a mistake? For example, after missing a fraudulent charge, you could offer a gift card in addition to a full refund to rebuild trust.
* **Plan for User Recovery:** How can a user quickly and easily recover from the AI's error? For example, provide a simple, one-click way for a user to unfreeze their card if it was blocked by mistake.

The core principle is to never let the AI do all the work alone. A strong product strategy anticipates the model's shortcomings and builds a system around it to graciously handle failures, protecting both the user experience and the business.