# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev          # Start Vite dev server (auto-opens browser)
npm run build        # TypeScript check + Vite production build
npm run lint         # ESLint check
npm run lint:fix     # Auto-fix ESLint issues
npm run format       # Format with Prettier
npm run format:check # Check Prettier formatting
npm run preview      # Preview production build
```

## Project Architecture

### Tech Stack

- React 19 + TypeScript 5.8 + Vite 7 (SWC)
- React Router 7, Tailwind CSS 4 (`@theme` directive)
- Kakao Maps SDK, Motion library, tailwind-merge

### Path Aliases

- `@` → `src/`
- `@lib` → `src/lib/`
- `@app` → `src/app/`

### Directory Structure

```
src/
├── app/                    # Pages: {PageName}/{PageName}Page.tsx + components/
├── lib/
│   ├── components/         # Shared components (Breadcrumb, Card, etc.)
│   ├── constants/          # ROUTE_PATH, COMPANY_INFO, MENU_DATA
│   ├── hooks/              # Shared hooks (useModal, useScrollAnimation, etc.)
│   ├── layout/             # RootLayout, Navbar, Modal
│   ├── router/             # React Router configuration
│   ├── assets/             # Images
│   ├── font/               # Pretendard font
│   └── style/              # theme.css with design tokens
```

### Key Architecture Patterns

#### Component & Barrel Export Pattern

- **Page components**: `src/app/{PageName}/{PageName}Page.tsx`
- **Page-specific components**: `src/app/{PageName}/components/`
- **Shared components**: `src/lib/components/`
- **Every directory requires `index.ts`** for barrel exports:

```typescript
export { default as ComponentName } from "./ComponentName";
```

#### Hook Organization

- **Shared hooks** in `src/lib/hooks/`: `useModal`, `useScrollAnimation`, etc.
- **Page data hooks** in `{Page}/hooks/`: e.g., `useHomeCareData` returns all page content

#### Routing

Routes defined in `src/lib/router/route/route.tsx`:
- RootLayout wraps all pages at "/"
- Parent paths auto-redirect to first child (e.g., `/introduce` → `/introduce/greeting`)
- Uses `ROUTE_PATH` constants for type-safe paths

### Styling System

**Theme** (`src/lib/style/theme.css`):
- `@theme` directive for design tokens (colors, fonts, transitions, shadows)
- Breakpoints: `--breakpoint-mobile: 640px`, `--breakpoint-tablet: 1024px`
- Pretendard font as default

**Responsive Design**:
- Use `max-mobile:` prefix for mobile styles (< 640px)
- Use `tailwind-merge` for conditional class merging

### Environment Variables

- `VITE_KAKAO_MAP_API_KEY` - Required for Kakao Maps (initialized in RootLayout)

### Code Style

**Import Order** (auto-sorted by Prettier):
1. CSS files
2. `@app` imports
3. `@lib` imports
4. `@` imports
5. Relative parent (`../`)
6. Relative same-level (`./`)
7. Third-party modules

**Prettier**: 120 char width, 2 spaces, double quotes, trailing commas, `singleAttributePerLine`

**TypeScript**: Use `.type.ts` files for complex interfaces, `as const` for constants

## Shared Components

### Card
Variants: `default`, `gradient`, `outline`

### SimpleInfoTable
- **Variants**: `compact` (default, centered) or `detailed` (left-aligned, supports bullets)
- **Props**: `data`, `enableMobileCard`, `variant`, `tableMaxWidth`, `labelWidth`, `valueWidth`
- Use `\n` for line breaks, `• item` for bullets in detailed variant

### useScrollAnimation
```typescript
const { ref, variants, transition, isInView } = useScrollAnimation({
  type: 'fade', // 'slide', 'scale', 'stagger'
  threshold: 0.2
});
```

## Development Notes

- Korean language UI for 우리재가노인복지센터 (Woori Home Elderly Care Center)
- Content stored in page data hooks (e.g., `useHomeCareData`), not external files
- Use `break-keep` class for Korean text to prevent word breaks
- Layout wrappers (`IntroduceContainer`, `ServiceContainer`) include Footer

### Page Data Hook Pattern

```typescript
const useHomeCareData = (): HomeCareData => ({
  introduction: { title, content },
  guideTable: { sections: GuideSection[] },
  detailedServices: { ... }
});
```

Format: `\n` for line breaks, `\n\n` for paragraphs, `• item` for bullets

## Deployment

Vercel (`vercel.json`): All routes rewrite to `/index.html` for SPA routing
