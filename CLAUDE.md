# CLAUDE.md

Guidance for Claude (Claude Code / Claude in this repo) when working on the **Manulife Agency Digital Platform** prototype.

## Project summary

An AI-powered internal workspace for Manulife's agency workforce (advisors, agency leaders, district leaders, compliance/QA). It replaces fragmented spreadsheets/emails/manual tracking with one platform covering the advisor lifecycle: **Recruit → Activate → Prospect → Sell → Service**.

This is **not** a customer-facing insurance site. It's an internal CRM-style tool, positioned like Salesforce / Microsoft Dynamics 365 / HubSpot / Microsoft Copilot, but skinned in Manulife's brand.

Deliverable for this phase: a **single-file, clickable HTML prototype** with mock data only — no backend, no real API calls, no auth. Every "AI" action is a simulated response (timeout + canned output). This is a demo artifact for an executive walkthrough, not a production build.

Source documents (in `/docs` or wherever they've been placed in this repo):
- `Manulife_Agency_Digital.md` — MVP product design spec (roles, modules, nav, scope)
- `Manulife_Agency_Prototype_Brief.docx` — KPMG reverse-engineering brief: data model, user journeys, EOD build plan
- `Manulife_Agency_Digital_Capability_Framework.xlsx` — the 6 source AI use cases this whole platform is reverse-engineered from
- `Manulife_Agency_Digital_Stitch_Prompts.md` — Google Stitch prompts used for visual design reference

Read these before making structural changes — they're the spec of record. If a request conflicts with them, flag the conflict rather than silently picking one.

## The six source use cases (why every module exists)

| # | Journey | Use case | Primary users |
|---|---|---|---|
| 1 | Recruit | Recruitment pipeline lead gen + recruiter performance intelligence | Recruiters, agency leaders, district leaders |
| 2 | Activate/Sell/Service | Next-best-action, task prioritisation, gamified engagement | Agents, agency managers, district leaders |
| 3 | Prospect+Sell | Compliant client communications & social content drafting | Agents, agency leaders, marketing, compliance/QA |
| 4 | Sell | **Customer 720** — unified customer data foundation | Agents, RMs, agency leaders |
| 5 | Sell | AI-assisted fact finding, conversation guidance, meeting summarisation | Agents, sales coaches, compliance |
| 6 | Sell | Proposal intelligence & product comparison | Agents, RMs, sales support |

**Key insight from the brief: Customer 720 (UC4) is the foundation, not a feature.** Build/wire it first — every other module reads from it. "Sell" repeating across UC4/5/6 is intentional: they share one data spine.

## Data model (mock data must respect this shape)

Primary keys: `Customer_ID`, `Agent_ID`. Every transaction table carries both as foreign keys; `Policy` and `ProposalLine` also carry `Product_ID`.

```
Agency (District > Branch)
 ├─ Agent
 │   ├─ Task
 │   ├─ GamificationEvent
 │   ├─ Candidate
 │   └─ Communication
 ├─ Customer  <== the spine
 │   ├─ Policy (→ Product)
 │   ├─ FamilyMember
 │   ├─ Claim
 │   ├─ ServiceRequest
 │   ├─ Meeting → Summary + FollowUpTask
 │   ├─ Proposal → ProposalLine
 │   └─ Lead / Opportunity
 ├─ Product (master)
 └─ ComplianceRule (master)
```

Master data: Agent, Candidate, Customer, Product, Agency/District, ComplianceRule.
Transaction data: Lead, Task, Proposal, Meeting, Communication, Policy, Claim, ServiceRequest, GamificationEvent.

Use realistic **Canadian life-insurance** mock data: Term Life, Whole Life, Critical Illness, RRSP/segregated fund products, premiums in CAD, plausible Canadian names/cities.

## Roles and what each one sees

| Role | Focus | Accessible modules |
|---|---|---|
| **Advisor** | Sell, service, meet customers | Dashboard, My Day, Customer 720, Meetings, Proposal Intelligence, Content Studio, Service Requests, Rewards, Notifications, AI Copilot |
| **Agency Leader** | Manage one agency + recruit | Executive Dashboard, Recruitment Pipeline, Advisor Performance, Team Leaderboard, Customer Insights, AI Copilot, Notifications |
| **District Leader** | Manage multiple agencies, no direct customer contact | Executive Dashboard, Agency Comparison, District Analytics, Recruitment Analytics, Reports, AI Copilot |
| **Compliance (QA + Marketing)** | Approve/audit communications | Compliance Dashboard, Approval Queue, Content Studio, Communication Templates, Audit Reports, AI Copilot |

Login should support switching role (mock auth only — no real credential check needed for the prototype).

## Core modules (build order matters)

1. **Customer 720** — build first. Profile, Policies, Family Members, Claims, Service Requests, Meeting History, Communication History, Opportunities, Timeline.
2. **Dashboard** (role-personalized) — KPIs, AI Insights, Notifications, Next Best Actions, Recent Activities.
3. **My Day** — Daily Tasks, AI Priorities, Calendar, Follow-ups, Reminders.
4. **Meetings** — Meeting Prep, AI Conversation Guidance, Meeting Notes, AI Summary, Follow-up Tasks.
5. **Proposal Intelligence** — Needs Analysis, Product Comparison, AI Recommendations, Proposal Generation, Proposal History.
6. **Recruitment Pipeline** — Candidate List/Details, AI Fit Score, Interview Status, Recruitment Funnel, Training Assignment, Candidate Timeline.
7. **Content Studio** — Email/WhatsApp/Social Generators, Compliance Validation, Approval Workflow.
8. **Service Requests, Analytics, Notifications, AI Copilot** — supporting modules, AI Copilot is a global right-hand drawer available everywhere and should read the currently open module for context.

MVP scope stops here. **Do not build** (future phase, explicitly out of scope unless asked): real AI/LLM integration, voice meeting assistant, predictive analytics, workflow automation engine, omnichannel messaging, live CRM integration, Teams integration, Power BI dashboards.

## Design system — do not deviate without asking

Brand reference: manulife.com (personal site) — clean, airy, corporate-trustworthy, generous whitespace, editorial photography, rounded cards.

**Colors**
- Primary green: `#00A758`
- Deep green (headers/sidebar): `#04331F`
- Amber (gamification only — points, streaks, badges): `#E39A2B`
- Canvas: `#F4F7F5`, elevated cards: `#FFFFFF`
- Hairline borders: light gray, 1px

**Type**: Plus Jakarta Sans (or closest available), 400 body / 600–800 headings and KPI numbers.

**Layout, every screen:**
- Persistent left sidebar, deep green background, grouped nav (Overview / Advisor Journey), active item gets a bright green accent bar/pill.
- Sticky white top bar: page title/breadcrumb, global search, notification bell w/ badge, avatar + name + role tag, "Ask AI Copilot" button.
- Global right-side AI Copilot drawer (collapsible), sparkle icon, chat bubbles (AI bubbles light-green tinted), quick-suggestion chips, bottom input bar with green send button.
- Cards: 10–14px radius, soft shadow. KPI cards: bold number, label, small green/red trend arrow. Status chips/badges for states (Pending/Approved/Hot Lead/etc). "AI Insight" callouts: light-green tinted background + small AI icon.
- Icons: thin-line, consistent stroke (Lucide/Feather style).
- Desktop-first; sidebar collapses to bottom nav on mobile.

## Build constraints (EOD prototype rules — keep these even outside the original 1-day sprint)

- **Mock data only, no backend.** Every AI action is a simulated response on a timer/delay — never call a real API from the demo.
- **Single HTML file preferred for the clickable demo** (or a single-page app if working in this repo's actual stack — check for an existing framework before assuming vanilla HTML). If splitting into components, keep a clear `VIEWS.<screen>` -style separation so screens stay self-contained and mergeable.
- Lock shared foundation before building screens: color tokens, shared component helpers (kpi card, table, badge, card), the mock dataset, and nav config — build these first, screens second.
- Login should work and switch role; all 8 core screens must be reachable from the sidebar for whichever role is active.
- No console errors. Works at desktop width and at mobile width. Works on a projector (contrast matters).

## Definition of done for any screen/feature

- Renders with realistic mock data, no placeholder Lorem Ipsum.
- Matches the design system above (colors, type, card style, sidebar/top bar/Copilot drawer present).
- Key interaction actually fires something (even if simulated): NBA action click, task complete, content generate, meeting summarize, proposal generate, Copilot chat reply.
- Consistent with role permissions — don't show a module to a role that shouldn't have it (see table above).
- Reachable from the sidebar nav.

## What to ask before assuming

- Whether the target stack is plain HTML/CSS/JS (as the original EOD prototype was) or a framework (React/Next/etc.) already present in the repo — check the repo first, ask only if genuinely ambiguous.
- Whether new "AI" features should be wired to a real LLM call (this repo's default assumption is **no**, mock/simulated only, per the brief) — confirm before adding real API integration.
- Whether a requested new module fits an existing use case (1–6 above) or is genuinely new scope — if new scope, flag it rather than silently expanding MVP.