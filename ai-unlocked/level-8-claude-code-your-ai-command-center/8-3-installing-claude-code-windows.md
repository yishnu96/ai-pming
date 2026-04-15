---
title: "Installing Claude Code: Windows"
sidebar_position: 3
description: Get Claude Code running on your Windows computer in under 5 minutes with this step-by-step guide.
---

# Installing Claude Code: Windows

Installing Claude Code on Windows takes about 5 minutes. You'll use Windows Terminal and one simple command. Let's do it.

## Open the Terminal

Press `Win + X` on your keyboard, then select **Terminal** (or **Windows Terminal**) from the menu that appears.

> **What is Windows Terminal?** It's the built-in command-line app on Windows. Think of it as a direct line to your computer where you can run tools like Claude Code.

If you see "Terminal" instead of "Windows Terminal," that works too. You might also see "Windows PowerShell" as an option — that's the specific program we'll be using.

## Run the Install Command

Copy this entire line and paste it into your terminal:

```powershell
irm https://claude.com/install.ps1 | iex
```

Press **Enter** to run it.

You'll see some text scroll by as the installer works. When it's done, you'll see a message saying Claude Code is ready.

## Verify It Works

Type this command and press Enter:

```powershell
claude --version
```

You should see something like `claude 1.0.x` or a similar version number. If you do — congratulations. Claude Code is installed.

## Fix Common Issues

### "claude is not recognized"

If you get an error saying the command isn't recognized, close your terminal completely and open it again. Then try `claude --version` once more.

### "Cannot be loaded because running scripts is disabled"

If you see an error about scripts being disabled, run this command first:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then run the install command again.

### "Permission denied" errors

Right-click on Terminal and select **Run as administrator**. Then try the install command again.

### Node.js not found

Claude Code requires Node.js. If you don't have it, download it from [nodejs.org](https://nodejs.org/) (choose the LTS version). After installing Node.js, restart your terminal and try the install command again.

---

**Try this now:** Run `claude --version` to confirm everything is working. You're ready for the next step.