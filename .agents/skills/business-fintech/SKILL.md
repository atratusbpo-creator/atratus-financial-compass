---
name: Business Fintech
description: Domain-specific logic for Financial BPO and Business Intelligence.
---

# Business Fintech Skill

Deeply integrated logic for the Atratus BPO and Financial Intelligence domain.

## 💰 Core Business Domains
1. **BPO Administrativo**: Automation of accounts payable/receivable and operational routines.
2. **Intermediação Financeira**: Safe payment processing and fee optimization.
3. **Controladoria Estratégica**: High-level reporting, break-even analysis, and profitability indicators.

## 📊 Business Logic Rules
- **Consistency**: All financial calculations must happen in the backend or centralized utility functions (no ad-hoc math in components).
- **Security**: Customer data must be masked where applicable.
- **User Personas**:
   - **Empresário**: Focus on high-level profitability and cash flow.
   - **Gestor Financeiro**: Focus on operational efficiency and daily balances.

## 📝 Reporting Standards
- Always provide a "Summary" view before drilling into details.
- Use color coding (Green/Positive, Red/Needs Attention) based on performance targets, not just absolute values.
