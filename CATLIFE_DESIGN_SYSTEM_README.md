# Catlife Design System - Extraction Summary

This document provides an overview of the design system extraction from the Figma design files.

## What Was Created

### 1. Design Tokens (`src/styles/design-tokens.css`)

A comprehensive CSS file containing all foundational design values:

- **Color Palette**: Orange scale (7 shades), Gray scale (4 shades), Semantic colors
- **Typography**: Font families, sizes (13 levels), weights (4 levels), line heights (6 levels)
- **Spacing System**: 8px base grid with 13 spacing values
- **Border Radius**: 10 radius values from 8px to pill-shaped (1000px)
- **Shadows**: Brand-specific offset shadow effects
- **Opacity Levels**: 5 opacity values
- **Border Widths**: 4 border width options

### 2. Atomic Components

Nine atomic-level components extracted from the design:

| Component | File | Purpose |
|-----------|------|---------|
| **Button** | `catlife-button.tsx` | Primary actions with 5 variants, 4 sizes |
| **Input** | `catlife-input.tsx` | Form input fields with error states |
| **Badge** | `catlife-badge.tsx` | Pill-shaped labels and discount tags |
| **Card** | `catlife-card.tsx` | Container component with 7 variants, 5 sizes |
| **Icon Button** | `catlife-icon-button.tsx` | Circular icon buttons |
| **Select** | `catlife-select.tsx` | Dropdown select with custom styling |
| **Form Container** | `catlife-form-container.tsx` | Form wrapper with title |
| **Pagination Dots** | `catlife-pagination-dots.tsx` | Carousel/stepper navigation |
| **Checkbox Item** | `catlife-checkbox-item.tsx` | Custom checkbox with label |

### 3. Documentation

- **DESIGN_SYSTEM.md**: Comprehensive 586-line documentation covering:
  - Design principles
  - Token reference
  - Component API
  - Usage guidelines
  - Accessibility standards
  - Responsive design patterns

### 4. Showcase Page

- **`src/app/catlife-showcase/page.tsx`**: Interactive demonstration of all components

## File Structure

```
.
├── DESIGN_SYSTEM.md                          # Main documentation
├── CATLIFE_DESIGN_SYSTEM_README.md           # This file
│
├── src/
│   ├── styles/
│   │   └── design-tokens.css                 # Design tokens
│   │
│   ├── components/
│   │   └── ui/
│   │       ├── catlife/
│   │       │   └── index.ts                  # Component exports
│   │       ├── catlife-button.tsx
│   │       ├── catlife-input.tsx
│   │       ├── catlife-badge.tsx
│   │       ├── catlife-card.tsx
│   │       ├── catlife-icon-button.tsx
│   │       ├── catlife-select.tsx
│   │       ├── catlife-form-container.tsx
│   │       ├── catlife-pagination-dots.tsx
│   │       └── catlife-checkbox-item.tsx
│   │
│   └── app/
│       ├── globals.css                       # Updated with token imports
│       └── catlife-showcase/
│           └── page.tsx                      # Component showcase
```

## How to Use

### 1. Import Design Tokens

The design tokens are automatically imported via `globals.css`. They're available as CSS custom properties:

```css
/* Example usage in your CSS */
.my-element {
  color: var(--color-orange-400);
  font-family: var(--font-primary);
  padding: var(--space-6);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-brand);
}
```

### 2. Import Components

**Individual imports:**
```tsx
import { CatlifeButton } from "@/components/ui/catlife-button"
import { CatlifeCard } from "@/components/ui/catlife-card"
```

**Bulk import from index:**
```tsx
import {
  CatlifeButton,
  CatlifeInput,
  CatlifeCard,
  CatlifeCardHeader,
  CatlifeCardTitle,
  CatlifeCardContent,
} from "@/components/ui/catlife"
```

### 3. Use Components

```tsx
// Button example
<CatlifeButton variant="secondary" size="lg">
  Simular plano
</CatlifeButton>

// Card example
<CatlifeCard variant="primary" size="md" hover>
  <CatlifeCardHeader>
    <CatlifeCardTitle>RonRon</CatlifeCardTitle>
    <CatlifeCardDescription>
      Cuidados de rotina com mais economia
    </CatlifeCardDescription>
  </CatlifeCardHeader>
  <CatlifeCardContent>
    <div className="flex items-center gap-1">
      <span className="text-5xl font-bold">R$39</span>
      <span className="text-base">/ mês</span>
    </div>
  </CatlifeCardContent>
</CatlifeCard>

// Form example
<CatlifeFormContainer title="Encontre a opção ideal">
  <CatlifeInput placeholder="Nome do seu pet" />
  <CatlifeButton variant="primary">Vamos lá</CatlifeButton>
</CatlifeFormContainer>
```

### 4. View Showcase

Visit the showcase page to see all components in action:

```bash
npm run dev
```

Then navigate to: `http://localhost:3000/catlife-showcase`

## Design System Highlights

### Signature Visual Elements

1. **Offset Shadow Effect**
   - Creates a bold, playful appearance
   - Consistent 2px offset in default state
   - Interactive states reduce offset on hover/active
   - Example: `shadow-[2px_2px_0_0_#161616]`

2. **Rounded Corners**
   - Pill-shaped buttons and inputs (1000px border radius)
   - Generous border radius on cards (32px - 56px)
   - Creates friendly, approachable aesthetic

3. **Warm Orange Palette**
   - Primary brand color: `#F99830`
   - 7-shade scale from light (#FFFAF3) to dark (#CC4A11)
   - Paired with neutral grays for contrast

4. **Bold Typography**
   - Roc Grotesk font family
   - Large, impactful headings (up to 80px)
   - Tight line-height (110%) for impact
   - Bold weights (700) for emphasis

## Key Design Patterns

### 1. Button States
```
Default:  shadow-[2px_2px_0_0_#161616]
Hover:    translate-x-[1px] translate-y-[1px] shadow-[1px_1px_0_0_#161616]
Active:   translate-x-[2px] translate-y-[2px] shadow-none
```

### 2. Card Hierarchy
- **Primary** (#F99830): Main content cards
- **Secondary** (#FFD094): Supporting cards
- **Light** (#FFFAF3): Subtle containers
- **Translucent** (rgba): Overlay elements

### 3. Spacing Scale
- Component padding: 16px - 48px
- Section gaps: 32px - 40px
- Section padding: 80px (desktop), 16px (mobile)

### 4. Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Component Variants Summary

### Buttons (5 variants)
- `primary` - Black with orange shadow
- `secondary` - Orange with black shadow ⭐ Most common
- `outline` - White with black shadow
- `ghost` - Transparent, no shadow
- `link` - Text with underline

### Cards (7 variants)
- `primary` - Orange (#F99830)
- `secondary` - Light orange (#FFD094)
- `tertiary` - Deep orange (#F27100)
- `light` - Soft white (#FFFAF3)
- `soft` - Light cream (#FFEED6)
- `outline` - Transparent with border
- `translucent` - Semi-transparent white

### Badges (4 variants)
- `success` - Green (#10B981)
- `primary` - Orange (#F99830)
- `secondary` - Light orange (#FFEED6)
- `outline` - Transparent

## Typography Scale Quick Reference

| Usage | Font Size | Line Height | Weight |
|-------|-----------|-------------|--------|
| Hero Display | 80px | 100% | 700 |
| Hero Text | 46px | 115% | 700 |
| Section Headers | 30px | 110% | 500 |
| Card Titles | 24px | 110% | 500 |
| Large Body | 18px | 110% | 400 |
| Body Text | 16px | 150% | 400 |
| Small Text | 14px | 150% | 400 |

## Color Usage Guide

### Primary Colors (Actions & Emphasis)
- **Orange 400** (#F99830): Primary buttons, CTAs, badges
- **Gray 900** (#161616): Text, borders, shadows

### Background Colors
- **Orange 50** (#FFFAF3): Main background
- **Orange 100** (#FFEED6): Section backgrounds
- **Orange 200** (#FFD094): Highlighted sections

### Text Colors
- **Gray 900** (#161616): Primary text
- **Gray 500** (#78716C): Secondary text, placeholders

### Status Colors
- **Success Green** (#10B981): Active states, checkmarks
- **Orange 400** (#F99830): Warning, emphasis

## Accessibility Features

✅ **Color Contrast**: All text meets WCAG AA standards (4.5:1 minimum)  
✅ **Touch Targets**: Minimum 44x44px for all interactive elements  
✅ **Focus Indicators**: Visible focus rings on all interactive components  
✅ **Keyboard Navigation**: Full keyboard accessibility  
✅ **ARIA Labels**: Proper labeling on icon-only buttons and controls  
✅ **Semantic HTML**: Proper heading hierarchy and landmark regions  

## Next Steps

### Recommended Additional Components

Based on the Figma design, consider building:

1. **Header Component** - Brand header with logo and navigation
2. **Price Card Component** - Specialized pricing card with features list
3. **Hero Section** - Full-width hero with image and form
4. **Accordion Component** - Expandable FAQ items
5. **Footer Component** - Brand footer with sitemap
6. **Media Gallery** - Professional photo grid
7. **Testimonial Card** - Quote cards with attribution

### Integration Tasks

- [ ] Add Storybook for component documentation
- [ ] Set up visual regression testing
- [ ] Create component composition examples
- [ ] Document animation/transition patterns
- [ ] Add dark mode support (if needed)
- [ ] Create mobile-specific component variants
- [ ] Set up automated design token sync from Figma

## Questions or Issues?

Refer to the comprehensive documentation in `DESIGN_SYSTEM.md` for detailed information on:
- Component APIs
- Usage guidelines
- Design principles
- Responsive patterns
- Accessibility standards

## Summary Statistics

- **Design Tokens**: 75+ CSS custom properties
- **Atomic Components**: 9 components
- **Component Variants**: 30+ total variants
- **Color Palette**: 14 colors
- **Typography Scales**: 13 font sizes, 4 weights, 6 line heights
- **Spacing Values**: 13 spacing tokens
- **Border Radius**: 10 radius values
- **Documentation**: 586 lines

---

**Design System Version**: 1.0.0  
**Last Updated**: Generated from Figma design  
**Tech Stack**: React 19, TypeScript, Tailwind CSS v4, Next.js 15
