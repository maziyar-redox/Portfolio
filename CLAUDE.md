# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🤖 AI Agent Instructions for Template Usage

**IMPORTANT**: If you are setting up a new project from this template, you MUST rename all occurrences of "boilerplate" throughout the codebase. Follow these steps:

### 1. Rename All Boilerplate References

Replace all instances of "boilerplate" with the new project name:

1. **App Names**:
   - `frontend-boilerplate` → `frontend-[newname]`
   - `backend-boilerplate` → `backend-[newname]`
   - `shared-lib-boilerplate` → `shared-lib-[newname]`

2. **Package.json Names**: Update the "name" field in all package.json files

3. **Import Paths**: Update all import statements that reference workspace packages

4. **Configuration Files**: Update references in:
   - `turbo.json`
   - `pnpm-workspace.yaml`
   - `.env` files and `.env.example`
   - GitHub Actions workflows
   - Docker files (if any)

5. **Documentation**: Update all markdown files

6. **API Spec**: Rename `backend-boilerplate-api-spec.yaml`

7. **Service Names**: Update OpenTelemetry service names and any other service identifiers

### 2. Use These Commands for Renaming

```bash
# Find all occurrences (run from project root)
grep -r "boilerplate" . --exclude-dir=node_modules --exclude-dir=.git

# After manual renaming, rebuild everything
pnpm install
pnpm build-type
pnpm build-libs
pnpm build
```

### 3. Verify the Renaming

1. Ensure all tests pass: `pnpm test`
2. Ensure linting passes: `pnpm lint`
3. Ensure type checking passes: `pnpm type-check`
4. Start dev servers: `pnpm dev`

## IMPORTANT: Package Management

**ALWAYS use pnpm for ALL package management operations. NEVER use npm, yarn, or any other package manager.**

Examples:

- Installing dependencies: `pnpm install` or `pnpm add <package>`
- Running scripts: `pnpm run <script>` or `pnpm <script>`
- Installing dev dependencies: `pnpm add -D <package>`
- Installing to workspace: `pnpm add <package> --filter=<workspace>`

## Project Overview

This is a TypeScript monorepo using TurboRepo and pnpm workspaces, containing:

- **frontend-boilerplate**: React 19 app with Tanstack Router, Tailwind CSS, and shadcn/ui
- **backend-boilerplate**: NestJS 11 API with MikroORM, PostgreSQL, and Redis
- **packages/types**: Shared TypeScript types between frontend and backend

## Essential Commands

### Development

```bash
pnpm dev          # Run all apps in development mode
pnpm build        # Build all apps
pnpm test         # Run all tests
pnpm lint         # Run ESLint across all apps
pnpm format       # Format code with Prettier
pnpm type-check   # TypeScript type checking
```

### Backend-specific (in apps/backend-boilerplate/)

```bash
pnpm dev          # Start NestJS with hot reload (port 3001)
pnpm test         # Run unit tests
pnpm test:e2e     # Run e2e tests
pnpm test:watch   # Run tests in watch mode
```

### Frontend-specific (in apps/frontend-boilerplate/)

```bash
pnpm dev          # Start React dev server (port 5173)
pnpm build        # Build for production
pnpm test         # Run Vitest tests once
pnpm test:coverage # Run tests with coverage report
pnpm storybook    # Start Storybook (port 6006)
pnpm format       # Format code with Prettier
pnpm lint         # Run ESLint
pnpm type-check   # TypeScript type checking
```

## Architecture & Key Patterns

### Backend Architecture

- **Framework**: NestJS with modular structure
- **Database**: PostgreSQL with MikroORM, migrations in `src/migrations/`
- **Auth**: JWT authentication with @nestjs/jwt and bcrypt password hashing
- **Environment**: Validated with Joi schema in `src/configs/env-schema.ts`
- **Base Entity**: All entities extend `BaseEntity` with soft delete support
- **API Documentation**: Swagger available when running
- **Health Checks**: Terminus module at `/health` endpoint (skips rate limiting)
- **Caching**: Redis-based caching service using @keyv/redis
- **Rate Limiting**: Default 10 requests per 60 seconds, configurable via env vars
- **Logging**: Pino logger via nestjs-pino for structured logging
- **Observability**: OpenTelemetry integration with nestjs-otel for distributed tracing and metrics

### Frontend Architecture

- **Framework**: React 19 with Vite for fast development
- **Routing**: Tanstack Router with file-based routing
  - Routes in `src/routes/` directory
  - Automatic route generation with type safety
  - Router DevTools included in development
- **Styling**:
  - Tailwind CSS v4 with automatic class sorting via Prettier
  - shadcn/ui components in `src/components/ui/`
  - Dark mode support with CSS variables
- **Component Development**:
  - Storybook for isolated UI development
  - Component stories required for all components
  - Accessibility checks integrated
- **State Management**: React hooks and context
- **Testing**:
  - Vitest for unit testing with coverage thresholds
  - React Testing Library for component testing
  - Tests required for all new components
- **Code Quality**:
  - ESLint with React hooks and Prettier integration
  - Prettier for code formatting with Tailwind CSS plugin
  - TypeScript strict mode
- **Path Alias**: `@/` maps to `src/`

### Shared Patterns

- **Types**: Shared via `apps/packages/types` package, install it using "types": "workspace:\*" in package.json dependencies
- **TypeScript**: Strict mode enabled, version 5.8.3
- **Node**: v22 LTS required
- **pnpm**: v10.5.2 (specified via packageManager)

## Critical Development Rules

1. **Entity and DTO Patterns**:
   - ALL entities MUST have "Entity" suffix (e.g., `UserEntity`, `ProductEntity`)
   - Every entity, request object, and response object MUST have corresponding DTOs
   - DTOs MUST be TypeScript interfaces in `packages/types` for sharing with frontend
   - Backend DTOs implement shared interfaces and add validation decorators
   - Frontend uses shared DTOs for type safety with Zod validation
   - **IMPORTANT**: After adding new types to `packages/types`, ALWAYS run `pnpm build-type` in the types directory to build the library for other apps
   - **Database Naming Conventions**:
     - PostgreSQL column names MUST use snake_case (e.g., `created_at`, `last_updated_at`, `first_name`)
     - Entity property names in TypeScript MUST use camelCase (e.g., `createdAt`, `lastUpdatedAt`, `firstName`)
     - Use MikroORM's `@Property({ fieldName: 'snake_case_name' })` decorator to map camelCase properties to snake_case columns
     - Example:
       ```typescript
       @Property({ fieldName: 'created_at', type: 'timestamptz' })
       createdAt: Date;
       ```

2. **Documentation**:
   - Write JSDoc for EVERY function explaining:
     - What the function does
     - @param with type and description for each parameter
     - @returns with type and description of return value
     - @throws if the function can throw errors
   - Example:
     ```typescript
     /**
      * Validates user credentials and returns authentication token
      * @param email User's email address
      * @param password User's password in plain text
      * @returns JWT token for authenticated requests
      * @throws UnauthorizedException if credentials are invalid
      */
     async login(email: string, password: string): Promise<string> {
       // implementation
     }
     ```

3. **Backend Services**:
   - Must include Swagger decorators for ALL endpoints:
     - @ApiTags() on controllers
     - @ApiOperation() describing the endpoint
     - @ApiResponse() for all possible responses
     - @ApiBody(), @ApiParam(), @ApiQuery() as needed
   - When adding new modules/controllers:
     - Add corresponding ApiTag in main.ts swagger configuration
     - Ensure all DTOs have class-validator decorators with @ApiProperty()
   - Require unit tests for EVERY function with minimum 80% coverage
   - Run `pnpm test:coverage` to verify coverage meets requirements

4. **Validation**:
   - Backend routes MUST validate all incoming payloads using DTOs with class-validator
   - Frontend MUST validate forms before sending requests using Zod schemas
   - Validation schemas MUST be typed with shared DTOs using `satisfies z.ZodType<DtoType>`

5. **Logging and Tracing Rules**:
   - **MANDATORY**: Use Pino logger from nestjs-pino for ALL logging
     - NEVER use console.log, console.error, or other console methods
     - Inject PinoLogger in services/controllers: `constructor(private readonly logger: PinoLogger) {}`
     - Set logger context in constructor: `this.logger.setContext(ServiceName.name)`
   - **Tracing with OpenTelemetry (nestjs-otel)**:
     - Add `@Span()` decorator to ALL public methods in services for automatic tracing
     - Use custom span names for critical operations: `@Span('CRITICAL_OPERATION')`
     - For methods with parameters, add attributes: `@Span((param) => ({ attributes: { paramId: param.id } }))`
     - Inject TraceService for manual span control when needed:

       ```typescript
       constructor(private readonly traceService: TraceService) {}

       const span = this.traceService.startSpan('custom-operation');
       try {
         // operation code
         span.addEvent('processing-started');
       } finally {
         span.end();
       }
       ```

   - **Metrics Decorators**:
     - Add `@OtelInstanceCounter()` to service/controller classes to track instances
     - Add `@OtelMethodCounter()` to track method invocation counts
     - Use metric parameter decorators for custom metrics:
       - `@OtelCounter()` - For counting occurrences
       - `@OtelHistogram()` - For measuring distributions (e.g., response times)
   - **Logging Best Practices**:
     - Use appropriate log levels:
       - `logger.trace()` - Detailed debug information
       - `logger.debug()` - Debug information
       - `logger.info()` - General informational messages
       - `logger.warn()` - Warning messages
       - `logger.error()` - Error messages with stack traces
       - `logger.fatal()` - Fatal errors that cause application shutdown
     - Always include context in logs:
       ```typescript
       this.logger.info(
       	{userId, action: 'login'},
       	'User logged in successfully',
       )
       this.logger.error({error, userId}, 'Failed to process user request')
       ```
   - **Example Implementation**:

     ```typescript
     @Injectable()
     @OtelInstanceCounter()
     export class UserService {
     	constructor(
     		private readonly logger: PinoLogger,
     		private readonly traceService: TraceService,
     	) {
     		this.logger.setContext(UserService.name)
     	}

     	@Span()
     	@OtelMethodCounter()
     	async createUser(data: CreateUserDto): Promise<User> {
     		this.logger.info({data}, 'Creating new user')
     		// implementation
     	}

     	@Span('FIND_USER_BY_EMAIL')
     	@OtelMethodCounter()
     	async findByEmail(email: string): Promise<User | null> {
     		this.logger.debug({email}, 'Finding user by email')
     		// implementation
     	}
     }
     ```

6. **Frontend Component Rules**:
   - **MANDATORY**: EVERY new component MUST have:
     - Unit tests using Vitest and React Testing Library
     - Storybook stories with all variants/states
     - JSDoc documentation for component props
   - Component structure:
     - Each component lives in its own folder
     - Place components in appropriate directories (`components/ui/`, `components/layout/`, `components/pages/`)
     - Test files go in `__tests__/` subdirectory within the component folder
     - Story files go in `__stories__/` subdirectory within the component folder
   - Example structure:
     ```
     src/components/ui/Button/
     ├── Button.tsx           # Component implementation
     ├── index.ts            # Public exports
     ├── __tests__/
     │   └── Button.test.tsx # Unit tests
     └── __stories__/
         └── Button.stories.tsx # Storybook stories
     ```
   - For components with variants or utilities:
     ```
     src/components/ui/Button/
     ├── Button.tsx
     ├── button-variants.ts  # Variant definitions
     ├── index.ts
     ├── __tests__/
     │   └── Button.test.tsx
     └── __stories__/
         └── Button.stories.tsx
     ```

7. **Testing**:
   - **MANDATORY**: Every function MUST have unit tests with minimum 80% coverage
     - Backend: Test files in `tests/` folder next to source files
     - Frontend: Test files in `__tests__/` folder next to components
     - Packages: Test files in `__tests__/` directory
   - Coverage requirements apply to:
     - All backend services, controllers, guards, etc. (80% minimum)
     - All frontend components and utilities (75% statements/lines, 80% branches/functions)
     - All shared library functions (80% minimum)
   - Frontend coverage excludes: Storybook config, story files, page components, and route definitions
   - Always run in this order before PRs:
     - `pnpm format` (format code with Prettier)
     - `pnpm lint` (run ESLint)
     - `pnpm type-check` (TypeScript type checking)
     - `pnpm test` (run tests)
     - `pnpm test:coverage` (verify coverage meets requirements)

8. **Comments**: Number complex logic steps, update when code changes

9. **Never Modify**:
   - .env files
   - Migration files
   - Files marked with "DO NOT EDIT"

10. **Documentation Updates**:

- ALWAYS update AI-CONTEXT.md when:
  - Adding new modules or features
  - Changing architecture patterns
  - Adding new dependencies
  - Modifying core functionality
- ALWAYS update README.md when:
  - Adding new setup requirements
  - Changing configuration options
  - Adding new scripts or commands
  - Modifying deployment process
  - Adding new functions to shared libraries
  - Changing types that affect public APIs
- ALWAYS update package README.md when:
  - Adding new types to the types package
  - Adding new functions to shared libraries
  - Changing function signatures or behavior
- Keep .env.example in sync with actual env variables used

## Working with Shared Packages

### Types Package (`packages/types`)

When adding or modifying types in `packages/types`:

1. Add/modify interfaces in appropriate files under `packages/types/src/`
2. Export new types from the appropriate module file
3. Ensure exports are included in `packages/types/src/index.ts`
4. **CRITICAL**: Run `pnpm build-type` to build the distribution files
5. This generates the `dist/` folder with compiled JavaScript and TypeScript declarations
6. Other apps can then import the updated types

### Shared Libraries (`packages/*`)

When adding or modifying code in any shared library package:

1. **Define types first**:
   - Create folder in `packages/types/src/shared-libs/your-lib-name/`
   - Define all types in `index.ts`
   - Export from `packages/types/src/shared-libs/index.ts`
   - Run `pnpm build-type` to build types

2. **Implement the library**:
   - Add/modify code in the package's `src/` directory
   - Import types: `import type {...} from 'types'`
   - Ensure exports are included in `src/index.ts`

3. **Write comprehensive tests**:
   - Create tests in `src/__tests__/` directory
   - Test ALL functions with minimum 80% coverage
   - Run `pnpm test:coverage` to verify coverage

4. **Build and verify**:
   - **CRITICAL**: Run `pnpm build-libs` to build all library packages
   - This generates `dist/` folders with compiled code for all libraries
   - Run `pnpm type-check` to ensure type safety

**Why building is important**: The backend and frontend import from the built `dist/` folders, not the source files. Without running the build commands, your changes won't be available to other apps and you'll get errors.

**Build Commands**:

```bash
# Build types package only
pnpm build-type

# Build all shared libraries
pnpm build-libs

# After building, verify everything works
pnpm type-check
```

**Creating a New Shared Library**:

1. Copy `packages/shared-lib-boilerplate` to `packages/your-lib-name`
2. Update the package.json with new name and description
3. Create types in `packages/types/src/shared-libs/your-lib-name/`
4. Add your code to `src/index.ts` with proper type imports
5. Write unit tests in `src/__tests__/` (minimum 80% coverage)
6. Run `pnpm build-type` then `pnpm build-libs` to build everything
7. Import in other packages:
   - Functions: `import {...} from 'your-lib-name'`
   - Types: `import type {...} from 'types'`
   - Add to dependencies: `"your-lib-name": "workspace:*"`

## Environment Setup

Backend expects these environment variables:

- `DATABASE_NAME`, `POSTGRES_HOST`, `POSTGRES_PORT`, `POSTGRES_USER`, `POSTGRES_PASSWORD`
- `REDIS_HOST`, `REDIS_PORT`
- `JWT_SECRET` (strong secret key for JWT signing)
- `JWT_EXPIRES_IN` (token expiration, e.g., "7d", "24h")
- `APP_PORT` (defaults to 3001)
- `THROTTLE_TTL` (rate limit time window in seconds, defaults to 60)
- `THROTTLE_LIMIT` (number of requests per time window, defaults to 10)
- **OpenTelemetry Configuration**:
  - `OTEL_EXPORTER_OTLP_ENDPOINT` (OTLP collector endpoint, e.g., "http://localhost:4318")
  - `OTEL_SERVICE_NAME` (service name for traces, defaults to "backend-boilerplate")
  - `OTEL_RESOURCE_ATTRIBUTES` (additional resource attributes)
  - `OTEL_EXPORTER_OTLP_HEADERS` (headers for OTLP exporter)
  - `OTEL_TRACES_ENABLED` (enable/disable tracing, defaults to true)
  - `OTEL_METRICS_ENABLED` (enable/disable metrics, defaults to true)
  - `OTEL_LOGS_ENABLED` (enable/disable log export, defaults to true)

Frontend configuration:

- Runs on port 5173 by default (configurable in vite.config.ts)
- No environment variables required for basic setup
- For production builds, configure API endpoints in environment
