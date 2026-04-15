---
title: "Installing Claude Code: Mac"
sidebar_position: 4
description: Step-by-step guide to installing Claude Code on your Mac. Two installation methods, verification steps, and troubleshooting tips.
---

# Installing Claude Code: Mac

Getting Claude Code running on your Mac takes about 5 minutes. Let's do this.

## Open Terminal on Your Mac

Terminal is where you'll run Claude Code. It's already on your Mac — you just need to find it.

**Three ways to open it:**

1. **Spotlight (fastest)**: Press `Cmd + Space`, type "Terminal", press Enter
2. **Finder**: Go to Applications → Utilities → Terminal
3. **Dock**: Click Terminal if it's already pinned there

A window will appear with a prompt that looks something like `Your-Macbook ~ %`. That's your terminal. You're ready to install.

## Install Claude Code

You have two options. Option 1 is recommended.

### Option 1: Official Script (Recommended)

Copy and paste this into your terminal:

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

Press Enter. You'll see some text scroll by as it downloads and sets up Claude Code.

That's it. Seriously.

### Option 2: Homebrew

If you already use Homebrew (a package manager for Mac), run:

```bash
brew install --cask claude-code
```

**One difference**: Homebrew installations don't update automatically. You'll need to run `brew upgrade claude-code` every few weeks to get the latest version. The official script updates itself.

## Verify It Works

After installation completes, check that it's installed:

```bash
claude --version
```

You should see something like `Claude Code 1.0.x` (the exact number doesn't matter — just that it shows a version).

If you see "command not found", close this terminal window and open a new one. Then try again.

## First Launch

Now navigate to any folder and start Claude Code:

```bash
cd ~/Desktop
claude
```

On first launch, it'll ask you to log in. If you already have a Claude account, sign in. If not, you'll need to create one and connect your API key (we cover that in the next topic).

Once signed in, you'll see the Claude Code interface. You're in.

---

## Troubleshooting

### "Command not found" after installation

Close your terminal completely (`Cmd + Q`) and open a new one. Try `claude --version` again.

### Permission errors

If you get a message about permissions being blocked:
1. Go to **System Settings** → **Privacy & Security**
2. Look for a message about Claude Code being blocked
3. Click **Allow**

### Apple Silicon vs Intel Mac

The install script automatically detects which type of Mac you have and installs the right version. You don't need to do anything special.

If you're not sure which Mac you have: click the Apple icon in the top-left corner → **About This Mac**. It will say either "Chip" (Apple Silicon) or "Processor" (Intel).

---

## What Comes Next

Now that Claude Code is installed, you need to connect your API key so it can actually work. That's topic 8.5.

> 🧪 **Try This Now:** Open Terminal, run the install command, then run `claude --version`. If you see a version number, you're ready for the next step.