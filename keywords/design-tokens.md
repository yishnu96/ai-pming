# Design Tokens — Neobrutalist Reading Theme

Implemented palette from `neo_brutalist_brand_system_complete.md`. Source of truth: `src/css/custom.css`.

## Design Direction

**Sharp, editorial, reading-first, balanced conversion.**
Space Grotesk headings, Inter body, yellow navbar brand anchor, pink CTAs, blue-gray links, Tokyo-night dark mode.

## Core Palette

| Role | Light | Dark | Use |
|---|---|---|---|
| Background | `#FFF7E6` | `#0F1420` | Warm paper / Tokyo-night navy |
| Surface | `#FFFDF8` | `#171E2B` | Cards and panels |
| Border | `#111111` | `#E7ECF3` | All borders (ink black / off-white) |
| Primary (links) | `#4F6D8A` | `#82AAFF` | Links and interactive emphasis |
| CTA | `#FF4D6D` | `#FF4D8D` | Pink — buttons and conversion moments |
| Navbar | `#FFD44D` | `#FFD44D` | Yellow brand anchor (both modes) |
| Text | `#1B2430` | `#F4F6F8` | Body text |

## Color Roles

| Role | Color | Used For |
|---|---|---|
| Yellow | `#FFD44D` | Navbar, structural highlights, pills, tabs, badges |
| Pink | `#FF4D6D` / `#FF4D8D` | Primary CTAs and conversion moments only |
| Blue-gray | `#4F6D8A` / `#82AAFF` | Links, active states, secondary interactive emphasis |
| Teal | `#14B8A6` / `#2EC4B6` | Info admonitions, supportive highlights |
| Green | `#22C55E` | Success and completion |
| Red | `#EF4444` / `#FF6B6B` | Danger and errors |

## Shadow System

Hard offset, no blur — neobrutalist physical feel.

| Token | Light | Dark |
|---|---|---|
| `--neo-shadow-sm` | `2px 2px 0px #111111` | `2px 2px 0px #1E2D4A` |
| `--neo-shadow` | `4px 4px 0px #111111` | `4px 4px 0px #1E2D4A` |
| `--neo-shadow-lg` | `6px 6px 0px #111111` | `6px 6px 0px #1E2D4A` |

Light mode: black ink shadows. Dark mode: cool navy-blue shadows (not yellow, not white).

### Physical Press Interaction

| State | Shadow | Transform |
|---|---|---|
| Default | `--neo-shadow` (4px) | none |
| Hover | `--neo-shadow-sm` (2px) | `translate(2px, 2px)` |
| Active | none | `translate(4px, 4px)` |

## Typography

| Property | Value |
|---|---|
| Heading font | Space Grotesk |
| Body font | Inter |
| Code font | JetBrains Mono |
| Base size | 17px |
| Line height | 1.75 (reading-optimized) |
| H1 weight | 700 (Bold) |
| H2 weight | 600 (Semibold) |
| Body weight | 400 |
| Heading letter-spacing | -0.02em to -0.03em |
| Heading case | Title Case |

## Gray Scale

| Token | Light (warm paper) | Dark (Tokyo night) |
|---|---|---|
| `gray-0` | `#FFFDF8` | `#0F1420` |
| `gray-100` | `#FCF8F1` | `#171E2B` |
| `gray-200` | `#F7F0E6` | `#1F2937` |
| `gray-300` | `#EAE0D2` | `#232B3A` |
| `gray-400` | `#D6C7B2` | `#394355` |
| `gray-500` | `#B7A58C` | `#566178` |
| `gray-600` | `#8A7A65` | `#7E8794` |
| `gray-700` | `#5E513D` | `#A7B0C3` |
| `gray-800` | `#3A3228` | `#C7D0DD` |
| `gray-900` | `#1B2430` | `#E7ECF3` |
| `gray-1000` | `#111111` | `#F4F6F8` |

## Alert Type Colors

| Type | Light BG | Dark BG | Border Color |
|---|---|---|---|
| Info | `#ECFEFF` | `#102B1A` | `#14B8A6` / `#2EC4B6` |
| Success | `#ECFDF5` | `#102B1A` | `#22C55E` |
| Warning | `#FFFBEB` | `#2A2412` | `#F59E0B` / `#FFD44D` |
| Danger | `#FEF2F2` | `#2A1212` | `#EF4444` / `#FF6B6B` |

## Neobrutalism Rules

- Zero border radius (`--ifm-global-radius: 0px`)
- Hard offset shadows, no blur, no gradients, no glassmorphism
- Thick borders: 2px standard, 3px structural (navbar, footer, hero, h2)
- Physical press on interactive elements (buttons, cards, pagination)
- No soft Tailwind shadows (`shadow-md` etc.) — only hard offset
- No `rounded-full`, no `backdrop-blur`, no `opacity` hover effects
- Reading-first: generous line height, calm link colors, warm backgrounds
- Navbar stays yellow (`#FFD44D`) in both light and dark modes
- Dark mode shadows are cool navy-blue (`#1E2D4A`), never yellow
