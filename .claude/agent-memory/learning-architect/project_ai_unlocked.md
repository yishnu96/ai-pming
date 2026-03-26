---
name: AI Unlocked Course Project
description: Docusaurus-based beginner AI course — structure, audience, and content decisions made so far
type: project
---

The user is building a beginner-friendly AI course called "AI Unlocked" as a Docusaurus 3.9 site. Content lives in `docs/` (MDX). Course pages include frontmatter (sidebar_position, title, description) and a fixed "Resources & References" section at the bottom of each page that must never be modified.

**Why:** Teaching absolute beginners with no technical background. Goal is to make AI genuinely understandable — accessible to a curious 10-year-old while respecting adult intelligence.

**How to apply:** Always preserve the existing Resources & References section exactly as-is. Target 1,200–1,800 words per page. No jargon without immediate plain-English definition. Every section needs: one example, one contrast, one recall question.

## Effective patterns confirmed for this project

- Mental hook for AI: "A very fast, very patient student who has read millions of examples and gotten very good at spotting patterns — but only in one subject."
- Spam filter is the strongest concrete example for "what AI is" — instantly relatable, requires no setup.
- Calculator as the contrast for "what AI is NOT" — fixed rules, cannot learn, always same answer.
- Chess-playing AI that cannot play checkers = best contrast for Narrow AI vs. human generalization.
- House price predictor = clearest worked example for supervised learning (from Google Developers source).
- Three AI types framing: "One Exists, One Is Being Built, One Is Science Fiction" — keeps beginners anchored in reality, prevents sci-fi conflation.

## TODO(human) placeholder pattern
One section per page where the human author writes a personal original analogy (especially for abstract mechanisms like "how AI learns"). This is intentional — do not fill with generic content. Flag with `TODO(human)` comment block explaining the design decision and 2-3 direction options.

## Content structure that worked for "What is AI?"
1. Hook (relatable scene, no definition)
2. What it is / what it isn't (clean mental model first)
3. Three types (Narrow / General / Super) — grounded in current reality
4. How AI learns — supervised learning with TODO(human) analogy slot
5. AI vs Human comparison table
6. 5-milestone history (brevity is the point)
7. Myth vs Reality pairs (6 myths)
8. What's Next teaser + preserved Resources section
