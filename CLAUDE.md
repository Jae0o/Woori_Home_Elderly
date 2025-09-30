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

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite with SWC for fast refresh
- **Routing**: React Router 7 with file-based routing
- **Styling**: Tailwind CSS 4 with tailwind-merge for conditional classes
- **Maps**: Kakao Maps SDK for location services
- **Animation**: Motion library for animations

### Directory Structure

```
src/
├── app/                    # Application pages
│   ├── Introduce/          # Main landing page with company intro
│   ├── Service/            # Services page
│   ├── CostAndContact/     # Pricing and contact information
│   └── SponsorAndVolunteer/ # Sponsorship and volunteer page
├── lib/                    # Shared library code
│   ├── components/         # Reusable UI components
│   ├── constants/          # Application constants
│   │   ├── ROUTE_PATH/     # Route path definitions
│   │   └── COMPANY_INFO/   # Company information and contact details
│   ├── layout/             # Layout components
│   │   ├── Navbar/         # Navigation with banner and menus
│   │   ├── RootLayout/     # Root layout with Kakao Maps setup
│   │   └── Modal/          # Modal components
│   └── router/             # React Router configuration
```

### Path Aliases

- `@` → `src/`
- `@lib` → `src/lib/`
- `@app` → `src/app/`

### Key Architecture Patterns

**Routing Structure**: Uses React Router with nested routes under RootLayout. All pages are children of the root route ("/") with RootLayout as the wrapper.

**Component Organization**:

- Page components in `src/app/` directories
- Shared components in `src/lib/components/`
- Layout components in `src/lib/layout/`
- Each component directory includes index.ts for clean exports

**Constants Management**: Centralized in `src/lib/constants/` with separate directories for different constant types (ROUTE_PATH, COMPANY_INFO).

**Styling Approach**: Tailwind CSS with custom responsive breakpoints (`max-mobile`). Uses `tailwind-merge` for conditional class application.

**Map Integration**: Kakao Maps SDK integrated in RootLayout with API key from environment variables (VITE_KAKAO_MAP_API_KEY).

## Code Style

### Import Organization (Prettier Plugin)

Imports are automatically sorted in this order:

1. CSS files
2. React-related imports
3. @app imports
4. @lib imports
5. @ imports
6. Relative imports (../)
7. Relative imports (./)
8. Third-party modules

### Prettier Configuration

- Print width: 120 characters
- Tab width: 2 spaces
- Single attribute per line for JSX
- Trailing commas everywhere
- Double quotes for strings

### ESLint Setup

- TypeScript ESLint with recommended rules
- React Hooks plugin with latest recommended rules
- React Refresh plugin for Vite
- Prettier integration with error-level enforcement

## Environment Setup

**Required Environment Variables**:

- `VITE_KAKAO_MAP_API_KEY` - Kakao Maps API key for map functionality

**Key Dependencies**:

- `react-kakao-maps-sdk` - Kakao Maps integration
- `tailwind-merge` - Conditional Tailwind class merging
- `motion` - Animation library

## Development Notes

- The application is designed for 우리재가노인복지센터 (Woori Home Elderly Care Center)
- Company information (contact details, address, map coordinates) is centralized in COMPANY_INFO constants
- The site includes Kakao Maps integration for location display
- Layout uses a persistent navbar with the main content area as scrollable outlet
