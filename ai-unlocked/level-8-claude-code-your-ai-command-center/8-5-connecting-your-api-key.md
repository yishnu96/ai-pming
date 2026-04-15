---
title: "Connecting Your API Key"
sidebar_position: 5
---

# Connecting Your API Key

You've installed Claude Code. Now let's get it connected to your Anthropic account so you can start using it. This is a one-time setup — do it once, and you're good to go.

## Getting Your Anthropic API Key

If you don't have an Anthropic account yet, head to [console.anthropic.com](https://console.anthropic.com) and create one. You can sign up with your Google account or email.

Once you're in the console:

1. Look for the **API Keys** section in the sidebar
2. Click **Create API Key**
3. Give it a name you'll remember (like "My Claude Code Key")
4. Copy the key right away — it only shows once

> ⚠️ **Save that key somewhere safe.** If you lose it, you'll need to create a new one.

## Connecting the Key to Claude Code

Here's the easy part. Open your terminal, navigate to any folder (your project, your desktop — anywhere), and type:

```
claude
```

That's it. Claude Code will detect this is your first time and prompt you to log in. You have two options:

- **Browser login** (easiest): Claude Code opens your browser where you sign in with your Anthropic account. Done.
- **API key login**: If you prefer, you can paste your API key directly when prompted.

For most people, the browser login is the smoothest path. It's one click, and you're authenticated.

## First Launch — What You See

After you log in, Claude Code will welcome you and show a brief setup:

- It checks your environment
- It may ask for permissions (like file access)
- It shows you the chat interface

You'll see something like this:

```
🐱 Claude Code

Connected to: claude-sonnet-4-20250514

Type your request in plain English.
Press Enter to send.
```

That's your AI command center, ready to go.

## Try This Now

Open your terminal and type `claude`. Watch the login flow happen. Once you're in, just type "Hello" and hit Enter to confirm everything works.

---

**Next up:** Let's actually use it. In the next section, you'll give Claude Code your first task and see what it can do.