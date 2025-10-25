# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` - Starts Vite dev server with auto-open and host access
- **Build**: `npm run build` - TypeScript compilation followed by Vite build
- **Linting**: `npm run lint` - Run ESLint checks
- **Lint fix**: `npm run lint:fix` - Auto-fix ESLint issues
- **Format**: `npm run format` - Format code with Prettier
- **Format check**: `npm run format:check` - Check Prettier formatting
- **Preview**: `npm run preview` - Preview production build

## Project Architecture

### Tech Stack

- **Framework**: React 19 with TypeScript 5.8
- **Build Tool**: Vite 7 with SWC for fast refresh
- **Routing**: React Router 7 with nested route structure
- **Styling**: Tailwind CSS 4 with `@theme` directive configuration
- **Maps**: Kakao Maps SDK (`react-kakao-maps-sdk`)
- **Animation**: Motion library
- **Utilities**: `tailwind-merge` for conditional class merging

### Path Aliases

```typescript
"@" → "src/"
"@lib" → "src/lib/"
"@app" → "src/app/"
```

### Directory Structure & Patterns

```
src/
├── app/                          # Page-based organization
│   └── {PageName}/               # Each page has its own directory
│       ├── {PageName}Page.tsx    # Main page component
│       ├── components/           # Page-specific components
│       └── index.ts              # Barrel export
├── lib/
│   ├── components/               # Shared components across pages
│   │   └── {Component}/
│   │       ├── {Component}.tsx
│   │       ├── components/       # Sub-components (if needed)
│   │       └── index.ts          # Barrel export
│   ├── constants/                # Application constants
│   │   ├── ROUTE_PATH/           # Route definitions
│   │   ├── COMPANY_INFO/         # Company data (contact, location)
│   │   └── MENU_DATA/            # Navigation menu structure
│   ├── hooks/                    # Shared custom hooks
│   ├── layout/                   # Layout components
│   │   ├── Navbar/               # Navigation with dropdown menus
│   │   ├── RootLayout/           # Root wrapper with Kakao Maps setup
│   │   └── Modal/                # Modal system with hooks
│   ├── router/                   # React Router configuration
│   ├── assets/                   # Static assets (images)
│   ├── font/                     # Custom fonts (Pretendard)
│   └── style/                    # Global styles and theme
```

### Key Architecture Patterns

#### Component Organization Pattern

**Page Structure**: Each page follows a consistent pattern:

- Page component (`{Name}Page.tsx`) in `src/app/{PageName}/`
- Page-specific components in `src/app/{PageName}/components/`
- Shared components in `src/lib/components/` (Breadcrumb, ContentSection, PageHero, Card, etc.)
- Page-specific layout wrappers (e.g., `IntroduceContainer`, `ServiceContainer`)
- Barrel exports via `index.ts` in every component directory

**Shared Component Guidelines**:
- Components used across multiple pages should be in `@lib/components`
- Page-specific components stay in their page's `components/` directory
- Use the Card component for consistent card styling across the app

**Example**:

```typescript
// src/app/Service/InsurancePage/InsurancePage.tsx
import { ServiceContainer } from "@app/Service/components";
import { Breadcrumb, ContentSection, PageHero, SimpleInfoTable } from "@lib/components";
import { InsuranceIntroduction, InsurancePolicyCards } from "./components";
```

#### Barrel Export Pattern

**Every component and hook directory must include an `index.ts` file**:

```typescript
// Default export pattern for components
export { default as ComponentName } from "./ComponentName";

// Named re-export pattern for hooks
export { default as useHookName } from "./useHookName";
```

This enables clean imports:

```typescript
// From shared components
import { Footer, LoadingSpinner, Card, SimpleInfoTable } from "@lib/components";

// From page-specific components
import { CEOGreeting, CoreValuesGrid } from "./components";
```

#### Hook Organization

**Shared Hooks** (`src/lib/hooks/`):

- Reusable across multiple pages/components
- Examples: `useModal`, `useMobileMenu`, `useImagePreload`, `usePageTransition`, `useScrollAnimation`

**Component-Level Hooks** (`{Component}/hooks/`):

- Specific to a single component/container
- Example: `IntroduceContainer/hooks/useIntroduceData` - provides page content data
- Located in same directory as the component that uses them

#### Routing Structure

**Nested Routes Pattern**:

- Root layout at "/" with `<RootLayout />` wrapper
- All pages are children of root route
- Automatic redirects for parent paths to first child
- 404 handling with catch-all route

```typescript
// src/lib/router/route/route.tsx structure:
{
  path: "/",
  element: <RootLayout />,
  children: [
    { path: ROUTE_PATH.INTRODUCE_GREETING, element: <GreetingPage /> },
    { path: "/introduce", element: <Navigate to={ROUTE_PATH.INTRODUCE_GREETING} /> },
    { path: "*", element: <NotFoundPage /> }
  ]
}
```

#### Constants Management

**Centralized Configuration**:

- `ROUTE_PATH`: All route paths as typed constants (`as const`)
- `COMPANY_INFO`: Business data (phone, fax, email, address, map coordinates)
- `MENU_DATA`: Navigation menu structure with labels and paths

**Type Safety**:

```typescript
// ROUTE_PATH provides autocomplete and type checking
const ROUTE_PATH = {
  HOME: "/",
  INTRODUCE_GREETING: "/introduce/greeting",
  // ...
} as const;
```

### Styling System

#### Tailwind CSS 4 Configuration

**Theme System** (`src/lib/style/theme.css`):

- Uses `@theme` directive for custom design tokens
- CSS variables for colors, fonts, transitions, z-index, shadows
- Custom breakpoints: `--breakpoint-mobile: 640px`, `--breakpoint-tablet: 1024px`
- Predefined animations with `@keyframes` (skeleton, loading_spinner, fade-in, slide-up)
- Accessibility: Focus styles and reduced motion support

**Pretendard Font**:

- Custom variable font loaded from `src/lib/font/pretendard.css`
- Set as default in `--font-pretendard` theme variable

**Class Merging**:

- Use `tailwind-merge` for conditional class application to avoid conflicts
- Required for conditional classes and variant props

**Responsive Design**:
- Use `max-mobile:` prefix for mobile-specific styles (< 640px)
- Common patterns: `max-mobile:text-[1.4rem]`, `max-mobile:p-[1.6rem]`
- `SimpleInfoTable` has optional `enableMobileCard` prop for responsive card layout

### Kakao Maps Integration

**Setup** (`src/lib/layout/RootLayout/RootLayout.tsx`):

- `useKakaoLoader` hook initializes SDK with API key from environment variable
- Map data (lat/lng) stored in `COMPANY_INFO` constant
- Used in DirectionsPage for location display

### Code Style

#### Import Organization (Prettier)

Imports are automatically sorted by `@trivago/prettier-plugin-sort-imports`:

```typescript
// 1. CSS files
import "./styles.css";

// 2. Absolute imports (@app, @lib)
import { ServiceContainer } from "@app/Service/components";
import { Breadcrumb, Card, SimpleInfoTable } from "@lib/components";
import { useScrollAnimation } from "@lib/hooks";

// 3. Relative parent imports
import { IntroduceContainer } from "../components";

// 4. Relative same-level imports
import { InsuranceIntroduction } from "./components";
import { useInsuranceData } from "./hooks";

// 5. Third-party modules
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
```

#### Prettier Rules

- Print width: 120 characters
- Tab width: 2 spaces
- Single attribute per line for JSX
- Trailing commas everywhere
- Double quotes for strings
- Arrow parens: avoid (e.g., `x => x + 1`)

#### TypeScript Patterns

**Type Files**: Separate `.type.ts` files for complex interfaces
**Const Assertions**: Use `as const` for constant objects to ensure literal types
**Props Interfaces**: Define props interfaces inline or in `.type.ts` files

### Environment Variables

**Required**:

- `VITE_KAKAO_MAP_API_KEY` - Kakao Maps API key for location services

### Navigation System

**Multi-level Menu Structure**:

- Main navigation defined in `MENU_DATA` constant
- Each menu item has `label`, `mainPath`, and `subItems[]`
- Desktop: Dropdown menus on hover
- Mobile: Hamburger menu with accordion-style submenus
- Active menu tracking with `useActiveMenu` hook

### Modal System

**Pattern** (`src/lib/layout/Modal/`):

- Portal-based rendering
- Custom hooks: `useModal`, `useKeydownModal`, `useClickAwayModal`
- Animation variants with `useModalVariants`
- Accessible with keyboard support (ESC to close)

## Component Patterns

### Card Component

The `Card` component (`src/lib/components/Card`) provides consistent card styling:
- **Variants**: `default`, `gradient`, `outline`
- **Usage**: `<Card variant="default" className="custom-class">content</Card>`
- Used in `InsurancePolicyCards`, `SimpleInfoTable` mobile view, etc.

### SimpleInfoTable Component

The `SimpleInfoTable` component supports responsive layouts and content variants:
- **Props**: `data`, `tableMaxWidth`, `labelWidth`, `valueWidth`, `enableMobileCard`, `variant`
- **Variants**:
  - `compact` (default): Smaller text, centered alignment, for simple contact info
  - `detailed`: Larger text, left-aligned, supports multi-line with bullet points (`\n` for line breaks, `• item` for bullets)
- **Responsive**: Set `enableMobileCard={true}` for mobile card layout
- Desktop: Traditional table layout
- Mobile (< 640px): Card-based layout when enabled

**Data Pattern for Content**:
```typescript
// Simple data (variant="compact" or omit)
{ label: "전화", value: "010-1234-5678" }

// Detailed data with bullets (variant="detailed")
{
  label: "서비스 내용",
  value: "서비스를 제공합니다.\n\n• 항목 1\n• 항목 2\n• 항목 3"
}
```

### Scroll Animations

Use `useScrollAnimation` hook for entrance animations:
```typescript
const { ref, variants, transition, isInView } = useScrollAnimation({
  type: 'fade', // or 'slide', 'scale', 'stagger'
  threshold: 0.2
});
```

## Development Notes

- Application serves 우리재가노인복지센터 (Woori Home Elderly Care Center)
- Korean language UI throughout
- Content data stored in hooks (e.g., `useIntroduceData`, `useInsuranceData`, `useHomeCareData`) rather than external files
- Responsive design with mobile-first approach
- Animation and transitions using Motion library
- Layout wrappers (e.g., `IntroduceContainer`, `ServiceContainer`) include Footer
- Use `break-keep` class for Korean text to prevent word breaks

### Page Data Hook Pattern

Page-specific data is managed through custom hooks following this pattern:

```typescript
// src/app/Service/HomeCarePage/hooks/useHomeCareData/useHomeCareData.ts
const useHomeCareData = (): HomeCareData => {
  return {
    introduction: { title: string, content: string },
    guideTable: { sections: GuideSection[] },
    serviceChargeTable: { title, columns, rows, footer },
    detailedServices: {
      serviceIntroduction: LabelValuePair[],
      cognitiveActivityService: LabelValuePair[],
      familyCareService: LabelValuePair[],
      additionalServices: LabelValuePair[]
    }
  };
};
```

**Data Structure Guidelines**:
- Use `\n` for single line breaks, `\n\n` for paragraph separation
- Format bullet lists as: `• Item 1\n• Item 2\n• Item 3`
- Type definitions in separate `.type.ts` files
- Data hooks return complete page data in a single object

## Deployment

### Vercel Configuration

The project includes `vercel.json` for SPA routing:
- All routes redirect to `/index.html` for client-side routing
- Required for React Router to handle all paths correctly
- Prevents 404 errors on direct navigation to nested routes
