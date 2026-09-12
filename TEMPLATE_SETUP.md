# Template Setup Guide

This guide helps you set up a new project from this template by renaming all boilerplate references to your project name.

## 🚀 Quick Start

When using this repository as a template, you need to rename all instances of "boilerplate" to your project name.

### Step 1: Clone or Use as Template

```bash
# Option 1: Use GitHub's "Use this template" button
# Option 2: Clone and remove git history
git clone https://github.com/your-repo/react-nestjs-monorepo-boilerplate.git your-project-name
cd your-project-name
rm -rf .git
git init
```

### Step 2: Global Find and Replace

Replace all occurrences of "boilerplate" with your project name. Here's what needs to be renamed:

## 📝 Files and Folders to Rename

### 1. Application Directories

```bash
# Rename directories
mv apps/frontend-boilerplate apps/frontend-yourproject
mv apps/backend-boilerplate apps/backend-yourproject
mv packages/shared-lib-boilerplate packages/shared-lib-yourproject
```

### 2. Package.json Files

Update the "name" field in these files:

- `/package.json`
- `/apps/frontend-yourproject/package.json`
- `/apps/backend-yourproject/package.json`
- `/packages/shared-lib-yourproject/package.json`

Example:

```json
{
  "name": "frontend-yourproject",
  ...
}
```

### 3. Workspace Configuration

#### pnpm-workspace.yaml

```yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

#### turbo.json

Replace all instances of app names:

- `frontend-boilerplate` → `frontend-yourproject`
- `backend-boilerplate` → `backend-yourproject`

### 4. Import Statements

Search and replace in all TypeScript/JavaScript files:

- `from 'frontend-boilerplate'` → `from 'frontend-yourproject'`
- `from 'backend-boilerplate'` → `from 'backend-yourproject'`
- `from 'shared-lib-boilerplate'` → `from 'shared-lib-yourproject'`

### 5. Environment Files

#### Backend (.env.example)

Update service names:

```env
OTEL_SERVICE_NAME=backend-yourproject
```

### 6. API Specification

Rename the file:

```bash
mv apps/backend-yourproject/backend-boilerplate-api-spec.yaml apps/backend-yourproject/backend-yourproject-api-spec.yaml
```

Update the content:

```yaml
info:
  title: YourProject API
  description: YourProject API documentation
```

### 7. Docker Files (if present)

Update service names and build contexts in:

- `docker-compose.yml`
- `Dockerfile`

### 8. README Files

Update project names and descriptions in:

- `/README.md`
- `/apps/frontend-yourproject/README.md`
- `/apps/backend-yourproject/README.md`
- `/packages/*/README.md`

## 🔍 Verification Checklist

Use these commands to find remaining references:

```bash
# Find all occurrences of "boilerplate"
grep -r "boilerplate" . \
  --exclude-dir=node_modules \
  --exclude-dir=.git \
  --exclude-dir=dist \
  --exclude-dir=coverage \
  --exclude=TEMPLATE-SETUP.md

# Find in specific file types
find . -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.json" \) \
  -not -path "*/node_modules/*" \
  -not -path "*/.git/*" \
  -exec grep -l "boilerplate" {} \;
```

## 🏗️ Post-Rename Setup

After renaming, run these commands:

```bash
# Clean everything
rm -rf node_modules
rm -rf apps/*/node_modules
rm -rf packages/*/node_modules
rm -rf apps/*/dist
rm -rf packages/*/dist

# Reinstall dependencies
pnpm install

# Build shared packages
pnpm build-type
pnpm build-libs

# Verify everything works
pnpm type-check
pnpm lint
pnpm test
pnpm build

# Start development servers
pnpm dev
```

## 🎯 Additional Customizations

### 1. Update Git Repository

```bash
git remote add origin https://github.com/yourusername/your-project-name.git
```

### 2. Update Package Metadata

In root `package.json`:

```json
{
	"name": "your-project-monorepo",
	"description": "Your project description",
	"repository": {
		"type": "git",
		"url": "git+https://github.com/yourusername/your-project-name.git"
	},
	"author": "Your Name",
	"license": "Your License"
}
```

### 3. Update API Documentation

In backend's `main.ts`, update Swagger config:

```typescript
const config = new DocumentBuilder()
	.setTitle('Your Project API')
	.setDescription('Your project API description')
	.setVersion('1.0')
	.addTag('your-project')
	.build()
```

### 4. Update Frontend Metadata

- Update `<title>` in `index.html`
- Update app name in `vite.config.ts`
- Update PWA manifest (if applicable)

## ⚠️ Common Pitfalls

1. **Missing References**: Some references might be in:
   - GitHub Actions workflows (`.github/workflows/`)
   - CI/CD configuration files
   - Documentation files
   - Test files

2. **Case Sensitivity**: Ensure consistent casing when renaming

3. **Workspace Dependencies**: After renaming, workspace dependencies need to match exactly:

   ```json
   "dependencies": {
     "types": "workspace:*",
     "your-shared-lib": "workspace:*"
   }
   ```

4. **Build Order**: Always build in this order after renaming:
   1. Types package
   2. Shared libraries
   3. Applications

## 🤖 For AI Assistants

If you're an AI assistant helping with the renaming process:

1. Start with a global search to identify all occurrences
2. Rename systematically, starting with directories
3. Update configuration files before source files
4. Run verification commands after each major step
5. Ensure all tests pass before declaring completion

Remember: The goal is to have zero references to "boilerplate" except in this TEMPLATE-SETUP.md file and historical documentation.
