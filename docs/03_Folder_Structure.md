# ParcelFlow Folder Structure

## Frontend Structure Mapping

This document maps the system architecture into actual project folders.

---

## 1. Root Frontend Structure

```
frontend/
│
├── src/
├── public/
├── index.html
├── vite.config.ts
├── package.json
```

---

## 2. src/ Structure (Core Application)

```
src/
│
├── app/
│   ├── providers/        # App providers (Theme, i18n, etc.)
│   ├── router/           # App routing
│   ├── store/            # Global store setup
│   └── config/           # App configuration
│
├── components/
│   ├── ui/               # Generic UI components (buttons, inputs)
│   ├── layout/           # Layout components (navbar, sidebar)
│   └── common/           # Shared components
│
├── features/
│   ├── auth/
│   ├── shipments/
│   ├── customers/
│   ├── couriers/
│   ├── branches/
│   ├── tracking/
│   └── settings/
│
├── pages/
│   ├── LoginPage.tsx
│   ├── DashboardPage.tsx
│   └── NotFoundPage.tsx
│
├── services/
│   ├── api/
│   ├── auth.service.ts
│   └── shipment.service.ts
│
├── hooks/
│
├── utils/
│
├── types/
│
├── styles/
│   ├── globals.css
│   └── themes/
│
├── locales/
│   ├── en/
│   └── ar/
│
└── assets/
    ├── images/
    ├── icons/
    └── fonts/
```

---

## 3. Folder Responsibility Rules

### components/
Reusable UI only — no business logic.

### features/
Each feature contains:
- UI
- logic
- API calls
- state (if needed)

### services/
All API communication.

### app/
Core system configuration.

### utils/
Pure helper functions only.

---

## 4. Feature-Based Architecture Rule

Each feature must be independent.

Example:

```
features/shipments/
│
├── components/
├── hooks/
├── services/
├── types/
└── index.ts
```

---

## 5. Why This Structure?

- Scalable for large teams
- Easy maintenance
- Feature isolation
- Easy debugging
- Supports SaaS growth