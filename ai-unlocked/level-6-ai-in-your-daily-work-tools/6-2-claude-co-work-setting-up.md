---
sidebar_position: 2
title: "How to Set Up Claude Co-work Projects"
description: "Step-by-step guide to setting up your first Claude Co-work project, understanding the three-tab interface, and building a knowledge base."
slug: "/ai-unlocked/level-6-claude-co-work-setting-up"
tags: [claude, ai-tools, productivity, tutorial]
keywords: [how to set up claude co-work projects, claude co-work tutorial, claude knowledge base]
sidebar_label: "Set Up"
---

That frustration when you spend 10 minutes bringing context to an AI, only to lose it when you close the window? Now you know why Claude Co-work exists. If you haven't read what Co-work actually is, start with [the previous article](/ai-unlocked/level-6-claude-co-work-what-it-is) — it'll make everything below click faster.

By the end of this guide, you'll know **how to set up Claude Co-work projects** from scratch. You'll create your first project, understand the three-tab interface, and upload documents so Claude actually knows your work. Let's build it.

## Create Your First Project

Creating a Co-work project is like creating a folder on your computer. Claude needs three things: a name, a location, and house rules.

Here's the walkthrough:

1. **Install Claude Desktop** if you haven't already. Download it, launch it. No technical prerequisites needed.
2. **Switch to Co-work mode.** Look at the top-right corner of the window. Click the mode selector and choose Co-work.
3. **Click Projects, then New Project.** Give it a business-focused name — something you'd actually recognize in a list.

Let's use a concrete example. You're preparing Q1 financial reports. Name the project "Q1 Financial Reports." Not "Project 1" or "Finance Stuff." Be specific.

Now here's where most people stumble. Those custom instructions? Don't write "Be helpful." That tells Claude nothing. Write "Summarize financial reports in 3 bullet points. Use formal tone. Flag anything over $10,000."

**Vague instructions produce vague results. Specific instructions produce usable work.**

:::info Think About It

What three things does every Co-work project need?

*Name, location, house rules — custom instructions.*

:::

One click in and the project is live. Now let's look at what you actually see.

<!-- IMAGE_PROMPT: Clean three-panel UI mockup illustration, flat design style. Three side-by-side rectangular panels labeled "Projects", "Knowledge", and "Agents". Projects panel shows a list of project cards with status dots. Knowledge panel shows document icons (PDF, DOCX, CSV) with a plus sign. Agents panel shows a simple gear/robot icon with toggle switches. Yellow accent color (#f5a623) on active elements, muted gray for inactive. White background, thick black borders, subtle offset shadow beneath each panel. Title text at top: "Your Co-work Workspace". -->
<!-- CONCEPT: Three-panel diagram showing the Projects, Knowledge, and Agents tabs of Claude Co-work -->
<!-- PLACEMENT: In Section 2 to give readers a visual map of the interface before diving into each tab -->

## Three Tabs

Three tabs. Most people click the first one and never touch the other two. Here is why you should.

**Projects tab** — This is your configuration center. You see every project you've created. The "New Project" button lives here. Status indicators show which projects are active. Think of it as your project dashboard.

**Knowledge tab** — This is where your documents live. Custom instructions go here too. Uploaded files, knowledge-base settings, tags and summaries — all of it.

**Agents tab** — This is where you manage AI agents and set up automation triggers. We'll cover this in detail in a later article.

The biggest confusion: **the Projects tab IS NOT where your documents live.** People look there for their uploaded files. They're in the Knowledge tab. Always.

:::info Think About It

Which tab shows you what documents Claude has actually read?

*Knowledge tab.*

:::

The Knowledge tab is where things get interesting. And uploading is easier than you think.

## Upload and Build Knowledge

You already know how to drag a file into a folder. That is literally how you teach Claude about your documents.

Here's the process:

1. Open the Knowledge tab of your project
2. Click Upload, then drag-and-drop or browse for files
3. Supported formats: PDF, DOCX, XLSX, CSV, MD, and even PNG/JPG images
4. Add tags and a one-sentence summary if you want (helps you stay organized)
5. Click "Update Knowledge" so Claude actually reads the new files

Your files are stored locally on your computer — in the `knowledge/` folder inside your project directory. Nothing goes to the cloud.

<!-- IMAGE-PROMPT: Step-by-step visual guide illustration, flat design. Three sequential panels numbered 1-3 with arrows between them. Panel 1: A hand dragging a PDF file icon toward an "Upload" button. Panel 2: A document list showing PDF, DOCX, and CSV file icons with colored tags attached. Panel 3: A green "Update Knowledge" button being clicked, with small rays or sparkles indicating action. Consistent yellow (#f5a623) accent color, thick black borders, white background. Clean, minimal diagram style. Labels on each panel: "Drop Files", "Add Tags", "Update Knowledge". -->
<!-- CONCEPT: Three-step process for uploading documents to the Knowledge tab -->
<!-- PLACEMENT: In Section 3 to reinforce the simple upload workflow visually alongside the written steps -->

A few best practices that save time later:

- **Start small.** Upload 1-2 documents first. Don't dump 50 files at once.
- **Organize by subfolder.** Use clear names like `sales/`, `marketing/`, `finance/`.
- **Name files clearly.** Include dates and versions — "Q1-Report-v2.pdf" beats "report.pdf."
- **Add a brief summary.** One sentence per upload. Future you will thank present you.
- **Keep files under 20 MB.** Performance drops with massive files.
- **Refresh regularly.** Outdated documents produce outdated answers.

Here's the catch: **auto-indexing IS NOT real-time.** After dropping new files into your project folder, you must click "Update Knowledge" or wait for Claude to auto-detect the changes. Until then, Claude can't use the new information.

:::info Think About It

After dropping new files into your project folder, what one step must happen before Claude can use them?

*Click "Update Knowledge" or wait for auto-detect.*

:::

## Your Turn

Take five minutes right now:

1. Open Claude Desktop and switch to Co-work mode
2. Create a project named after your biggest current work initiative
3. Add custom instructions — one sentence about tone, one about format
4. Upload 2-3 documents you already have on your computer
5. Click "Update Knowledge"

That's it. Your project is live, your documents are loaded, and Claude knows your rules.

:::tip Key Takeaway

Setting up a Claude Co-work project takes three steps: name it, configure it, and feed it documents. The three-tab interface separates configuration (Projects), content (Knowledge), and automation (Agents). Everything lives locally on your machine.

:::

Now your project is set up, documents are loaded, and Claude knows your rules. The real question: what do you actually do with all this day-to-day? That's exactly where we're headed next.

---

## Good Read

- [What Are Projects? — Anthropic Support](https://support.anthropic.com/en/articles/9517075-what-are-projects) — Official guide to creating and managing Co-work projects.
- [How to Upload Files to Claude — Anthropic Support](https://support.anthropic.com/en/articles/9038411-how-to-upload-files-to-claude) — Step-by-step documentation for adding documents to your knowledge base.
- [Announcing Claude Co-work — Anthropic](https://www.anthropic.com/news/cowork) — The original announcement explaining why Co-work exists and what problems it solves.
