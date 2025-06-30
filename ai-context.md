# AI Context Documentation

     This file provides context for AI assistants working with this
     Next.js template repository.

     ## Repository Purpose

     This is a **production-ready Next.js template** designed for
     enterprise applications. It serves as a starting point for
     modern web applications with comprehensive tooling, testing, and
      deployment infrastructure.

     ## Key Technologies

     - **Next.js 15** with App Router and React 19
     - **TypeScript** with strict mode configuration
     - **Tailwind CSS v4** for styling
     - **Vitest** for unit testing with React Testing Library
     - **Playwright** for end-to-end testing
     - **Docker** with multi-stage builds and Docker Compose
     - **GitHub Actions** for CI/CD pipeline

     ## Architecture Principles

     1. **Type Safety First**: Everything is typed with TypeScript
     2. **API-First Design**: Standardized API responses and error
     handling
     3. **Testing Strategy**: Comprehensive unit and E2E test
     coverage
     4. **Developer Experience**: VS Code integration, automated
     tooling
     5. **Production Ready**: Docker, security headers, monitoring

     ## Critical Files to Understand

     - `src/lib/api.ts` - API utilities and error handling patterns
     - `src/types/index.ts` - Shared TypeScript interfaces
     - `src/constants/index.ts` - Application configuration and
     constants
     - `src/lib/utils.ts` - Utility functions including Tailwind
     class merging
     - `.env.example` - Environment variable documentation

     ## Development Patterns

     ### Component Development
     ```typescript
     // Follow this pattern for new components
     interface ComponentProps extends BaseComponentProps {
       variant?: 'primary' | 'secondary'
       disabled?: boolean
     }

     export function Component({ className, ...props }:
     ComponentProps) {
       return (
         <div className={cn('base-classes', className)} {...props}>
           {/* content */}
         </div>
       )
     }
     ```

     ### API Route Development
     ```typescript
     // Follow this pattern for new API routes
     export const POST = withApiHandler(async (req) => {
       const body = await validateRequestBody(req, schema)
       // business logic
       return createApiResponse(data, 'Success message')
     })
     ```

     ### Testing Requirements
     - Every component must have a corresponding `.test.tsx` file
     - API routes should be tested with request/response validation
     - E2E tests in `e2e/` directory for critical user flows

     ## Configuration Management

     - **Environment Variables**: Documented in `.env.example`
     - **Constants**: Centralized in `src/constants/index.ts`
     - **Types**: Shared interfaces in `src/types/index.ts`
     - **Feature Flags**: Available through `FEATURES` object

     ## Quality Standards

     - **TypeScript**: Strict mode, no `any` types
     - **Testing**: >80% coverage target
     - **Linting**: ESLint + Prettier with automated fixes
     - **Security**: Input validation, rate limiting, CORS
     - **Performance**: Bundle analysis, lazy loading, optimization

     ## Deployment Infrastructure

     - **Docker**: Multi-stage builds with health checks
     - **CI/CD**: GitHub Actions with parallel jobs
     - **Monitoring**: Health check endpoint at `/api/health`
     - **Multi-environment**: Development, staging, production
     configs

     ## Common Tasks

     1. **Adding a new component**: Create in `src/components/` with
     tests
     2. **Adding an API route**: Use `withApiHandler()` pattern in
     `src/app/api/`
     3. **Adding utilities**: Extend `src/lib/utils.ts` or create new
      utility files
     4. **Adding types**: Update `src/types/index.ts` for shared
     interfaces
     5. **Configuration changes**: Update `src/constants/index.ts`
     and `.env.example`

     ## Template Customization

     When using this template:
     1. Update `package.json` with project details
     2. Configure environment variables in `.env.local`
     3. Customize constants in `src/constants/index.ts`
     4. Update metadata in `src/app/layout.tsx`
     5. Replace placeholder content in `src/app/page.tsx`

     This template prioritizes maintainability, scalability, and
     developer productivity while following modern React and Next.js
     best practices.
