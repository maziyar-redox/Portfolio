# React + NestJS Monorepo Boilerplate

A production-ready monorepo starter with React 19, NestJS 11, and TypeScript. Built for scalability, developer experience, and modern best practices.

## 🎯 Using This Template

This repository is designed to be used as a GitHub template. When creating a new project from this template, you'll need to rename various parts to match your project. See [TEMPLATE-SETUP.md](TEMPLATE-SETUP.md) for detailed instructions on renaming everything properly.

**For AI Agents**: If you're an AI assistant helping set up a new project from this template, please refer to the "AI Agent Instructions" section in [CLAUDE.md](CLAUDE.md) for specific renaming guidelines.

## 🚀 Features

This repository contains a Turborepo setup using pnpm workspaces with:

### Applications

- **frontend-boilerplate** – React 19 app with:
  - ⚡ Vite for lightning-fast development
  - 🧭 Tanstack Router for type-safe, file-based routing
  - 🎨 Tailwind CSS v4 with automatic class sorting
  - 🎯 shadcn/ui component library (customizable)
  - 📚 Storybook for component development
  - 🧪 Vitest + React Testing Library (80% coverage requirement)
  - 🔧 ESLint + Prettier integration
  - 🔐 Authentication with JWT token management
  - 📡 Axios-based API client with interceptors
  - 🎣 React Query for server state management
  - 📱 Responsive design with mobile-first approach

- **backend-boilerplate** – NestJS 11 API with:
  - 🏗️ Modular architecture with feature-based modules
  - 🗄️ PostgreSQL + MikroORM with migrations
  - 🔐 JWT authentication with refresh tokens
  - ⚡ Redis caching with Keyv
  - 📖 Swagger/OpenAPI documentation
  - 🧪 Jest for testing (80% coverage requirement)
  - 🛡️ Rate limiting & security (Helmet, CORS)
  - 📊 OpenTelemetry integration for observability
  - 📝 Structured logging with Pino
  - 🔍 Health checks with Terminus
  - 🎯 Request validation with class-validator
  - 🏷️ Environment variables validation with Joi

### Shared Packages

- **types** – Shared TypeScript types between frontend and backend
- **shared-lib-boilerplate** – Template for creating shared libraries

## 🛠️ Tech Stack

- **Monorepo**: TurboRepo 2.5.3 + pnpm workspaces
- **Frontend**: React 19.1.0, Vite 7.0.0, TypeScript 5.8.3, Tanstack Router 1.122.0, Tailwind CSS v4.1.11
- **Backend**: NestJS 11.1.2, TypeScript 5.8.3, MikroORM 6.4.15, PostgreSQL 17, Redis 7
- **Testing**: Vitest 3.2.4, Jest 29.7.0, React Testing Library 16.3.0, Storybook 9.0.14
- **Code Quality**: ESLint 9.27.0, Prettier 3.5.3, Husky 9.1.7, lint-staged 16.1.0

## 🏛️ Architecture Highlights

- **Type Safety**: End-to-end type safety with shared types package
- **Authentication**: Complete auth flow with JWT tokens, refresh tokens, and protected routes
- **API Client**: Centralized API client with automatic token refresh and error handling
- **Testing**: Comprehensive testing setup with coverage requirements
- **Developer Experience**: Hot reload, automatic formatting, pre-commit hooks
- **Production Ready**: Environment validation, logging, monitoring, error handling
- **Scalable**: Modular architecture, code splitting, lazy loading

## 📋 Requirements

- Node.js v22 LTS or higher
- pnpm v10.5.2 (specified via packageManager in package.json)
- PostgreSQL 17 (for backend) - or use Docker Compose
- Redis 7 (for backend caching) - or use Docker Compose

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/your-repo/react-nestjs-monorepo-boilerplate.git
cd react-nestjs-monorepo-boilerplate

# Install dependencies
pnpm install

# Option 1: Use Docker for databases (recommended)
docker-compose -f docker-compose.local.yml up -d

# Option 2: Use your own PostgreSQL and Redis instances
# Set up environment variables for backend
cp apps/backend-boilerplate/.env.example apps/backend-boilerplate/.env
# Edit .env with your database credentials

# Run database migrations
cd apps/backend-boilerplate && pnpm migration:run && cd ../..

# Run development servers
pnpm dev
```

The apps will be available at:

- Frontend: http://localhost:5173
- Backend: http://localhost:3001
- Backend Swagger: http://localhost:3001/api

## 📝 Scripts

### Monorepo-wide commands:

- `pnpm dev` – Run all apps in development mode
- `pnpm build` – Build all apps for production
- `pnpm test` – Run tests in all apps
- `pnpm lint` – Run ESLint across all apps
- `pnpm format` – Format code with Prettier
- `pnpm type-check` – TypeScript type checking
- `pnpm build-type` – Build shared types package
- `pnpm build-libs` – Build all shared libraries

### Frontend-specific (in apps/frontend-boilerplate/):

- `pnpm dev` – Start React dev server
- `pnpm build` – Build for production
- `pnpm test` – Run Vitest tests
- `pnpm test:coverage` – Run tests with coverage
- `pnpm storybook` – Start Storybook
- `pnpm lint` – Run ESLint
- `pnpm format` – Format code with Prettier

### Backend-specific (in apps/backend-boilerplate/):

- `pnpm dev` – Start NestJS with hot reload
- `pnpm test` – Run unit tests
- `pnpm test:e2e` – Run e2e tests
- `pnpm test:coverage` – Run tests with coverage

## 📁 Project Structure

```
├── apps/
│   ├── frontend-boilerplate/     # React 19 + Vite app
│   │   ├── src/
│   │   │   ├── apiClient/        # API client setup
│   │   │   ├── components/       # UI components
│   │   │   │   ├── layout/       # Layout components
│   │   │   │   ├── pages/        # Page components
│   │   │   │   └── ui/           # Reusable UI components
│   │   │   ├── contexts/         # React contexts
│   │   │   ├── hooks/            # Custom React hooks
│   │   │   ├── routes/           # Tanstack Router pages
│   │   │   ├── lib/              # Utilities
│   │   │   └── test/             # Test setup
│   │   └── .storybook/           # Storybook configuration
│   └── backend-boilerplate/      # NestJS 11 API
│       ├── src/
│       │   ├── modules/          # Feature modules
│       │   │   ├── auth/         # Authentication module
│       │   │   ├── users/        # Users module
│       │   │   └── health/       # Health checks
│       │   ├── entities/         # Database entities
│       │   ├── configs/          # Configuration
│       │   ├── shared/           # Shared utilities
│       │   └── migrations/       # Database migrations
│       └── test/                 # E2E tests
├── packages/
│   ├── types/                    # Shared TypeScript types
│   └── shared-lib-boilerplate/   # Template for shared libraries
├── docs/                         # Documentation
├── CLAUDE.md                     # AI assistant guidelines
├── AI-CONTEXT.md                 # Technical context
├── TEMPLATE-SETUP.md             # Template usage guide
└── turbo.json                    # TurboRepo configuration
```

## 🎨 Key Patterns & Conventions

### Naming Conventions

- **Entities**: Must have "Entity" suffix (e.g., `UserEntity`)
- **DTOs**: Shared as TypeScript interfaces in `packages/types`
- **Database**: PostgreSQL uses snake_case, TypeScript uses camelCase
- **Components**: PascalCase for components, camelCase for utilities

### Code Organization

- **Frontend**: Feature-based with separation of concerns (components, hooks, contexts)
- **Backend**: Module-based architecture following NestJS best practices
- **Shared Types**: Centralized in `packages/types` for consistency

### Testing Requirements

- Minimum 80% code coverage for all new code
- Every component must have tests and Storybook stories
- Backend services must have comprehensive unit tests

## 🔧 Development Guidelines

### Frontend Component Development

Every new component MUST have:

1. **Component file** - The React component
2. **Test file** - Unit tests using Vitest and React Testing Library
3. **Story file** - Storybook stories for all component states

Example structure:

```
src/components/ui/
├── Button.tsx
├── Button.stories.tsx
└── __tests__/
    └── Button.test.tsx
```

### Backend Service Development

Every new service/controller MUST have:

1. **Service/Controller** - Business logic with proper decorators
2. **DTOs** - Data Transfer Objects with validation
3. **Tests** - Unit tests with minimum 80% coverage
4. **Swagger docs** - API documentation decorators

## 🔒 Pre-commit Hooks

This project uses Husky and lint-staged to ensure code quality. On every commit:

- ESLint checks are run on affected files
- TypeScript type checking is performed
- Prettier formats all staged files

See [docs/HUSKY_LINT_STAGED.md](docs/HUSKY_LINT_STAGED.md) for details.

## 🚢 CI/CD Pipeline

The project includes a comprehensive GitHub Actions workflow that runs on every push and PR:

- **Build & Type Check**: Ensures all packages build successfully
- **Linting & Formatting**: Enforces code style consistency
- **Testing**: Runs all tests with coverage requirements
- **Services**: Spins up PostgreSQL and Redis for integration tests
- **Caching**: Optimized with pnpm and Turbo caching

## 🐳 Docker Development

For local development, use the included Docker Compose setup:

```bash
# Start PostgreSQL (with pgvector) and Redis
docker-compose -f docker-compose.local.yml up -d

# Stop services
docker-compose -f docker-compose.local.yml down

# Stop and remove volumes (fresh start)
docker-compose -f docker-compose.local.yml down -v
```

Services:

- PostgreSQL 17 with pgvector extension (port 5432)
- Redis 7 (port 6379)

## 📚 Storybook

The frontend includes a comprehensive Storybook setup:

```bash
# Run Storybook (from frontend directory or root)
pnpm storybook

# Build Storybook
pnpm build-storybook
```

Features:

- Component documentation and playground
- Accessibility testing with a11y addon
- Interaction testing with play functions
- Mock router for Tanstack Router components
- Global decorators for providers (Auth, Query Client)

## ⚡ Turbo Monorepo

This project uses TurboRepo for efficient monorepo management:

- **Parallel Execution**: Tasks run in parallel when possible
- **Smart Caching**: Only rebuilds what changed
- **Pipeline Optimization**: Dependency-aware task scheduling

Key pipelines in `turbo.json`:

- `build`: Builds all packages in dependency order
- `test`: Runs tests with caching
- `lint/format`: Code quality checks
- `type-check`: TypeScript validation

## 📚 Documentation

- [CLAUDE.md](CLAUDE.md) - AI assistant guidelines and template instructions
- [TEMPLATE-SETUP.md](TEMPLATE-SETUP.md) - Guide for using this as a template
- [AI-CONTEXT.md](AI-CONTEXT.md) - Technical context for AI tools
- [Frontend README](apps/frontend-boilerplate/README.md) - Frontend-specific docs
- [Backend README](apps/backend-boilerplate/README.md) - Backend-specific docs
- [Husky & Lint-staged](docs/HUSKY_LINT_STAGED.md) - Pre-commit hooks setup

## 🤝 Contributing

1. Create a feature branch
2. Make your changes following the guidelines
3. Ensure all tests pass (`pnpm test:coverage`)
4. Run formatting (`pnpm format`)
5. Create a pull request

## 📄 License

MIT
