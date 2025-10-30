# Catlife Design System - shadcn Registry Integration

This document outlines how the Catlife design system components have been integrated into the shadcn registry.

## Changes Made

### 1. Registry Entries Added (registry.json)

Added the following entries to `registry.json`:

#### Theme
- **catlife-theme** - Catlife design system theme with warm orange palette

#### UI Components (9 total)
- **catlife-button** - Button with 5 variants and 4 sizes
- **catlife-input** - Form input with pill design
- **catlife-badge** - Pill-shaped badges
- **catlife-card** - Container with 7 variants and 5 sizes
- **catlife-icon-button** - Circular icon buttons
- **catlife-select** - Custom dropdown
- **catlife-form-container** - Form wrapper component
- **catlife-pagination-dots** - Carousel navigation
- **catlife-checkbox-item** - Custom checkbox with label

### 2. Demo Components Created

Created demo files in `src/app/demo/[name]/ui/`:

```
src/app/demo/[name]/ui/
├── catlife-button.tsx              # Button variants showcase
├── catlife-input.tsx               # Input states showcase
├── catlife-badge.tsx               # Badge variants showcase
├── catlife-card.tsx                # Card variants showcase
├── catlife-icon-button.tsx         # Icon button sizes showcase
├── catlife-select.tsx              # Select component showcase
├── catlife-form-container.tsx      # Form container showcase
├── catlife-pagination-dots.tsx     # Pagination demo with state
└── catlife-checkbox-item.tsx       # Checkbox variants showcase
```

### 3. Demo Index Updated

Updated `src/app/demo/[name]/index.tsx` to:
- Import all 9 Catlife demo components
- Register them in the `demos` object with their kebab-case names

## Registry Structure

Each component entry includes:

```json
{
  "name": "catlife-button",
  "type": "registry:ui",
  "title": "Catlife Button",
  "description": "...",
  "registryDependencies": [
    "https://registry-starter.vercel.app/r/catlife-theme.json"
  ],
  "files": [
    {
      "path": "src/components/ui/catlife-button.tsx",
      "type": "registry:component"
    },
    {
      "path": "src/layouts/minimal-layout.tsx",
      "type": "registry:file",
      "target": "app/layout.tsx"
    }
  ]
}
```

## How It Works

1. **Registry Definition** (`registry.json`)
   - Defines all component metadata
   - Specifies dependencies and file locations
   - shadcn CLI uses this to install components

2. **Demo Files** (`src/app/demo/[name]/ui/*.tsx`)
   - Export demo objects with component variants
   - Format: `export const [componentName] = { name: "...", components: {...} }`
   - Automatically used by the demo page system

3. **Demo Index** (`src/app/demo/[name]/index.tsx`)
   - Imports all demo components
   - Registers them in the `demos` object
   - Enables dynamic demo page generation

4. **Demo Page** (`src/app/demo/[name]/page.tsx`)
   - Automatically renders demos from the `demos` object
   - Doesn't need modification for new components
   - Uses dynamic route generation

## Accessing Components

### In the UI
Navigate to each component demo:
- `/demo/catlife-button`
- `/demo/catlife-input`
- `/demo/catlife-badge`
- `/demo/catlife-card`
- `/demo/catlife-icon-button`
- `/demo/catlife-select`
- `/demo/catlife-form-container`
- `/demo/catlife-pagination-dots`
- `/demo/catlife-checkbox-item`

### In Code
```tsx
// Direct import
import { CatlifeButton } from "@/components/ui/catlife-button"
import { CatlifeCard } from "@/components/ui/catlife-card"

// Bulk import
import {
  CatlifeButton,
  CatlifeInput,
  CatlifeCard,
  // ... etc
} from "@/components/ui/catlife"
```

## Registry Dependencies

All Catlife components depend on:
- **catlife-theme** - The design system theme with CSS variables
- **design-tokens.css** - Foundational design values

When installing a Catlife component via shadcn CLI, the theme is automatically included.

## Design System Files

**Core files:**
- `src/styles/design-tokens.css` - All design tokens (colors, typography, spacing, etc.)
- `DESIGN_SYSTEM.md` - Comprehensive documentation
- `CATLIFE_DESIGN_SYSTEM_README.md` - Quick-start guide

**Component files:**
- `src/components/ui/catlife-*.tsx` - Individual components
- `src/components/ui/catlife/index.ts` - Component exports

## Adding Components to Registry

To add a new Catlife component to the registry:

1. **Create the component** (`src/components/ui/catlife-new.tsx`)
2. **Create demo file** (`src/app/demo/[name]/ui/catlife-new.tsx`)
   ```tsx
   export const catlifeNew = {
     name: "catlife-new",
     components: {
       Default: <CatlifeNew />,
       Variant1: <CatlifeNew variant="variant1" />,
     },
   };
   ```
3. **Update demo index** (`src/app/demo/[name]/index.tsx`)
   - Import: `import { catlifeNew } from "@/app/demo/[name]/ui/catlife-new"`
   - Register: `"catlife-new": catlifeNew,`
4. **Update registry.json**
   ```json
   {
     "name": "catlife-new",
     "type": "registry:ui",
     "title": "Catlife New",
     "description": "...",
     "registryDependencies": [
       "https://registry-starter.vercel.app/r/catlife-theme.json"
     ],
     "files": [...]
   }
   ```

## Naming Convention

All Catlife components follow this convention:
- **File names**: `catlife-[component-name].tsx` (lowercase, kebab-case)
- **Component names**: `Catlife[ComponentName]` (PascalCase)
- **Demo names**: `catlife[ComponentName]` (camelCase)
- **Registry names**: `catlife-[component-name]` (lowercase, kebab-case)

## Validation

To verify the registry integration:

1. **Check registry.json is valid**
   ```bash
   npm run build
   ```

2. **Verify demo pages load**
   - Navigate to `/demo/catlife-button`
   - Check that component variants display correctly

3. **Check component imports work**
   ```tsx
   import { CatlifeButton } from "@/components/ui/catlife-button"
   // Should work without errors
   ```

## Status

✅ **Catlife Button** - Registered and demoed
✅ **Catlife Input** - Registered and demoed
✅ **Catlife Badge** - Registered and demoed
✅ **Catlife Card** - Registered and demoed
✅ **Catlife Icon Button** - Registered and demoed
✅ **Catlife Select** - Registered and demoed
✅ **Catlife Form Container** - Registered and demoed
✅ **Catlife Pagination Dots** - Registered and demoed
✅ **Catlife Checkbox Item** - Registered and demoed
✅ **Catlife Theme** - Registered

## Next Steps

1. **Test the registry**
   - Run `npm run dev`
   - Navigate to demo pages
   - Verify all components render correctly

2. **Optional: Add to sidebar navigation**
   - Update sidebar component to include Catlife section
   - Group components under "Catlife Design System"

3. **Optional: Create composite components**
   - Build higher-level components using atomic components
   - Examples: Hero section, pricing card, testimonial section

## References

- Main Documentation: `DESIGN_SYSTEM.md`
- Quick Start: `CATLIFE_DESIGN_SYSTEM_README.md`
- Registry Schema: `registry.json`
- Demo System: `src/app/demo/[name]/`
