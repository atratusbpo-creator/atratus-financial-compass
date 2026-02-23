---
name: Core Fullstack
description: Standards for maintaining the react-vite-ts-tailwind environment.
---

# Core Fullstack Skill

This skill defines the development standards for the **Atratus Financial Compass** core environment.

## 🏗 Technology Stack
- **Framework**: React 18+ with TypeScript.
- **Build Tool**: Vite.
- **Styling**: Tailwind CSS with custom theme (Gold/Dark Blue).
- **Components**: Shadcn UI / Radix UI.
- **State Management**: React Query (TanStack Query) for server state.
- **Routing**: React Router DOM.

## 🛠 Best Practices
1. **Component Driven Development**: All components must be stored in `src/components` and be highly reusable.
2. **Type Safety**: Strictly use TypeScript interfaces for all props and data structures. Avoid `any`.
3. **Performance**: Use `React.memo` and `useCallback` only when necessary for heavy computations.
4. **Environment**: Use `.env` for all external keys and configuration (never hardcode).
5. **Vite Config**: Port `8080` is preferred for consistency with the current environment.

## 🚀 Deployment & Scripts
- `npm run dev`: Start development server.
- `npm run build`: Production build.
- `npm run lint`: ESLint check.
- `npm run test`: Run vitest suites.
