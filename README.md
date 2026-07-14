# Manulife Agency Digital Platform

A unified, modern React Single Page Application (SPA) designed to replace the fragmented agency management dashboards. Powered by **Vite**, **React Router**, and **Tailwind CSS v4**, this application serves as an executive cockpit for managing districts, tracking agency performance, examining candidate recruitment pipelines, and interacting with a context-aware **AI Copilot**.

---

## ✨ Features

- **Personal Landing Page**: A customer-centric entry point highlighting plan tools, insurance advice, claims submission, and wellness programs.
- **SSO Login Interface**: Responsive and secure authentication gateway supporting Microsoft SSO and credentials.
- **Executive District Dashboard**: High-level visual KPIs, recruitment pipelines, branch lists, and target gauges for regional managers.
- **Agency Explorer**: Comprehensive list view of all regional agencies, searchable by code, manager, or performance status.
- **Agency Detail Drilldown**: Roster view of active advisors with status tagging and policy growth trends.
- **Performance Matrix**: Analytical comparisons of branches with risk flags and automatic recovery plan generators.
- **Recruitment Analytics**: Funnel conversion metrics and breakdown of applicant acquisition sources (LinkedIn, Referrals, Job Boards).
- **AI Copilot Drawer**: Context-aware sidebar companion available on portal views to answer questions and formulate strategies.

---

## 🛠️ Tech Stack & Optimization

- **React 19**: Clean functional components with reactive state.
- **Vite 8**: Blazing fast hot-module replacement (HMR) and production bundling.
- **React Router 7**: Declarative client-side routing.
- **Tailwind CSS v4 + PostCSS**: Uses the modern `@tailwindcss/postcss` plugin with consolidated custom design tokens defined inside `@theme` in `src/index.css`.
- **Material Symbols**: Integrated CDN icons for visual consistency.

---

## 📁 Key Folders

- `/src/components`: Global visual shells (`Sidebar.jsx`, `Topbar.jsx`, and `AICopilot.jsx`).
- `/src/pages`: Feature-specific dashboards.
- `/src/index.css`: Core design system configurations.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```
