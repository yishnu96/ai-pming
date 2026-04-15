---
title: "How Claude Code Reads and Edits Files"
sidebar_position: 7
---

# How Claude Code Reads and Edits Files

When you work with Claude Code, you're not just chatting with an AI. You're handing it keys to your digital workspace. But here's the thing: Claude Code doesn't see your files the way you do. It uses special tools to look at, change, and create files. Understanding how this works makes you a much better partner in getting things done.

## The Mental Model: Tools, Not Magic

Think of Claude Code as a person sitting at your computer who can only see what you show them. They can't glance at your screen and instantly know everything about your files. Instead, they have a specific toolkit for working with files:

- **Read** — looks at what's inside a file
- **Glob** — finds files by their name pattern
- **Grep** — searches for specific text inside files
- **Edit** — makes changes to existing files
- **Write** — creates brand new files

Each tool serves a different purpose. Claude chooses which tool to use based on what you're asking for.

## How Claude Code Sees Your Files

When you start Claude Code in a folder (by typing `claude` in your terminal while in that folder), it gains access to everything in that folder and its subfolders. But here's the key insight: **it doesn't automatically read everything**.

Imagine walking into a library. The books are all there, but nobody has read them yet. That's how Claude Code starts. Your files exist, but Claude only "sees" the ones it explicitly opens.

This matters because:

- A 10-file project loads fast
- A 10,000-file project also loads fast — because Claude only reads what it needs

When you ask "what's in this project?" Claude uses the **Glob** tool to list files, or **Grep** to search inside them for specific words.

## Reading Files: The Read Tool

When you want Claude to look at a specific file, it uses the **Read** tool. This pulls the file's contents into Claude's memory (its "context window").

Here's what typically happens:

1. You ask a question about a file
2. Claude decides it needs to see the file to answer properly
3. It uses the Read tool to grab the file contents
4. Now it "sees" that file and can answer your question

For example, if you say "summarize the meeting notes in notes.txt," Claude will read that file and then give you the summary.

## Editing Files: The Edit Tool

The **Edit** tool is where things get powerful. When you ask Claude to make changes, it can:

- Fix typos in a document
- Update sections of a file
- Restructure content
- Add new paragraphs or sections

Here's the important part: Claude doesn't just rewrite everything. It makes **targeted edits** — finding the exact spot to change and only changing what's needed.

When you ask "add a conclusion paragraph to my report," Claude will:

1. Read the file to see its current state
2. Identify where the conclusion should go
3. Use the Edit tool to insert new content
4. Show you what changed

## Creating Files: The Write Tool

Need something brand new? The **Write** tool creates files from scratch. You might say:

- "Create a meeting agenda template and save it as agenda.md"
- "Write a Python script that organizes my downloads folder"

Claude uses the Write tool to make the file and save it to your folder.

## The Agentic Loop: How Claude Thinks

This is the most important part. When you give Claude a task, it works through three phases over and over:

**1. Gather context** — Read files, search for information, understand the situation

**2. Take action** — Make edits, create files, run commands

**3. Verify results** — Check that the changes worked, look for problems

For a simple question, it might only do step 1. For a complex task like "fix all the bugs in my code," it cycles through all three repeatedly:

```
1. Run tests to see what's failing (gather)
2. Read the error messages (gather)
3. Find the relevant files (gather)
4. Read those files (gather)
5. Edit to fix the issue (take action)
6. Run tests again (verify)
7. If still failing, repeat
```

Understanding this loop helps you give better instructions. The more context you provide upfront, the less time Claude spends gathering.

## What Claude Can't Do

A few things to keep in mind:

- **Doesn't see files automatically** — You have to ask or it has to decide to read them
- **Limited memory** — If you work on a huge project, Claude might "forget" early conversation details. Put important instructions in CLAUDE.md so they reload each session
- **Needs your permission** — File editing requires your approval in the settings

## The Bottom Line

Claude Code reads and edits files using specialized tools, not magic. It gathers context, takes action, and verifies results — repeating this cycle until your task is done. The more you understand this process, the better you can guide it to get exactly what you need.

Next up: [Folder Structure in Claude Code](/ai-unlocked/level-8-claude-code-your-ai-command-center/8-8-folder-structure-in-claude-code) — learn how organizing your files helps Claude work smarter.