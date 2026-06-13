---
name: Obsidian Deep
colors:
  surface: '#0e141a'
  surface-dim: '#0e141a'
  surface-bright: '#343a41'
  surface-container-lowest: '#090f15'
  surface-container-low: '#171c23'
  surface-container: '#1b2027'
  surface-container-high: '#252a32'
  surface-container-highest: '#30353d'
  on-surface: '#dee3ec'
  on-surface-variant: '#c6c5d5'
  inverse-surface: '#dee3ec'
  inverse-on-surface: '#2c3138'
  outline: '#908f9e'
  outline-variant: '#454652'
  surface-tint: '#bdc2ff'
  primary: '#bdc2ff'
  on-primary: '#121f8b'
  primary-container: '#5e6ad2'
  on-primary-container: '#fdfaff'
  inverse-primary: '#4854bb'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#ffb867'
  on-tertiary: '#482900'
  tertiary-container: '#a56500'
  on-tertiary-container: '#fffaf8'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dfe0ff'
  primary-fixed-dim: '#bdc2ff'
  on-primary-fixed: '#000965'
  on-primary-fixed-variant: '#2e3aa2'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#ffddbb'
  tertiary-fixed-dim: '#ffb867'
  on-tertiary-fixed: '#2b1700'
  on-tertiary-fixed-variant: '#673d00'
  background: '#0e141a'
  on-background: '#dee3ec'
  surface-variant: '#30353d'
typography:
  display-xl:
    fontFamily: Geist
    fontSize: 72px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
This design system is a cinematic technical minimalist framework designed for high-performance developer tools and premium SaaS platforms. The aesthetic centers on "Deep Space," utilizing absolute blacks and subtle luminous accents to create a sense of infinite depth.

The style is a hybrid of **Minimalism** and **Glassmorphism**, specifically optimized for high-density information environments. It evokes an emotional response of precision, calm focus, and technical authority. The interface feels less like a webpage and more like a high-end physical console, achieved through layered gradients, simulated optics, and a structured grid overlay.

## Colors
The palette is rooted in the "Deep Space" concept, prioritizing extreme dark values to maximize the impact of luminous elements.

- **Backgrounds:** Use `#020203` for the canvas background and `#050506` for primary UI containers.
- **Accent:** `#5E6AD2` (Electric Indigo) is used sparingly for primary actions and active states.
- **Atmospherics:** Implement 4 stacked radial gradients behind the main UI:
  1. Top-Left: Indigo (#5E6AD2) at 10% opacity, 800px radius.
  2. Bottom-Right: Violet (#8E5ED2) at 8% opacity, 1000px radius.
  3. Center: Subtle neutral wash at 5% opacity.
  4. Global: A 2% noise texture overlay with a 1px micro-grid at 4% opacity.
- **Large Blobs:** Position 900-1400px blobs with 150px Gaussian blurs behind the content layer, moving at very low speeds (60s cycles).

## Typography
Typography reflects technical precision. **Geist** is used for headlines and UI labels to provide a monospaced-adjacent feel, while **Inter** handles body text for maximum legibility.

**Headline Treatment:** Large display titles should use a linear gradient text-fill: `linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.4) 100%)`. This creates a "lit from above" effect consistent with the ambient light theme. All labels and metadata should be rendered in uppercase with slight tracking for a professional, utilitarian look.

## Layout & Spacing
The layout follows a strict 4px grid system. Use a 12-column fluid grid for desktop with fixed gutters of 24px. 

- **Desktop:** 48px margins; columns collapse or wrap based on content density.
- **Tablet:** 32px margins; 8-column grid.
- **Mobile:** 16px margins; 4-column grid.

Spacing between functional blocks should be generous (80px - 120px) to maintain the minimalist aesthetic. Use internal padding of 24px-32px for cards to ensure content has significant breathing room.

## Elevation & Depth
Depth is created through "Tonal Stacking" rather than traditional drop shadows.

- **Level 1 (Base):** `#020203` with micro-grid.
- **Level 2 (Cards):** `#050506` with a 1px solid border at `rgba(255, 255, 255, 0.06)`.
- **Level 3 (Popovers):** `#0A0A0B` with a slightly brighter `rgba(255, 255, 255, 0.1)` border.

**Multi-layer Shadows:** Use three-tier shadows for elevated elements:
1. `0 2px 4px rgba(0,0,0,0.5)` (Sharp)
2. `0 10px 20px rgba(0,0,0,0.3)` (Soft)
3. `0 0 40px rgba(94, 106, 210, 0.05)` (Accent glow)

## Shapes
The design system utilizes a **Rounded** (0.5rem base) language for small components like inputs and buttons, but steps up to **2XL** (1.5rem / 24px) for primary cards and containers. This contrast between "sharp" functional tools and "soft" containers creates a modern, sophisticated silhouette.

## Components
- **Buttons:** Primary buttons use the accent color with a subtle inner-glow top border. Hover state triggers a `200ms expo-out` scale of 1.02 and an increase in the outer glow radius.
- **Cards:** Must feature a `rounded-2xl` corner radius and 6% white borders. Implement an **Interactive Spotlight**: a radial gradient that follows the user's cursor on the border-mask, creating a "shimmer" effect on the edge.
- **Inputs:** Dark backgrounds (`#0A0A0B`) with a bottom-accent-line that expands from the center on focus. Use Geist for input text.
- **Chips:** Small, caps-heavy labels with a subtle background tint of the accent color.
- **Animations:** All transitions (hover, entry, state change) must use `cubic-bezier(0.16, 1, 0.3, 1)` (Expo-Out). Entry animations should include a subtle 4-8px Y-axis slide.
- **Lists:** Separated by 1px `rgba(255, 255, 255, 0.03)` lines. Hovering a list item should trigger a subtle `#0A0A0B` background highlight.