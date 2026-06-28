# ParcelFlow System Architecture

## 1. Overview

ParcelFlow is designed as a scalable Multi-Tenant SaaS platform for logistics and courier management.

The system is divided into 4 main layers:

- Frontend (Web Dashboard)
- Backend (API Server)
- Database Layer
- External Services (SMS, Maps, Notifications, etc.)

Each layer is independent but communicates through well-defined APIs.

---

## 2. High-Level Architecture

```
[ Frontend (React) ]
          |
          v
[ API Gateway / Backend (Node.js) ]
          |
          v
[ Business Logic Layer ]
          |
          v
[ Database (PostgreSQL / MongoDB) ]
          |
          +--> External Services (SMS / WhatsApp / Maps / Email)
```

---

## 3. Frontend Architecture (React)

### Tech Stack
- React + TypeScript
- Vite
- TailwindCSS
- React Router
- Axios / Fetch
- Zustand or Redux Toolkit (state management)

### Structure

```
src/
│
├── app/              # App configuration
├── components/       # Reusable UI components
├── features/         # Feature-based modules
├── layouts/          # Page layouts
├── pages/            # Route pages
├── services/         # API calls
├── hooks/            # Custom hooks
├── utils/            # Helper functions
├── types/            # TypeScript types
├── store/            # Global state
└── locales/          # i18n (Arabic / English)
```

### Design Principle
Feature-Based Architecture:
Each feature (e.g. shipments) contains its own logic, UI, and API calls.

---

## 4. Backend Architecture (Node.js)

### Suggested Stack
- Node.js + Express (or NestJS later)
- TypeScript
- JWT Authentication
- Role-Based Access Control (RBAC)

### Structure

```
backend/
│
├── src/
│   ├── modules/
│   │     ├── auth/
│   │     ├── users/
│   │     ├── shipments/
│   │     ├── customers/
│   │     ├── couriers/
│   │     ├── branches/
│   │
│   ├── middlewares/
│   ├── services/
│   ├── utils/
│   ├── config/
│   ├── database/
│   └── app.ts
```

### Design Principle
Modular Architecture:
Each module is independent and contains:
- Controller
- Service
- Routes
- Model

---

## 5. Multi-Tenant System Design

ParcelFlow supports multiple companies in one system.

### Concept:

Each record in the database contains:

- tenant_id (company ID)

### Example:

```
Shipments Table:
- id
- tenant_id
- customer_id
- status
- price
```

### Benefit:
- Data isolation between companies
- One system serves multiple clients
- Easy SaaS scaling

---

## 6. Database Architecture

### Recommended DB:
- PostgreSQL (Primary)
- Redis (Caching & Sessions)

### Key Tables:

- tenants (companies)
- users
- shipments
- customers
- couriers
- branches
- payments
- notifications
- logs

---

## 7. API Architecture

### Style:
REST API (initially)

### Pattern:

```
/api/v1/auth
/api/v1/shipments
/api/v1/customers
/api/v1/couriers
```

### Response Format:

```json
{
  "success": true,
  "data": {},
  "message": "Operation successful"
}
```

---

## 8. Authentication Flow

1. User logs in
2. Backend generates JWT
3. Frontend stores token
4. Every request includes token
5. Backend validates token + tenant_id

---

## 9. State Management

- Global State: Authentication, User Info, Settings
- Local State: UI Components
- Server State: API data

Recommended:
Zustand (lightweight & scalable)

---

## 10. External Integrations

- SMS Gateway
- WhatsApp API
- Google Maps API
- Email Service
- Push Notifications

---

## 11. Key Design Principles

- Scalability first
- Modular architecture
- Separation of concerns
- Reusable components
- Secure by design
- Multi-tenant ready