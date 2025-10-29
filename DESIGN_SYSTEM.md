# Catlife Design System

> Comprehensive design system extracted from Figma design, containing foundational design tokens and atomic-level components.

## Table of Contents

- [Overview](#overview)
- [Design Principles](#design-principles)
- [Design Tokens](#design-tokens)
- [Atomic Components](#atomic-components)
- [Usage Guidelines](#usage-guidelines)
- [File Structure](#file-structure)

---

## Overview

The Catlife Design System is a comprehensive collection of design tokens, atomic components, and guidelines that ensure consistency across the Catlife brand. This system focuses on:

- **Atomic-level components**: Reusable building blocks
- **Design tokens**: Foundational values for colors, typography, spacing, etc.
- **Consistent styling**: Unified visual language
- **Accessibility**: WCAG-compliant components

---

## Design Principles

### 1. **Playful & Friendly**
The design uses warm orange tones, rounded corners, and friendly typography to create an approachable, pet-friendly aesthetic.

### 2. **Bold & Confident**
Strong border shadows (offset shadows) create a bold, distinctive look that stands out.

### 3. **Simplified & Clear**
Clean layouts with generous spacing ensure content is easy to scan and understand.

### 4. **Consistent & Systematic**
Design tokens ensure visual consistency across all touchpoints.

---

## Design Tokens

All design tokens are defined in `src/styles/design-tokens.css` as CSS custom properties.

### Color Palette

#### Orange Scale (Primary Brand Color)
```css
--color-orange-50: #FFFAF3   /* Soft White */
--color-orange-100: #FFEED6  /* Lightest */
--color-orange-200: #FFD094  /* Light */
--color-orange-300: #FFA63A  /* Medium Light */
--color-orange-400: #F99830  /* Primary */
--color-orange-500: #F27100  /* Medium */
--color-orange-600: #FE6B1C  /* Medium Dark */
--color-orange-700: #CC4A11  /* Dark */
```

#### Gray Scale (Neutral Colors)
```css
--color-gray-500: #78716C   /* Medium - Secondary Text */
--color-gray-600: #57534E   /* Medium Dark */
--color-gray-700: #44403C   /* Dark */
--color-gray-900: #161616   /* Darkest - Primary Text */
```

#### Semantic Colors
```css
--color-soft-white: #FFFAF3        /* Background */
--color-brown: #1C0E04             /* Accent */
--color-success-green: #10B981     /* Success/Active */
```

### Typography

#### Font Families
- **Primary**: `'Roc Grotesk', -apple-system, Roboto, Helvetica, sans-serif`
- **Secondary**: `'Open Sans', -apple-system, Roboto, Helvetica, sans-serif`

#### Font Sizes
| Token | Size | Pixels | Usage |
|-------|------|--------|-------|
| `--font-size-xs` | 0.8125rem | 13px | Small labels |
| `--font-size-sm` | 0.875rem | 14px | Small body text |
| `--font-size-base` | 1rem | 16px | Body text |
| `--font-size-md` | 1.125rem | 18px | Large body text |
| `--font-size-lg` | 1.25rem | 20px | Section titles |
| `--font-size-xl` | 1.4375rem | 23px | Subsection headers |
| `--font-size-2xl` | 1.5rem | 24px | Card titles |
| `--font-size-3xl` | 1.875rem | 30px | Section headers |
| `--font-size-4xl` | 2.375rem | 38px | Large headings |
| `--font-size-5xl` | 2.875rem | 46px | Hero text |
| `--font-size-6xl` | 3.4375rem | 55px | Display text |
| `--font-size-7xl` | 5rem | 80px | Hero display |

#### Font Weights
- `--font-weight-normal: 400` - Body text
- `--font-weight-medium: 500` - Emphasis
- `--font-weight-bold: 700` - Headlines, buttons
- `--font-weight-extra-bold: 750` - Special emphasis

#### Line Heights
- `--line-height-tight: 1.0` (100%) - Display text
- `--line-height-snug: 1.05` (105%) - Tight headlines
- `--line-height-normal: 1.1` (110%) - Headlines
- `--line-height-relaxed: 1.15` (115%) - Subheadings
- `--line-height-comfortable: 1.2` (120%) - Comfortable reading
- `--line-height-loose: 1.5` (150%) - Body text

### Spacing System

8px base grid system:

```css
--space-1: 0.25rem   /* 4px */
--space-2: 0.5rem    /* 8px */
--space-3: 0.75rem   /* 12px */
--space-4: 1rem      /* 16px */
--space-5: 1.25rem   /* 20px */
--space-6: 1.5rem    /* 24px */
--space-8: 2rem      /* 32px */
--space-10: 2.5rem   /* 40px */
--space-12: 3rem     /* 48px */
--space-14: 3.5rem   /* 56px */
--space-20: 5rem     /* 80px */
--space-25: 6.25rem  /* 100px */
```

### Border Radius

```css
--radius-xs: 0.5rem      /* 8px - Small elements */
--radius-sm: 0.75rem     /* 12px */
--radius-md: 1rem        /* 16px */
--radius-lg: 1.5rem      /* 24px */
--radius-xl: 1.75rem     /* 28px */
--radius-2xl: 2rem       /* 32px - Cards */
--radius-3xl: 2.5rem     /* 40px - Large cards */
--radius-4xl: 3rem       /* 48px */
--radius-5xl: 3.5rem     /* 56px */
--radius-pill: 62.5rem   /* 1000px - Buttons, inputs */
```

### Shadows & Effects

#### Brand Shadow (Offset Shadow Effect)
The signature offset shadow creates a bold, playful appearance:

```css
--shadow-brand-sm: 1px 1px 0 0 var(--color-gray-900)
--shadow-brand: 2px 2px 0 0 var(--color-gray-900)
--shadow-brand-lg: 3px 3px 0 0 var(--color-gray-900)
--shadow-brand-orange: 2px 2px 0 0 var(--color-orange-400)
```

**Interaction States:**
- Default: `shadow-[2px_2px_0_0_#161616]`
- Hover: `translate-x-[1px] translate-y-[1px] shadow-[1px_1px_0_0_#161616]`
- Active: `translate-x-[2px] translate-y-[2px] shadow-none`

### Opacity Levels

```css
--opacity-20: 0.2   /* Subtle backgrounds */
--opacity-30: 0.3
--opacity-40: 0.4
--opacity-50: 0.5   /* Disabled states */
--opacity-100: 1    /* Full opacity */
```

---

## Atomic Components

### Button Component

**File:** `src/components/ui/catlife-button.tsx`

#### Variants
- `primary` - Black background with orange shadow
- `secondary` - Orange background with black shadow (most common)
- `outline` - White background with black shadow
- `ghost` - Transparent, no shadow
- `link` - Text with underline

#### Sizes
- `sm` - Height 32px (mobile)
- `md` - Height 40px (default)
- `lg` - Height 56px (desktop)
- `icon` - 36px square

#### Usage
```tsx
import { CatlifeButton } from "@/components/ui/catlife-button"

<CatlifeButton variant="secondary" size="lg">
  Simular plano
</CatlifeButton>
```

---

### Input Component

**File:** `src/components/ui/catlife-input.tsx`

#### Features
- Rounded pill shape (1000px border radius)
- Semi-transparent background
- Focus states with orange ring
- Placeholder styling
- Error state support

#### Usage
```tsx
import { CatlifeInput } from "@/components/ui/catlife-input"

<CatlifeInput 
  placeholder="Nome do seu pet"
  error={false}
/>
```

---

### Badge Component

**File:** `src/components/ui/catlife-badge.tsx`

#### Variants
- `success` - Green background (for active/approved states)
- `primary` - Orange background
- `secondary` - Light orange background
- `outline` - Transparent with border

#### Sizes
- `sm` - Height ~33px
- `md` - Height 36px (default)
- `lg` - Height 40px

#### Usage
```tsx
import { CatlifeBadge } from "@/components/ui/catlife-badge"

<CatlifeBadge variant="success" size="sm">
  -10%
</CatlifeBadge>
```

---

### Card Component

**File:** `src/components/ui/catlife-card.tsx`

#### Variants
- `primary` - Orange background (#F99830)
- `secondary` - Light orange (#FFD094)
- `tertiary` - Deep orange (#F27100)
- `light` - Soft white (#FFFAF3)
- `soft` - Light cream (#FFEED6)
- `outline` - Transparent with border
- `translucent` - Semi-transparent white

#### Sizes
- `sm` - 25.6px radius, 16px padding
- `md` - 32px radius, 24px padding (default)
- `lg` - 40px radius, 32px padding
- `xl` - 48px radius, 40px padding
- `2xl` - 56px radius, 48px padding

#### Sub-components
- `CatlifeCardHeader`
- `CatlifeCardTitle`
- `CatlifeCardDescription`
- `CatlifeCardContent`
- `CatlifeCardFooter`

#### Usage
```tsx
import { 
  CatlifeCard, 
  CatlifeCardHeader, 
  CatlifeCardTitle,
  CatlifeCardDescription,
  CatlifeCardContent 
} from "@/components/ui/catlife-card"

<CatlifeCard variant="primary" size="lg" hover>
  <CatlifeCardHeader>
    <CatlifeCardTitle>Purrfeito</CatlifeCardTitle>
    <CatlifeCardDescription>
      Cuidados de rotina com mais economia
    </CatlifeCardDescription>
  </CatlifeCardHeader>
  <CatlifeCardContent>
    {/* Card content */}
  </CatlifeCardContent>
</CatlifeCard>
```

---

### Icon Button Component

**File:** `src/components/ui/catlife-icon-button.tsx`

#### Variants
- `primary` - Orange with black shadow
- `secondary` - Black with orange shadow
- `outline` - Transparent with border
- `ghost` - No border or shadow

#### Sizes
- `sm` - 32px
- `md` - 36px (default)
- `lg` - 48px
- `xl` - 56px

#### Usage
```tsx
import { CatlifeIconButton } from "@/components/ui/catlife-icon-button"
import { ChevronLeft } from "lucide-react"

<CatlifeIconButton variant="primary" size="md">
  <ChevronLeft className="h-6 w-6" />
</CatlifeIconButton>
```

---

### Select/Dropdown Component

**File:** `src/components/ui/catlife-select.tsx`

#### Features
- Rounded pill shape
- Custom dropdown arrow
- Semi-transparent background
- Focus states

#### Usage
```tsx
import { CatlifeSelect } from "@/components/ui/catlife-select"

<CatlifeSelect>
  <option>Belo Horizonte - MG</option>
  <option>São Paulo - SP</option>
  <option>Rio de Janeiro - RJ</option>
</CatlifeSelect>
```

---

### Form Container Component

**File:** `src/components/ui/catlife-form-container.tsx`

#### Features
- Rounded container with padding
- Semi-transparent background
- Optional title
- Centered layout

#### Usage
```tsx
import { CatlifeFormContainer } from "@/components/ui/catlife-form-container"
import { CatlifeInput } from "@/components/ui/catlife-input"
import { CatlifeButton } from "@/components/ui/catlife-button"

<CatlifeFormContainer title="Encontre a opção ideal">
  <CatlifeInput placeholder="Nome do seu pet" />
  <CatlifeButton variant="primary">Vamos lá</CatlifeButton>
</CatlifeFormContainer>
```

---

### Pagination Dots Component

**File:** `src/components/ui/catlife-pagination-dots.tsx`

#### Features
- Circular indicators
- Active/inactive states
- Clickable navigation
- Accessible ARIA labels

#### Usage
```tsx
import { CatlifePaginationDots } from "@/components/ui/catlife-pagination-dots"

<CatlifePaginationDots 
  total={4} 
  current={0}
  onDotClick={(index) => handleSlideChange(index)}
/>
```

---

### Checkbox Item Component

**File:** `src/components/ui/catlife-checkbox-item.tsx`

#### Features
- Custom checkbox styling
- Green checkmark icon
- Label with bordered background
- Shadow effects

#### Variants
- `success` - Green (default)
- `primary` - Orange
- `secondary` - Light orange

#### Usage
```tsx
import { CatlifeCheckboxItem } from "@/components/ui/catlife-checkbox-item"

<CatlifeCheckboxItem 
  label="Consultas"
  variant="success"
  checked={true}
/>
```

---

## Usage Guidelines

### Typography Best Practices

1. **Hierarchy**
   - Use `--font-size-7xl` (80px) for hero headings (desktop only)
   - Use `--font-size-5xl` (46px) for section headings
   - Use `--font-size-2xl` (24px) for card titles
   - Use `--font-size-base` (16px) for body text

2. **Line Height**
   - Use `--line-height-tight` (100%) for display text
   - Use `--line-height-normal` (110%) for headings
   - Use `--line-height-loose` (150%) for body text

3. **Font Weight**
   - Use `--font-weight-bold` (700) for headings and buttons
   - Use `--font-weight-medium` (500) for emphasis
   - Use `--font-weight-normal` (400) for body text

### Color Usage

1. **Primary Actions**
   - Use `--color-orange-400` (#F99830) for primary buttons and CTAs
   - Use `--color-gray-900` (#161616) for text on light backgrounds

2. **Backgrounds**
   - Use `--color-orange-50` (#FFFAF3) for main background
   - Use `--color-orange-200` (#FFD094) for section backgrounds
   - Use `--color-orange-100` (#FFEED6) for subtle backgrounds

3. **Status Indicators**
   - Use `--color-success-green` (#10B981) for success states
   - Use transparency (`rgba(255,250,243,0.20)`) for subtle containers

### Spacing Guidelines

1. **Component Spacing**
   - Use `--space-4` (16px) for tight spacing within components
   - Use `--space-6` (24px) for comfortable spacing
   - Use `--space-8` (32px) for section gaps

2. **Section Spacing**
   - Use `--space-20` (80px) for vertical section padding
   - Use `--space-14` (56px) for horizontal section padding (desktop)
   - Use `--space-4` (16px) for horizontal padding (mobile)

### Responsive Design

1. **Breakpoints** (follow Tailwind defaults)
   - Mobile: < 640px
   - Tablet: 640px - 1024px
   - Desktop: > 1024px

2. **Mobile Adjustments**
   - Reduce font sizes by ~20-40%
   - Reduce padding/spacing by ~30-50%
   - Stack layouts vertically
   - Reduce border radius proportionally

### Accessibility

1. **Color Contrast**
   - All text meets WCAG AA standards (4.5:1 minimum)
   - Primary text (#161616) on light backgrounds (#FFFAF3)

2. **Interactive Elements**
   - Minimum touch target: 44x44px
   - Focus indicators visible on all interactive elements
   - ARIA labels on icon-only buttons

3. **Keyboard Navigation**
   - All components keyboard accessible
   - Logical tab order maintained

---

## File Structure

```
src/
├── styles/
│   └── design-tokens.css       # Design tokens (CSS variables)
│
└── components/
    └── ui/
        ├── catlife-button.tsx          # Button component
        ├── catlife-input.tsx           # Input component
        ├── catlife-badge.tsx           # Badge component
        ├── catlife-card.tsx            # Card component + sub-components
        ├── catlife-icon-button.tsx     # Icon button component
        ├── catlife-select.tsx          # Select/dropdown component
        ├── catlife-form-container.tsx  # Form container component
        ├── catlife-pagination-dots.tsx # Pagination dots component
        └── catlife-checkbox-item.tsx   # Checkbox item component
```

---

## Implementation Notes

### Import Design Tokens

Add to your global CSS file (e.g., `src/app/globals.css`):

```css
@import '../styles/design-tokens.css';
```

### Using Components

All components are built with:
- **TypeScript** for type safety
- **React** (v19+)
- **Tailwind CSS** (v4+) for styling
- **class-variance-authority** for variant management

### Customization

Components use design tokens where possible. To customize:

1. **Update tokens** in `design-tokens.css`
2. **Override component variants** by extending the `cva` definitions
3. **Add new variants** following existing patterns

---

## Next Steps

### Additional Components Needed

Based on the Figma design, consider building:

1. **Header Component** - Brand header with logo and navigation
2. **Price Card Component** - Specialized card for pricing plans
3. **Hero Section** - Full-width hero with image and form
4. **Accordion/FAQ Component** - Expandable FAQ items
5. **Footer Component** - Brand footer with links
6. **Media Gallery** - Photo grid for professional photos
7. **Testimonial Card** - Quote cards with attribution

### Documentation Enhancements

1. Create Storybook stories for all components
2. Add visual regression testing
3. Document animation/transition patterns
4. Create component composition examples

---

## License & Credits

Design system extracted from Catlife Figma design.
Implementation uses shadcn/ui patterns and Tailwind CSS.
