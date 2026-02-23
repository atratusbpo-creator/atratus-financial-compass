---
name: Architecture & Data
description: Standards for robust financial data management and system architecture.
---

# Architecture & Data Skill

Ensures the integrity and scalability of the Atratus data layer.

## 📁 File Structure
- `src/components`: UI components.
- `src/hooks`: Custom hooks for logic reuse.
- `src/lib`: Third-party configurations (utils, axios, query client).
- `src/pages`: Application views.
- `src/types`: Global TypeScript definitions.

## 🔒 Data Validation
1. **Zod**: Use for all form and API response validation.
2. **React Hook Form**: Standard for all input handling.
3. **Sanitization**: No direct HTML injection. All currency data must be formatted via `Intl.NumberFormat('pt-BR', { style: 'currency' })`.

## 📡 API Layer
- Use **TanStack Query** for all data fetching.
- Implement robust error handling with **Sonner** toasts for user feedback.
- Cache management: Data should be invalidated only when necessary.
