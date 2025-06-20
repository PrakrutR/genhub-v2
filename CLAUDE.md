# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GenHub is a high-performance AI chat platform that supports multi-modal capabilities, function calling, and advanced AI conversations. It's built with Next.js 15, React 19, TypeScript, and uses a sophisticated architecture supporting both client-side (PGLite) and server-side (PostgreSQL) databases with Electron desktop app support.

## Common Development Commands

### Development

```bash
# Start development server (main)
pnpm dev

# Start development server for desktop app
pnpm dev:desktop

# Build for production
pnpm build

# Build for Docker deployment
pnpm build:docker

# Build desktop application
pnpm desktop:build
```

### Testing

```bash
# Run all tests
pnpm test

# Run client-side tests only
pnpm test-app

# Run server-side tests only
pnpm test-server

# Run tests with coverage
pnpm test-app:coverage
pnpm test-server:coverage

# Update test snapshots
pnpm test:update
```

### Database Operations

```bash
# Generate database schema and client migrations
pnpm db:generate

# Run database migrations
pnpm db:migrate

# Push schema changes to database
pnpm db:push

# Open Drizzle Studio
pnpm db:studio

# Push schema for testing
pnpm db:push-test
```

### Code Quality

```bash
# Run all linting (TypeScript, style, type-check, circular deps)
pnpm lint

# Run TypeScript linting only
pnpm lint:ts

# Run style linting only
pnpm lint:style

# Type checking
pnpm type-check

# Format code
pnpm prettier
```

### Internationalization

```bash
# Run i18n workflow
pnpm i18n

# Generate docs i18n
pnpm docs:i18n
```

## Architecture Overview

### Multi-Environment Database Architecture

LobeChat supports three deployment modes with different database configurations:

1. **Browser/PWA Mode**: Uses PGLite (WASM PostgreSQL) for local storage
2. **Server Mode**: Uses remote PostgreSQL for cloud deployment
3. **Electron Desktop**:
   - Local mode: PGLite via Node.js
   - Cloud sync mode: Remote PostgreSQL

### Backend Layer Architecture

```
src/
├── server/
│   ├── routers/          # tRPC API routes
│   └── services/         # Business logic with platform abstractions
│       └── */impls/      # Platform-specific implementations (S3, local, etc.)
├── database/
│   ├── models/           # Single-table CRUD operations
│   ├── repositories/     # Complex queries and aggregations
│   └── schemas/          # Drizzle ORM table definitions
└── services/             # Client services (calls tRPC or direct Model access)
```

**Key Architectural Principles:**

- **Environment Adaptation**: Services choose between direct Model access (local) or tRPC calls (remote) based on runtime environment
- **Platform Abstraction**: Server services use `impls/` subdirectories to abstract platform differences (e.g., S3 vs local file storage)
- **Layered Separation**: Models handle single-table operations, Repositories handle complex multi-table queries, Services handle business logic

### Frontend State Management

Uses modular Zustand store architecture with slice-based organization:

```
src/store/
├── chat/                 # Main chat store
│   ├── slices/          # Feature-based slices
│   │   ├── message/     # Message management
│   │   ├── topic/       # Topic/conversation management
│   │   ├── aiChat/      # AI chat operations
│   │   └── builtinTool/ # Built-in tools (DALL-E, search, etc.)
│   ├── initialState.ts  # Aggregated initial state
│   ├── store.ts         # Combined store definition
│   └── selectors.ts     # Unified selectors export
├── agent/               # Agent configuration
├── file/                # File management
├── session/             # Session management
└── [other stores]/      # Feature-specific stores
```

**Store Slice Structure:**
Each slice follows a consistent pattern:

- `initialState.ts` - State interface and defaults
- `action.ts` or `actions/` - Action definitions
- `selectors.ts` - State selectors (exported as `xxxSelectors`)
- `reducer.ts` - Pure state transformations (when using reducer pattern)

### Key Technology Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript, Antd + @lobehub/ui
- **State Management**: Zustand with slice-based architecture
- **Styling**: antd-style (CSS-in-JS), react-layout-kit for layouts
- **Database**: Drizzle ORM with PGLite (client) / PostgreSQL (server)
- **API**: tRPC for type-safe backend communication
- **Testing**: Vitest, Testing Library
- **Package Manager**: pnpm with workspace configuration

### Data Flow Patterns

**Local Mode (Browser/Electron local)**:

```
UI Components → Zustand Store → Services → Models → PGLite
```

**Server Mode**:

```
UI Components → Zustand Store → Services → tRPC Client → tRPC Routers → Server Services → Models/Repositories → PostgreSQL
```

### File Organization Patterns

- **Feature-based organization**: Components and logic grouped by domain
- **Modular services**: Client and server implementations separated but consistent
- **Type-safe patterns**: Extensive use of TypeScript interfaces and Zod validation
- **Internationalization**: Complete i18n support with automated workflows

### Development Guidelines from Cursor Rules

- Use latest TypeScript, React 19 functional components with hooks
- Follow the established slice pattern for Zustand stores
- Implement platform abstractions in server services `impls/` directories
- Maintain type safety throughout the stack with tRPC and Zod
- Use Drizzle ORM patterns for database operations
- Follow the established layered architecture (UI → Store → Service → Model/Repository → Database)

### Desktop App Specifics

The Electron app runs a local Node.js server that communicates with the renderer process via tRPC, allowing seamless switching between local PGLite and remote PostgreSQL based on cloud sync settings.

## Feature Development Workflow

### 1. Database Schema Updates

When adding new features requiring database changes:

```bash
# 1. Update schema in src/database/schemas/
# 2. Generate migrations
pnpm db:generate

# 3. Manually rename generated migration file for clarity
# 4. Update src/database/migrations/meta/_journal.json
```

### 2. Data Model Updates

- Define types in `src/types/` (don't use drizzle-generated types directly)
- Update relevant interfaces based on frontend requirements

### 3. Service Layer Implementation

- **Model Layer** (`src/database/models/`): Single-table CRUD operations
- **Repository Layer** (`src/database/repositories/`): Complex multi-table queries
- **Service Layer** (`src/services/`): Business logic with environment adaptation
  - `client.ts`: Local database operations
  - `server.ts`: Remote tRPC calls
  - `type.ts`: Interface definitions

### 4. State Management Implementation

- **Store Structure**: Zustand with slice-based organization
- **Slice Organization**: Feature-based modules (`message`, `topic`, `aiChat`, etc.)
- **Required Files per Slice**:
  - `initialState.ts`: State interface and defaults
  - `action.ts` or `actions/`: Action definitions
  - `selectors.ts`: State selectors (export as `xxxSelectors`)
  - `reducer.ts`: Pure state transformations (when using reducer pattern)

### 5. UI Implementation

- **Component Organization**: Feature-based in `src/features/`
- **Styling**: antd-style (CSS-in-JS) with react-layout-kit for layouts
- **Icons**: lucide-react, @ant-design/icons, @lobehub/icons for AI providers
- **Internationalization**: All new text must update `src/locales/default/`

## Testing Guidelines

### Unit Testing with Vitest

```bash
# Run all tests
pnpm test

# Run client-side tests only
pnpm test-app

# Run server-side tests only
pnpm test-server

# Run with coverage
pnpm test-app:coverage

# Update snapshots
pnpm test:update
```

### Test Structure

- Test files: `<filename>.test.ts` alongside source files
- Use `describe` and `it` functions for organization
- Test strategies:
  - **Boundary Testing**: Test edge cases (min/max/empty values)
  - **Exception Testing**: Error handling and fallback scenarios
  - **Functional Testing**: Core functionality and user interactions
  - **Performance Testing**: Response times and resource usage

### Writing Test Cases

```typescript
import { formatNumber } from './formatNumber';

describe('formatNumber', () => {
  it('should format number with comma separator', () => {
    const result = formatNumber(1000);
    expect(result).toBe('1,000');
  });

  it('should return the same number if it is less than 1000', () => {
    const result = formatNumber(500);
    expect(result).toBe('500');
  });
});
```

## State Management Patterns

### Store Complexity Levels

- **Low Complexity**: 2-5 states, 3-4 actions → `store.ts` + `initialState.ts`
- **Moderate Complexity**: 5-15 states, 5-10 actions → Add `selectors.ts`/`reducer.ts`
- **Medium Complexity**: 15-30 states, 10-20 actions → Multiple slices
- **High Complexity**: 30+ states, 20+ actions → Modular slice architecture

### Slice Organization Best Practices

```typescript
// Selector pattern - always export as xxxSelectors
export const agentSelectors = {
  currentAgentConfig,
  openingMessage,
  openingQuestions,
  // ... other selectors
};

// Action pattern - use unified config updates
const updateConfig = useStore((s) => s.setAgentConfig);
updateConfig({ openingQuestions: newQuestions });

// State structure patterns
interface StoreState {
  // Use Maps for relational data
  topicMaps: Record<string, ChatTopic[]>;
  messagesMap: Record<string, ChatMessage[]>;

  // Arrays for loading states
  messageLoadingIds: string[];
  topicLoadingIds: string[];

  // Optional fields for current active items
  activeId: string;
  activeTopicId?: string;
}
```

## Internationalization (i18n) Implementation

### File Structure

- **Source Files**: `src/locales/default/` (Chinese as source language)
- **Generated Files**: `locales/[lang]/` (Auto-generated JSON files)

### Adding New Text

1. Add text to appropriate file in `src/locales/default/`
2. Run `pnpm i18n` to generate translations
3. Use in components: `const { t } = useTranslation('namespace');`

### Language Support

- Automatic language detection via `i18next-browser-languagedetector`
- RTL language support with automatic direction setting
- Dynamic translation loading via `i18next-resources-to-backend`

## Code Style and Contributing

### Code Standards

- **Linting**: ESLint + Prettier + stylelint via `@lobehub/lint`
- **Commit Style**: Gitmoji + semantic release
- **Pre-commit Hooks**: Automatic lint-staged via husky

### Development Tools

- **Package Manager**: pnpm (required)
- **IDE Recommendation**: WebStorm for TypeScript development
- **React Patterns**: Functional components with hooks only
- **State Management**: Zustand for global state, useState/useReducer for local

### Directory Organization Patterns

- **Route Groups**: Use Next.js Route Groups for desktop/mobile separation
- **Feature-based**: Components organized by business domain
- **Platform Abstractions**: Server services use `impls/` for platform differences

### Responsive Design Pattern

```bash
welcome/
├── (desktop)/          # Desktop implementation
│   ├── features/       # Desktop-specific features
│   ├── index.tsx       # Desktop entry
│   └── layout.desktop.tsx
├── (mobile)/           # Mobile implementation
│   ├── features/       # Mobile-specific features
│   ├── index.tsx       # Mobile entry
│   └── layout.mobile.tsx
├── features/           # Shared features
└── page.tsx           # Main entry (device detection)
```

### Component Development Guidelines

- Use existing component libraries: antd, @lobehub/ui
- Follow established patterns for state selectors and actions
- Implement proper TypeScript interfaces
- Add internationalization for all user-facing text
- Write unit tests for complex logic
- Use platform abstractions in server services

### Performance Considerations

- Utilize Next.js SSR for fast page loading
- Implement code splitting and resource compression
- Use proper memoization in React components
- Optimize bundle size with tree shaking
- Cache static assets with appropriate headers
