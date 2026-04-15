---
title: "Claude Code: Your First Task"
description: "Learn how to use Claude Code's interface and give your first task: creating a document from plain English instructions."
sidebar_position: 6
---

# Claude Code: Your First Task

You've installed Claude Code. You've connected your API key. Now comes the fun part — actually using it.

This is where most people pause. The terminal stares back at you. What do you type?

The answer: exactly what you'd tell a coworker.

---

## The Interface

When you start Claude Code, you see your terminal with a prompt that looks like this:

```
You: _
```

That's it. That's the whole interface.

**The prompt line** (`You:`) is where you type what you want. Think of it as a conversation — you're talking to Claude Code, and it talks back in your terminal.

**Claude Code's response** appears below your message. It shows you what it's thinking, what it's found, and what it's about to do.

**Approval prompts** are key. Before Claude Code changes any file, it asks:

```
Can I make this change? [y/n]
```

Type `y` to approve, `n` to refuse. Claude Code never touches your files without asking first.

---

## Giving Instructions in Plain English

Here's the secret most people don't realize: you don't need to learn a special language.

Tell Claude Code what you want in plain English:

| Instead of this | Do this |
|---|---|
| "Execute file creation protocol" | "Create a new file" |
| "Invoke documentation generator" | "Write a document" |
| "Query project structure" | "What files are in this folder?" |

The more directly you say what you want, the better Claude Code understands.

**Good prompts include:**

- What you want ("create a meeting agenda template")
- Where to put it ("save it to my documents folder")
- Any specifics ("include sections for updates, discussion topics, and action items")

---

## Your First Task: Create a Document

Let's try it right now. In your terminal, type:

```
Create a weekly meeting agenda template and save it as meeting-agenda.md
```

Watch what Claude Code does:

1. **It asks clarifying questions** — "Where should I save this?" or "What sections do you want?"
2. **It proposes the content** — shows you what it will write
3. **It asks for approval** — "Can I create this file?"
4. **It creates the file** — saves it to your current folder

You didn't write a single line of code. You just asked.

---

## What Just Happened

You gave Claude Code a task in plain English. It:

- Understood what you wanted (a meeting agenda template)
- Created appropriate content (sections for updates, discussion, action items)
- Saved it as a file you can actually use

This pattern — ask, approve, done — works for almost anything:

- "Write a to-do list for my project"
- "Create a summary of this folder's contents"
- "Draft an email to my team"

---

## 🧪 Try This Now

Open Claude Code and type:

```
Create a weekly meeting agenda template and save it as meeting-agenda.md
```

Notice how it asks questions, shows you what it'll create, and waits for your approval. That's Claude Code working with you, not just for you.

---

## Good Read

- [Claude Code Quickstart](https://docs.anthropic.com/en/docs/claude-code/quickstart) — Official first-time setup guide from Anthropic
- [Claude Code Commands](https://docs.anthropic.com/en/docs/claude-code/cli-reference) — Full reference of everything you can ask

---

*Next up: how Claude Code actually reads and edits the files on your computer.*