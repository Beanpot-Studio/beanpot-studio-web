# Shape brief: Homepage (confirmed)

**Status:** Confirmed by stakeholder. **Date:** 2026-04-28.  
**Source:** `$impeccable shape homepage` (PRODUCT.md + DESIGN.md + current implementation).

## 1. Feature summary

The homepage is the **brand** entry: Hero, How we work (values), Products (DifferenTest + Practice Buddy), closing CTA. It communicates *practical software for real life*, Boston credibility, and clear next steps without generic edtech filler.

## 2. Primary user action

- **Hero:** **See what we’re building** (accent CTA → `#featured-project-showcase`) is **primary**; **Get in touch** is **secondary** (outline).
- **Global contact:** Nav + footer + bottom CTA band for users who skip the hero.
- **Terminal goal:** Contact after **work** and **values** are visible.

## 3. Design direction

- **Color strategy:** Committed (honey / coral / jade).
- **Theme:** Light base; dark via photo + scrim only. Visitor skimming on phone/laptop, daytime.
- **Anchors:** One idea per block; solid headline emphasis (no decorative gradient text on key home headings; CTA band may keep full gradient as terminal block).

## 4. Scope

Production, single route (`/`), four section components, reduced motion for particles and card lift.

## 5. Layout strategy

Hero two-column on lg; values = lead card + 2×3 grid; projects = DifferenTest panel + Practice Buddy panel; CTA = single button; section rhythm with borders/padding as implemented.

## 6. Key states

Default load; focus-visible on interactive elements; `prefers-reduced-motion` for particles and card translate; mobile nav and ≥44px targets.

## 7. Interaction model

In-page hashes for values and projects; external link to Practice Buddy; contact paths for CTA band.

## 8. Content requirements

As implemented: hero badge/H1/body/CTAs/Boston; six values with lead; projects intro + DifferenTest + Practice Buddy; short CTA copy.

## 9. Open questions (future craft)

1. Success metrics: contact vs Practice Buddy vs engagement?
2. Add testimonials strip to home, or stay proof-light?
3. CTA band: keep multicolor gradient or flatten to solid primary?

## 10. Next step

Hand off to **`$impeccable craft homepage`** or targeted tasks for open questions in §9.
