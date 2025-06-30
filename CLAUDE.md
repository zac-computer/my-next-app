# CLAUDE.md

     This file provides guidance to Claude Code (claude.ai/code) when
      working with code in this repository.

     ## Essential Commands

     ### Development
     ```bash
     pnpm dev              # Start development server with Turbopack
     pnpm build           # Build for production
     pnpm start           # Start production server
     pnpm clean           # Clean build artifacts
     ```

     ### Code Quality
     ```bash
     pnpm lint            # Run ESLint
     pnpm lint:fix        # Fix ESLint errors automatically
     pnpm format          # Format code with Prettier
     pnpm type-check      # Run TypeScript compiler check
     pnpm check           # Run all quality checks (lint + type-check
      + test)
     ```

     ### Testing
     ```bash
     # Unit Tests (Vitest)
     pnpm test            # Run tests in watch mode
     pnpm test run        # Run tests once
     pnpm test:ui         # Run tests with UI interface
     pnpm test:coverage   # Run tests with coverage report

     # E2E Tests (Playwright)
     pnpm test:e2e        # Run E2E tests (headless)
     pnpm test:e2e:headed # Run E2E tests in headed mode

     # Running specific tests
     pnpm test Button     # Run tests matching "Button"
     pnpm test src/components/Button.test.tsx  # Run specific test
     file
     ```

     ### Bundle Analysis
     ```bash
     pnpm analyze         # Analyze bundle size with
     webpack-bundle-analyzer
     ```

     ## Architecture Overview

     ### Project Structure Philosophy
     This is a **production-ready Next.js template** designed for
     enterprise applications. The architecture emphasizes:
     - **Separation of concerns** with dedicated directories for
     utilities, types, and constants
     - **API-first design** with standardized response formats and
     error handling
     - **Comprehensive testing strategy** using both unit (Vitest)
     and E2E (Playwright) tests
     - **Developer experience** optimization with VS Code integration
      and automated tooling

     ### Core Architectural Patterns

     #### API Layer (`src/lib/api.ts`)
     - **Standardized API responses** using `ApiResponse<T>`
     interface
     - **Error handling wrapper** with `withApiHandler()` for
     consistent error responses
     - **Input validation** using Zod schemas with
     `validateRequestBody()`
     - **Rate limiting** utilities for production use
     - All API routes follow the pattern: validation → business logic
      → standardized response

     #### Configuration Management
     - **Environment-driven configuration** via
     `src/constants/index.ts`
     - **Centralized constants** for API routes, HTTP status codes,
     validation rules
     - **Feature flags** system for enabling/disabling functionality
     - **Type-safe configuration** with fallback defaults

     #### Type System (`src/types/index.ts`)
     - **Shared interfaces** for common data structures (User,
     ApiResponse, etc.)
     - **Generic utility types** (Optional<T>, Nullable<T>,
     DeepPartial<T>)
     - **API-specific types** for pagination, search, and form
     handling
     - **Component prop types** with base interfaces for consistency

     #### Utility Layer (`src/lib/utils.ts`)
     - **Tailwind class merging** with `cn()` function using clsx +
     tailwind-merge
     - **Date formatting** utilities for internationalization
     - **Validation helpers** for common patterns
     - **Performance utilities** like debounce/throttle
     - **String manipulation** functions (slugify, truncate, etc.)

     ### Testing Architecture

     #### Unit Testing (Vitest)
     - **Component testing** using React Testing Library
     - **Utility function testing** with comprehensive coverage
     - **API route testing** with mocked requests/responses
     - **Setup file** at `src/test/setup.ts` with jest-dom matchers
     - **Path alias support** via `@/` for cleaner imports

     #### E2E Testing (Playwright)
     - **Cross-browser testing** (Chromium, Firefox, WebKit)
     - **Component interaction testing** with real browser automation
     - **API endpoint testing** through the browser
     - **Example tests** in `e2e/` directory with skip patterns for
     template usage

     ### Development Workflow

     #### VS Code Integration
     - **Workspace settings** optimized for Next.js development
     - **Extension recommendations** for TypeScript, Tailwind,
     testing
     - **Debug configurations** for full-stack debugging
     - **Formatting on save** with ESLint + Prettier integration

     #### Pre-commit Hooks
     - **Husky** for Git hooks
     - **lint-staged** for running checks on staged files only
     - **Automatic formatting** and linting before commits

     #### Docker & Deployment
     - **Multi-stage Dockerfile** optimized for Next.js production
     builds
     - **Docker Compose** setup with PostgreSQL, Redis, and Nginx
     - **Health check endpoint** at `/api/health` for monitoring
     - **GitHub Actions CI/CD** with parallel job execution

     ## Key Implementation Notes

     ### API Route Development
     - Use `withApiHandler()` wrapper for consistent error handling
     - Validate inputs with Zod schemas using `validateRequestBody()`
     - Return responses using `createApiResponse()` or
     `createApiError()`
     - Example pattern in `src/app/api/auth/example/route.ts`

     ### Component Development
     - Use the Button component in `src/components/Button.tsx` as a
     reference pattern
     - Implement comprehensive tests alongside components
     - Use `cn()` utility for conditional Tailwind classes
     - Follow the established prop patterns with base interfaces

     ### Environment Configuration
     - Copy `.env.example` to `.env.local` for development
     - Update constants in `src/constants/index.ts` for
     application-wide settings
     - Use environment variables for feature flags and external
     service configuration

     ### Database Integration
     - Configure `DATABASE_URL` in environment variables
     - Use the API utilities for database operations with proper
     error handling
     - Implement migrations and seeders as needed for your specific
     database

     This template prioritizes developer experience, type safety, and
      production readiness while maintaining flexibility for various
     application types.
