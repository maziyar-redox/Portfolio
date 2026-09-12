# AI-CONTEXT.md

This document provides technical context about the monorepo architecture and implementation details for AI assistants.

## Repository Overview

This is a production-ready monorepo boilerplate combining React 19 for frontend and NestJS 11 for backend, with shared TypeScript types and libraries.

## Architecture Details

### Frontend (React + Vite)

Located in `apps/frontend-boilerplate/`

**Technology Stack:**

- React 19.1.0 with Vite 7.0.0 for fast HMR and builds
- Tanstack Router 1.122.0 for file-based routing with type safety
- Tailwind CSS v4.1.11 with automatic class sorting via Prettier plugin
- shadcn/ui component library (customizable UI components)
- React Query 5.81.5 for server state management
- Axios 1.10.0 for API calls with interceptors
- React Hook Form 7.59.0 with Zod 3.25.67 validation
- Vitest 3.2.4 for unit testing
- Storybook 9.0.14 for component development
- @storybook/test for interaction testing

**Key Patterns:**

- File-based routing in `src/routes/` with automatic route generation
- Component structure: `components/ui/`, `components/layout/`, `components/pages/`
- Every component requires tests and Storybook stories
- Path alias `@/` maps to `src/`
- Strict TypeScript configuration
- API client with automatic token refresh in `src/apiClient/`
- AuthContext for managing authentication state
- Protected routes using ProtectedRoute component
- Custom hooks in `src/hooks/`

**Testing Strategy:**

- Unit tests with Vitest and React Testing Library
- Coverage thresholds: 75% statements/lines, 80% branches/functions
- Test files in `__tests__/` directories
- Storybook stories for visual testing and interaction testing
- Mock files in `src/__mocks__/` for external dependencies
- Global test setup in `src/test/setup.ts`
- Coverage excludes: .storybook/**, \*.stories.tsx, pages/**, routes/\*\*, main.tsx, App.tsx, router.tsx, routeTree.gen.ts

### Backend (NestJS)

Located in `apps/backend-boilerplate/`

**Technology Stack:**

- NestJS 11.1.2 with modular architecture
- MikroORM 6.4.15 with PostgreSQL 17 (snake_case columns)
- Redis 7 for caching (via @keyv/redis 4.4.0)
- JWT authentication with refresh tokens (@nestjs/jwt 11.0.0)
- Swagger/OpenAPI documentation with API tags (@nestjs/swagger 11.2.0)
- Pino logger for structured logging (nestjs-pino 4.4.0)
- OpenTelemetry for observability (traces, metrics, logs) with nestjs-otel 6.2.0
- Health checks with Terminus module (@nestjs/terminus 11.0.0)
- Rate limiting with @nestjs/throttler 6.4.0

**Key Patterns:**

- Modular structure in `src/modules/`
- All entities extend BaseEntity with soft delete
- DTOs for all requests/responses
- Repository pattern with MikroORM
- Global exception filters and interceptors
- Structured logging with Pino (no console.log usage)
- OpenTelemetry instrumentation with @Span decorators
- Metrics collection with @OtelInstanceCounter and @OtelMethodCounter
- Automatic tracing for all HTTP requests and database queries

**Security Features:**

- JWT-based authentication with access and refresh tokens
- Rate limiting (configurable via THROTTLE_TTL and THROTTLE_LIMIT)
- CORS configuration
- Helmet for security headers
- Request validation with class-validator
- Environment validation with Joi schema
- Bcrypt for password hashing
- Guards for route protection

### Shared Packages

**types** (`packages/types/`)

- Shared TypeScript interfaces
- DTOs used by both frontend and backend
- Build with `pnpm build-type`

**shared-lib-boilerplate** (`packages/shared-lib-boilerplate/`)

- Template for creating shared libraries
- Includes testing setup and build configuration

## Data Flow

1. **Type Definitions**: Defined in `packages/types`
2. **Backend Implementation**: NestJS DTOs implement shared interfaces with validation
3. **Frontend Consumption**: React components use shared types for API calls
4. **Validation**: Backend validates with class-validator, frontend with Zod

## Build System

- **TurboRepo**: Manages build orchestration and caching
- **pnpm Workspaces**: Handles monorepo dependencies
- **Build Order**: types → shared libs → apps

## Development Workflow

1. **Type-First Development**: Define interfaces in shared types
2. **Backend Implementation**: Create entities, services, controllers
3. **Frontend Implementation**: Create components with tests and stories
4. **Testing**: Ensure coverage requirements are met
5. **Code Quality**: Run lint, format, and type checks

## Common Tasks

### Adding a New Feature

1. Define types in `packages/types`
2. Build types: `pnpm build-type`
3. Implement backend module with tests
4. Implement frontend components with tests and stories
5. Update documentation

### Creating a Shared Library

1. Copy `shared-lib-boilerplate`
2. Define types in `packages/types/src/shared-libs/`
3. Implement library with tests
4. Build: `pnpm build-libs`

## Environment Configuration

### Backend

- Database: PostgreSQL connection via env vars (DATABASE_NAME, POSTGRES_HOST, POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASSWORD)
- Redis: Connection for caching (REDIS_HOST, REDIS_PORT)
- JWT: Secret and expiration settings (JWT_SECRET, JWT_EXPIRES_IN)
- Rate limiting: Configurable limits (THROTTLE_TTL, THROTTLE_LIMIT)
- OpenTelemetry: OTEL_EXPORTER_OTLP_ENDPOINT, OTEL_SERVICE_NAME, OTEL_TRACES_ENABLED, OTEL_METRICS_ENABLED, OTEL_LOGS_ENABLED

### Frontend

- No required env vars for development
- API endpoint configuration for production
- Runs on port 5173 by default

## Testing Philosophy

- **Unit Tests**: Required for all functions/components
- **Integration Tests**: For API endpoints
- **Visual Tests**: Via Storybook
- **Coverage**: Minimum 80% for backend, 75%/80% for frontend (statements/branches)

## Code Standards

- **TypeScript**: Strict mode enabled
- **Linting**: ESLint with React/NestJS rules
- **Formatting**: Prettier with Tailwind plugin
- **Git Hooks**: Pre-commit checks via Husky

## Performance Considerations

- **Frontend**: Code splitting via Vite, lazy loading routes
- **Backend**: Redis caching, database indexing
- **Monorepo**: TurboRepo caching for faster builds

## Security Best Practices

- JWT tokens with refresh mechanism and secure storage
- Input validation at all layers (Zod on frontend, class-validator on backend)
- SQL injection prevention via ORM parameterized queries
- XSS prevention in React (automatic escaping)
- Rate limiting on API endpoints (skips health checks)
- HTTPS enforcement in production
- Secure password hashing with bcrypt
- CORS properly configured

## Current Implementation Status

### Completed Features

1. **Authentication System**
   - Sign up, sign in, sign out flows
   - JWT token management with refresh
   - Protected routes on frontend
   - Auth guards on backend

2. **API Client**
   - Centralized Axios instance
   - Automatic token injection
   - Token refresh on 401
   - Error handling with ApiError class

3. **Component Library**
   - shadcn/ui components integrated
   - All components have tests and stories
   - Form components with validation
   - Responsive design

4. **Testing Infrastructure**
   - Frontend: Vitest + React Testing Library
   - Backend: Jest with coverage
   - Storybook for component development
   - Mocks for router and external dependencies

5. **Developer Experience**
   - Hot reload on both frontend and backend
   - Pre-commit hooks with Husky
   - Automatic formatting with Prettier
   - Type safety across the stack

6. **Observability & Monitoring**
   - Structured logging with Pino logger
   - OpenTelemetry integration for distributed tracing
   - Automatic instrumentation for HTTP requests and database queries
   - Metrics collection with instance and method counters
   - Configurable trace, metric, and log export to OTLP collectors

7. **Recent Architectural Improvements**
   - Upgraded to PostgreSQL 17 with pgvector extension
   - Enhanced frontend structure with dedicated folders for layouts, pages, and UI components
   - Integrated Storybook 9 for component development and documentation
   - Implemented comprehensive authentication system with JWT tokens
   - Added centralized API client with automatic token management
   - Integrated OpenTelemetry and structured logging for production observability

### Database Schema

- BaseEntity with soft deletes (deleted_at)
- UserEntity with email, password, names
- Automatic timestamps (created_at, updated_at)
- UUID primary keys

### API Endpoints

- POST /auth/signup - User registration
- POST /auth/signin - User login
- POST /auth/signout - User logout
- POST /auth/refresh - Token refresh
- GET /auth/me - Get current user
- GET /health - Health check endpoint
