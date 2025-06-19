# Shadcn Dashboard Template for Vibe Coders

A sleek, frontend dashboard template built with **ShadCN UI**, designed for conducting **Wizard of Oz-style customer discovery**. This template helps vibe coders simulate real user experiences while capturing insights seamlessly — without revealing the magic behind the curtain.

---

## 🛠 Tech Stack

| Tool             | Purpose                                |
|------------------|----------------------------------------|
| [ShadCN/UI]      | Accessible, unstyled component toolkit |
| [Tailwind CSS]   | Utility-first styling                  |
| [TanStack Router]| File-based routing (SPA ready)         |
| [TanStack Query] | Server state + data fetching           |
| [Dexie.js]       | Client-side persistence (IndexedDB)    |
| [MSW]            | Local API mocking for fast prototyping |

---

## 📦 Features

- 🎭 **Wizard UI**: Simulate interactions as if a backend is real (Wizard of Oz testing)
- 🧱 Component-first architecture with **shadcn/ui**
- 📂 Persistent client-side logs via **Dexie**
- 🔌 Data mocking via **MSW** for ultra-fast iteration
- 🧭 Type-safe routing with **TanStack Router**
- ⚡ Server-state management with **TanStack Query**
- 🎨 Theme-ready styling using **Tailwind**

---

## 🚀 Getting Started

```bash
# 1. Clone
git clone https://github.com/vibecoders/wizard-dashboard.git
cd wizard-dashboard

# 2. Install dependencies
pnpm install
# or
npm install

# 3. Run dev server
pnpm dev
# or
npm run dev
```

## 🗂 Project Structure
/src
├── components       # Reusable UI components (shadcn-based)
├── routes           # TanStack Router routes
├── mocks            # MSW handlers & browser setup
├── lib              # Shared utilities
├── lib/db           # Dexie database config
├── hooks            # Custom React hooks


## 🧪 Wizard of Oz Flows
The app is designed to simulate server responses, user journeys, and backend interactions.

- Update mock logic in src/mocks/handlers.ts
- Persist interaction logs with Dexie in src/db/
- Observe real-time feedback via the UI dashboard

