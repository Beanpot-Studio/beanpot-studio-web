---
name: Beanpot Studio Web
description: Marketing site for a Boston product studio; parchment + umber for surfaces, sage + brick for buttons, with Source Sans 3 and Fraunces.
colors:
  primary-600: "#64543f"
  primary-900: "#372d26"
  primary-50: "#f5f0e8"
  secondary-600: "#6c453b"
  sage-600: "#4a5a48"
  accent-500: "#4c6967"
  btn-on: "#fffcf7"
  paper: "linear warm parchment (see `bg-paper` in tailwind.config)"
  white: "#fffcf7"
typography:
  body:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  h1:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 500
    lineHeight: 1.2
  h2:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.875rem, 3vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.2
rounded:
  sm: "0.5rem"
  md: "0.75rem"
  lg: "0.75rem"
spacing:
  section: "4rem 6rem"
  card-padding: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.sage-600}"
    textColor: "#fffcf7"
    rounded: "0.75rem"
    padding: "0.625rem 1.25rem"
  button-secondary:
    backgroundColor: "{colors.secondary-600}"
    textColor: "#fffcf7"
    rounded: "0.75rem"
    padding: "0.625rem 1.25rem"
  card:
    backgroundColor: "rgba(255,252,247,0.95)"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-padding}"
  kicker:
    className: ".kicker | .kicker-on-dark | .kicker-on-sage"
    use: "section preline; not a filled pill"
  tag_sage:
    className: ".tag-sage"
    use: "in-card taxonomy (audience, status on cards)"
  pill_marketing:
    className: ".pill-marketing"
    use: "rare hero-style chip; max one per major view"
---

## Overview

The site is a **static Astro** experience with **Tailwind**-driven tokens. **Direction B (Harbor + Parchment):** **Surfaces** use **umber** as the main ink (`primary`), **parchment** backgrounds, and a dusty **harbor** `accent-` for small non-button UI (optional). **Buttons** use only **sage** (primary actions) and **brick** (secondary actions); the `sage` scale is separate from surface `primary`.

**Source Sans 3** handles body; **Fraunces** handles display headlines (`font-display`).

Full-color **hero and CTA bands** use umber-leaning neutrals. **Beans** photography sits under **ink-warm** overlays; navbar uses a **parchment** wash. **Craft** shadows are offset and tinted to `primary-900` hue (see `shadow-craft`).

**Sidecar:** Focus rings on buttons use `ring-2` with role-matched color. Sticky header uses `backdrop-blur` lightly; avoid stacking blur-on-blur.

## Colors

- **Primary (umber / ink-warm) —** body and heading text, borders, and dark scrims. Not the same as the **sage** used for the primary CTA; avoid mixing `primary-600` and `sage-600` on the same object without intent.
- **Sage (buttons, primary CTA);** the only fill used for the main “do this” action across the site.
- **Secondary (brick) —** secondary buttons, nav hovers, and warm emphasis. **Terracotta / brick**, not traffic-cone orange.
- **Accent (harbor) —** small non-button pops only (legacy charts); prefer **sage-100/800** for new badges next to product UI.

**Neutrals:** Use `primary-50`–`200` for paper-like surfaces, `primary-800`–`950` for text. Prefer `white/90` with a hint of warm (`#fffcf7` in frontmatter as reference white) over `#ffffff` for full-bleed panels.

**Contrast:** On beans + overlays, the gradient uses ~**35–50** RGB for dark stops with high alpha so type stays legible. Do not place long body text on the photo without the scrim.

## Typography

- **Fraunces** for `h1`–`h3` and `font-display`; **Source Sans 3** for UI and body.
- **Max line length:** ~**65ch** for marketing copy where you control width.

## Elevation

- **Cards:** `rounded-2xl` / `rounded-xl`, `shadow-soft` or `shadow-craft` for a light “stamped” lift; `craft-hover` on key buttons.
- **Navbar:** `border-b` in `primary-200` at low alpha.

## Components

- **Buttons (two only):** `.btn` + **`.btn-primary`** (sage: `sage-600` / `sage-700` hover) and **`.btn-secondary`** (brick: `secondary-600` / `secondary-700`). Filled labels use `text-btn-on` (`#fffcf7`). On umber CTA bands, **`.section-cta .btn-primary`** uses a light sage surface (`sage-200` / `sage-900` text) so the same role reads on dark. No accent, outline, or separate on-dark button classes.
- **Layout:** `.container-custom`, `.section-padding`.
- **Kickers & labels:** see **Kickers, pills, and tags** below.

## Kickers, pills, and tags

Use **one system** so sections stay editorial, not “chip farm.”

| Role | Class | When to use |
|------|--------|-------------|
| **Section kicker (light)** | `.kicker` | Parchment / light section headers: one line above the `h2`, uppercase, no fill. |
| **Section kicker (dark scrim)** | `.kicker-on-dark` | On beans / dark photo overlays (e.g. How we work). |
| **Section kicker (sage-tint band)** | `.kicker-on-sage` | On light green / washed blocks where `primary-700/80` is too weak (e.g. “Coming soon”). |
| **Marketing pill** | `.pill-marketing` | **Sparingly:** one high-intent line per home hero (or a one-off campaign). Bordered, soft white fill — **not** for every section. |
| **In-card tag** | `.tag-sage` | Taxonomy on **cards** only: audience, small status. Rounded-**md**, sage fill — **not** the same as `.pill-marketing`. |

**Rules:** Default to a **kicker** for new sections. Do **not** use `.pill-marketing` for “About,” contact, or product section heads — use `.kicker` and a strong headline instead. At most **one** marketing-style pill in the first fold of a page unless replacing copy for a campaign.

## Do's and Don'ts

**Do**

- Keep the **parchment + umber + brick + harbor** story; new pages should feel like the same **Boston studio, editorial, friendly** site.
- Use **strong overlays** on photography before placing text.
- **One** primary CTA per section when possible; use brick and harbor for support, not competing primaries.
- Re-tint new **inline shadows** to `primary-900` hue, not cool gray, when mimicking `shadow-craft`.

**Don't**

- Add large fields of **saturated** coral or jade; this palette is **deliberately dusty**.
- Use pure `#000` / `#fff` for main surfaces; tint (see `Layout` body and frontmatter “white”).
