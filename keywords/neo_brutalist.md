# Neo-Brutalist SaaS Brand & Design System

## 1) Brand direction

This system is designed for a learning / SaaS documentation platform that should feel:

- **playful, but controlled**
- **editorial, but easy to read**
- **hard / punky, but not chaotic**
- **modern, but not sterile**
- **high contrast, but comfortable for long reading**

The visual language combines:
- neo-brutalist structure
- Tokyo-night inspired dark mode
- warm paper-like light mode
- sharp typography
- strong borders
- hard offset shadows
- limited but expressive accent colors

The core goal is simple: **make the interface feel memorable, energetic, and trustworthy while staying extremely readable.**

---

## 2) Brand personality

**Keywords**
- playful
- sharp
- editorial
- technical
- bold
- structured
- readable
- confident

**What it should feel like**
- Like a well-designed doc system with personality
- Like a smart learning platform with strong opinions
- Like a modern brutalist magazine interface
- Like a product that values clarity over decoration

**What it should not feel like**
- soft and generic
- overly corporate
- pastel-heavy
- trendy in a shallow way
- crowded or noisy

---

## 3) Typography system

### Primary headline font
**Space Grotesk**

Use for:
- H1
- H2
- section titles
- hero headings
- standout labels

Why:
- clean and sharp
- editorial
- slightly technical
- works well with neo-brutalist layouts
- gives strong personality without hurting readability

### Body font
**Inter**

Use for:
- paragraphs
- navigation labels
- side nav
- footers
- helper text
- captions
- form labels
- documentation content

Why:
- highly readable
- modern and neutral
- good for long-form content
- technical but friendly

### Optional supporting font
**IBM Plex Sans**

Use for:
- code-adjacent annotations
- helper metadata
- compact UI labels if needed

### Typography behavior

#### H1
- Use **Space Grotesk**
- Use **Title Case**
- Keep it **bold, clean, and sharp**
- Make it feel like a strong editorial cover line

#### H2
- Use **Space Grotesk**
- Slightly lighter weight than H1
- Still sharp and clean
- Should feel like a section headline, not decorative text

#### H3 / H4
- Use **Inter Semibold** or **Space Grotesk Medium**
- Use for subsection hierarchy

#### Body
- Use **Inter Regular**
- Comfortable line spacing
- No compression
- No decorative styling

#### Navigation
- Use **Inter Medium**
- Slight letter spacing only if needed
- Keep it functional and crisp

---

## 4) Layout principles

### Core layout architecture
The platform should feel like a **structured SaaS documentation + learning interface**.

Recommended structure:
- top navigation
- left navigation / side nav
- main content column
- right utility or context panel optional
- footer with compact, useful links

### Visual hierarchy
1. Navigation and IA clarity
2. Main content readability
3. Clear CTA visibility
4. Accent colors only for meaning
5. Decorative style last

### Spacing behavior
- generous internal padding
- strong separation between sections
- clear grouping
- avoid cramped blocks
- use visible white space even in dark mode

### Shape language
- square or almost-square corners
- no soft rounded-heavy UI
- slight radius is acceptable, but keep it restrained
- use thick borders where possible
- cards should feel block-like

---

## 5) Color philosophy

This design system uses **two major environments**:

- **Light mode**: warm paper, blue-gray clarity, soft but bold accents
- **Dark mode**: Tokyo-night navy, yellow highlight, bright link blue, deep shadows

The system intentionally avoids:
- pure sterile white everywhere
- pure black everywhere in light mode
- washed-out gray UIs
- overly bright neon accents on large surfaces

The most important principle:
> **Color should define function, not decoration.**

---

# 6) Design tokens

## 6.1 Light mode tokens

### Base surfaces
- **background**: `#FFF8E7`
- **background-subtle**: `#FFF1D6`
- **surface**: `#FFFFFF`
- **surface-elevated**: `#FFFDF8`
- **surface-muted**: `#F7EBD0`
- **surface-accent-soft**: `#FFECC7`

### Text
- **foreground**: `#1B2430`
- **text-primary**: `#1B2430`
- **text-secondary**: `#667085`
- **text-muted**: `#8A94A6`
- **text-disabled**: `#B3B9C6`

### Borders and outlines
- **border-default**: `#111111`
- **border-subtle**: `#2B2B2B`
- **border-muted**: `#C9C2B5`
- **focus-ring**: `#4F6D8A`

### Brand / action colors
- **link**: `#4F6D8A`
- **link-hover**: `#3E5871`
- **primary-cta**: `#FF4D6D`
- **primary-cta-hover**: `#E63A5B`
- **secondary-cta**: `#FFD44D`
- **secondary-cta-hover**: `#E6BF2D`

### Accents
- **accent-blue**: `#3B82F6`
- **accent-green**: `#A3E635`
- **accent-purple**: `#8B5CF6`
- **accent-teal**: `#14B8A6`
- **accent-orange**: `#F97316`

### Feedback
- **success**: `#22C55E`
- **warning**: `#F59E0B`
- **error**: `#EF4444`
- **info**: `#3B82F6`

### Shadows
- **shadow-color**: `#111111`
- **shadow-block-light**: `4px 4px 0 #111111`
- **shadow-block-medium**: `6px 6px 0 #111111`

### Light mode notes
- Background should feel like **warm paper**
- Borders should feel **ink-like**
- CTA pink should be the most attention-grabbing action color
- Yellow is best for navbar, highlight, and emphasis blocks
- Blue-gray should be the primary reading/link color

---

## 6.2 Dark mode tokens

### Base surfaces
- **background**: `#0F1420`
- **background-subtle**: `#111827`
- **surface**: `#171E2B`
- **surface-elevated**: `#1F2937`
- **surface-muted**: `#232C3D`
- **surface-accent-soft**: `#1A2333`

### Text
- **foreground**: `#F4F6F8`
- **text-primary**: `#F4F6F8`
- **text-secondary**: `#A7B0C3`
- **text-muted**: `#6B7280`
- **text-disabled**: `#4B5563`

### Borders and outlines
- **border-default**: `#E5E7EB`
- **border-subtle**: `#94A3B8`
- **border-muted**: `#374151`
- **focus-ring**: `#82AAFF`

### Brand / action colors
- **link**: `#82AAFF`
- **link-hover**: `#A5C8FF`
- **link-active**: `#5B8DEF`
- **visited-link**: `#B392F0`
- **primary-cta**: `#FF4D8D`
- **primary-cta-hover**: `#E63A7A`
- **secondary-cta**: `#FFD44D`
- **secondary-cta-hover**: `#E6BF2D`

### Accents
- **accent-blue**: `#7AA2F7`
- **accent-green**: `#22C55E`
- **accent-purple**: `#B392F0`
- **accent-teal**: `#2EC4B6`
- **accent-orange**: `#FB7185`

### Feedback
- **success**: `#22C55E`
- **warning**: `#F59E0B`
- **error**: `#EF4444`
- **info**: `#82AAFF`

### Shadows
- **shadow-color**: `#0A2540`
- **shadow-block-light**: `4px 4px 0 #0A2540`
- **shadow-block-medium**: `6px 6px 0 #0A2540`

### Dark mode notes
- Shadows should be **blue-based**, not black
- Black shadows disappear on dark surfaces
- Yellow is best used for nav and special highlights, not for large shadows
- Blue links must be brighter than body text to read clearly
- The overall feel should be **Tokyo-night, editorial, and sharp**

---

# 7) Component system

## 7.1 Navigation

### Top navigation
- Use a strong background strip
- Light mode: yellowish highlight bar or warm surface with black border
- Dark mode: deeper navy strip with yellow highlight blocks
- Nav text should be **Inter Medium**
- Keep nav labels short and clear

### Side navigation
- Use a vertical block layout
- Keep current section visually obvious
- Active item should have:
  - strong contrast
  - background fill
  - border or marker
  - clear text color

### Navigation text colors
#### Light mode
- default: `#1B2430`
- muted: `#667085`
- active: `#111111`
- link-like nav item: `#4F6D8A`

#### Dark mode
- default: `#F4F6F8`
- muted: `#A7B0C3`
- active: `#FFD44D`
- link-like nav item: `#82AAFF`

### Footer
- Keep footer compact
- Use muted text
- Avoid dense link clusters
- It should feel useful, not heavy

#### Footer colors
- Light background: `#FFF1D6` or `#FFF8E7`
- Dark background: `#111827` or `#171E2B`
- Footer text: same as secondary text
- Footer links: same as link color

---

## 7.2 Buttons

### Primary button
Purpose:
- main conversion action
- sign up
- start learning
- buy / enroll
- get started

#### Light mode
- background: `#FF4D6D`
- text: `#FFFFFF`
- border: `#111111`
- shadow: `4px 4px 0 #111111`
- hover: darker pink/red tone

#### Dark mode
- background: `#FF4D8D`
- text: `#FFFFFF`
- border: `#E5E7EB`
- shadow: `4px 4px 0 #0A2540`
- hover: deeper pink

### Secondary button
Purpose:
- browse
- learn more
- secondary action

#### Light mode
- background: `#FFD44D`
- text: `#111111`
- border: `#111111`
- shadow: `4px 4px 0 #111111`

#### Dark mode
- background: `#FFD44D`
- text: `#111111`
- border: `#E5E7EB`
- shadow: `4px 4px 0 #0A2540`

### Tertiary button
Purpose:
- subtle action
- text-only button
- low emphasis

#### Light mode
- text: `#4F6D8A`
- hover: underline or background tint
- border optional

#### Dark mode
- text: `#82AAFF`
- hover: underline
- border optional

### Button feel
- Buttons should feel like cut-paper blocks
- Use hard edges
- No glossy effect
- No soft blur
- No glassmorphism

---

## 7.3 Cards

### Card style
- block-like
- strong border
- clear separation
- modest internal padding
- hard shadow in selected contexts

### Light mode card
- background: `#FFFFFF`
- border: `#111111`
- shadow: optional `4px 4px 0 #111111`
- subtle variants may use `#FFFDF8` or `#FFF1D6`

### Dark mode card
- background: `#171E2B`
- border: `#E5E7EB`
- shadow: `4px 4px 0 #0A2540`
- highlighted cards may use `#1F2937`

### Card content hierarchy
- title: Space Grotesk
- description: Inter
- metadata: Inter Medium / small
- CTA or action: strong contrast

---

## 7.4 Hero section

### Hero feel
The hero should feel like a **strong editorial opening spread**.

### Recommended structure
- brand mark or small label
- large headline
- subheading
- one primary CTA
- one secondary CTA
- supporting visual block or diagram

### Hero visual behavior
- use a strong headline
- keep subheading readable
- avoid too many decorations
- use one central accent block
- keep content aligned and disciplined

### Hero colors
#### Light mode
- background: warm paper
- headline: `#111111`
- subheading: `#667085`
- CTA: pink
- secondary CTA: yellow
- decorative accents: blue / green / purple used sparingly

#### Dark mode
- background: Tokyo-night navy
- headline: `#F4F6F8`
- subheading: `#A7B0C3`
- CTA: pink
- secondary CTA: yellow
- decorative accents: blue / teal / purple used sparingly

---

## 7.5 Links

### Link behavior
Links should always feel clearly interactive.

#### Light mode
- default: `#4F6D8A`
- hover: `#3E5871`
- active: `#111111` or darker link state
- visited: `#7A5AF8` if needed

#### Dark mode
- default: `#82AAFF`
- hover: `#A5C8FF`
- active: `#5B8DEF`
- visited: `#B392F0`

### Link styling rules
- use underline on hover
- increase weight slightly when active
- never make links too close to body text color in dark mode
- use a clear contrast cue in docs and learning content

---

## 7.6 Badges and tags

Badges are important in SaaS and learning platforms because they organize dense information.

### Badge colors
#### Light mode
- info badge: `#3B82F6` on light tint
- success badge: `#A3E635` or `#22C55E`
- warning badge: `#F59E0B`
- featured badge: `#8B5CF6`
- highlight badge: `#FFD44D`

#### Dark mode
- info badge: `#82AAFF`
- success badge: `#22C55E`
- warning badge: `#F59E0B`
- featured badge: `#B392F0`
- highlight badge: `#FFD44D`

### Badge behavior
- keep them short
- use for status, category, progress, or featured content
- avoid using too many badge colors in one row

---

## 7.7 Forms

### Inputs
- sharp borders
- clear focus ring
- high readability
- simple placeholder text

### Light mode
- input background: `#FFFFFF`
- border: `#111111`
- text: `#1B2430`
- placeholder: `#8A94A6`
- focus ring: `#4F6D8A`

### Dark mode
- input background: `#171E2B`
- border: `#E5E7EB`
- text: `#F4F6F8`
- placeholder: `#6B7280`
- focus ring: `#82AAFF`

### Forms should feel
- precise
- functional
- not overly styled
- easy to scan

---

## 7.8 Tables and docs blocks

### Table style
- strong grid clarity
- clean borders
- no crowded cells
- header row must stand out

### Light mode
- header background: `#FFF1D6`
- row background: `#FFFFFF`
- alternating row accent: subtle warm tint
- border: `#111111`

### Dark mode
- header background: `#1F2937`
- row background: `#171E2B`
- alternating row accent: slightly lighter navy
- border: `#E5E7EB`

### Code / callout blocks
- use a slightly elevated surface
- strong border
- distinct label or icon
- avoid too many colors

---

## 7.9 Alerts and notices

### Success
- use green
- keep message calm and clear

### Warning
- use yellow or amber
- avoid overusing for everything

### Error
- use red
- reserve for true failure states

### Info
- use blue
- good for tips, guidance, and navigation support

---

# 8) Border system

Borders are essential for neo-brutalism.

## Border rules
- Prefer visible borders over subtle shadows
- Use strong outlines around cards and buttons
- Use borders to define sections
- Keep section spacing meaningful, but do not rely only on whitespace

## Light mode border feel
- dark and ink-like
- direct and graphic
- strong contrast against warm surfaces

## Dark mode border feel
- light gray or off-white
- clear but not screaming
- should help structure the deep navy surfaces

## Where borders should be strongest
- cards
- buttons
- nav items
- hero blocks
- table headers
- badges
- forms

---

# 9) Shadow system

Shadows are not decorative in this system. They are structural.

## Light mode shadows
Use hard offset shadows:
- `4px 4px 0 #111111`
- `6px 6px 0 #111111`

## Dark mode shadows
Use cool shadows:
- `4px 4px 0 #0A2540`
- `6px 6px 0 #0A2540`

## Do not use
- heavy blur
- soft drop shadows as the main visual language
- pure black shadows in dark mode

## Why this works
- makes elements feel physical
- keeps brutalist identity
- avoids muddy dark-mode rendering
- creates stronger focus on interactive items

---

# 10) Reading experience rules

This platform is reading-heavy, so readability is non-negotiable.

## Reading rules
- use generous line height
- keep paragraph width comfortable
- do not over-color text
- use blue-gray links in light mode
- use bright blue links in dark mode
- keep long text primarily neutral
- use accents only for meaning

## Best reading palette
### Light mode
- text: `#1B2430`
- secondary: `#667085`
- muted: `#8A94A6`
- links: `#4F6D8A`

### Dark mode
- text: `#F4F6F8`
- secondary: `#A7B0C3`
- muted: `#6B7280`
- links: `#82AAFF`

---

# 11) How the platform should feel

## Light mode feel
- warm
- friendly
- open
- editorial
- confident
- structured
- easy to read

## Dark mode feel
- sharp
- Tokyo-night inspired
- technical
- premium
- deep
- calm but energetic
- more dramatic, but still readable

---

# 12) When to use which colors

## Use yellow for
- top nav highlight
- secondary CTA
- labels
- featured blocks
- key callouts

## Use pink for
- primary CTA
- action emphasis
- sign-up or start buttons

## Use blue for
- links
- references
- informational emphasis
- navigation cues

## Use green for
- success
- progress
- completed state

## Use purple for
- featured content
- editorial contrast
- special modules

## Use teal for
- calm accents
- icons
- supportive UI states

## Use warm paper / navy base for
- background
- large sections
- reading surfaces

---

# 13) Recommended component inventory for a SaaS doc platform

A complete SaaS-style learning / documentation platform should include:

- top navigation
- side navigation
- hero section
- search bar
- topic cards
- lesson cards
- progress indicators
- buttons
- badges
- alerts
- code or command blocks
- tables
- tabs
- breadcrumbs
- footer
- content callouts
- author / metadata blocks
- related content blocks
- CTA sections

Each of these should follow the same design logic:
- strong hierarchy
- visible border
- clear spacing
- readable text
- restrained but expressive colors

---

# 14) Final brand summary

This brand should feel like:

**A sharp, editorial, neo-brutalist SaaS learning platform with warm light mode, Tokyo-night dark mode, bold CTA contrast, structured navigation, and highly readable typography.**

The system should be:
- playful without being childish
- bold without becoming noisy
- branded without becoming decorative
- functional without becoming boring

---

# 15) Quick token summary

## Light mode core
- background: `#FFF8E7`
- surface: `#FFFFFF`
- text: `#1B2430`
- secondary text: `#667085`
- border: `#111111`
- link: `#4F6D8A`
- primary CTA: `#FF4D6D`
- secondary CTA: `#FFD44D`
- shadow: `#111111`

## Dark mode core
- background: `#0F1420`
- surface: `#171E2B`
- text: `#F4F6F8`
- secondary text: `#A7B0C3`
- border: `#E5E7EB`
- link: `#82AAFF`
- primary CTA: `#FF4D8D`
- secondary CTA: `#FFD44D`
- shadow: `#0A2540`

## Typography core
- headlines: **Space Grotesk**
- body: **Inter**
- style: **Title Case**
- headline feel: **clean, sharp, editorial**
- body feel: **technical, readable, modern**
