# GitHub Copilot Instructions

     This file provides guidance to GitHub Copilot when working with
     code in this repository.

     ## Project Context

     This is a **production-ready Next.js template** with TypeScript,
      Tailwind CSS, comprehensive testing, and enterprise-grade
     tooling. The codebase emphasizes type safety, developer
     experience, and scalable architecture patterns.

     ## Code Style and Patterns

     ### TypeScript
     - Use strict TypeScript with explicit types
     - Prefer interfaces over types for object shapes
     - Use utility types from `src/types/index.ts` when available
     - Always type API responses with `ApiResponse<T>` interface

     ### React Components
     - Use functional components with TypeScript
     - Implement comprehensive prop interfaces extending
     `BaseComponentProps`
     - Include proper JSDoc comments for complex components
     - Use the `cn()` utility for conditional Tailwind classes
     - Follow the Button component pattern in
     `src/components/Button.tsx`

     ### API Routes
     - Always use the `withApiHandler()` wrapper for error handling
     - Validate request bodies with Zod schemas using
     `validateRequestBody()`
     - Return standardized responses with `createApiResponse()` or
     `createApiError()`
     - Include proper TypeScript types for request/response data
     - Follow the pattern in `src/app/api/auth/example/route.ts`

     ### Styling
     - Use Tailwind CSS with the utility-first approach
     - Prefer responsive design patterns (`sm:`, `md:`, `lg:`
     prefixes)
     - Use the `cn()` function from `src/lib/utils.ts` for
     conditional classes
     - Follow design system patterns established in existing
     components

     ## File Organization

     ### New Components
     - Place in `src/components/` directory
     - Include corresponding `.test.tsx` file with comprehensive
     tests
     - Export from component file and add to index if needed
     - Use TypeScript interfaces for all props

     ### API Routes
     - Place in `src/app/api/` following Next.js 15 App Router
     conventions
     - Include request validation, business logic, and response
     formatting
     - Add health checks and error handling
     - Document API endpoints in comments

     ### Utilities
     - Add general utilities to `src/lib/utils.ts`
     - Add API-specific utilities to `src/lib/api.ts`
     - Create new utility files in `src/lib/` for domain-specific
     functions
     - Export from index files when appropriate

     ### Types
     - Add shared types to `src/types/index.ts`
     - Create domain-specific type files when needed
     - Use generic types for reusable patterns
     - Include JSDoc comments for complex types

     ### Constants
     - Add application constants to `src/constants/index.ts`
     - Group related constants into objects with `as const` assertion
     - Use environment variables for configurable values
     - Document constants with comments

     ## Testing Patterns

     ### Unit Tests (Vitest)
     - Create `.test.tsx` files alongside components
     - Use React Testing Library for component testing
     - Test user interactions, not implementation details
     - Include accessibility testing with proper queries
     - Mock external dependencies appropriately

     ### E2E Tests (Playwright)
     - Create `.spec.ts` files in `e2e/` directory
     - Test critical user flows and interactions
     - Use page object patterns for complex scenarios
     - Include cross-browser testing considerations
     - Test API endpoints through the browser when relevant

     ## Environment and Configuration

     ### Environment Variables
     - Reference `.env.example` for available configuration options
     - Use `NEXT_PUBLIC_` prefix for client-side variables
     - Configure constants in `src/constants/index.ts` with fallbacks
     - Document new environment variables in `.env.example`

     ### Feature Flags
     - Use the `FEATURES` object from `src/constants/index.ts`
     - Implement conditional rendering based on feature flags
     - Include environment variable controls for features
     - Document feature flag purposes and dependencies

     ## Error Handling

     ### API Error Handling
     - Use the standardized error response format
     - Include proper HTTP status codes from `HTTP_STATUS` constants
     - Log errors appropriately for debugging
     - Provide user-friendly error messages

     ### Component Error Handling
     - Implement error boundaries for component trees
     - Handle loading and error states in UI components
     - Use try-catch blocks for async operations
     - Provide fallback UI for error scenarios

     ## Performance Considerations

     ### Next.js Optimization
     - Use dynamic imports for code splitting when appropriate
     - Optimize images with Next.js Image component
     - Implement proper caching strategies
     - Use Server Components where beneficial

     ### Bundle Optimization
     - Avoid importing entire libraries when possible
     - Use tree-shaking friendly imports
     - Monitor bundle size with `pnpm analyze`
     - Implement lazy loading for non-critical components

     ## Security Guidelines

     ### API Security
     - Validate all inputs with Zod schemas
     - Implement proper authentication checks
     - Use rate limiting for public endpoints
     - Sanitize user inputs and outputs

     ### Client-Side Security
     - Never expose sensitive data in client code
     - Use environment variables properly (client vs server)
     - Implement proper CORS configuration
     - Follow Next.js security best practices

     ## Documentation

     ### Code Documentation
     - Include JSDoc comments for complex functions and components
     - Document API routes with OpenAPI-style comments
     - Explain business logic and architectural decisions
     - Update README.md for significant changes

     ### Type Documentation
     - Document complex type relationships
     - Explain generic type parameters
     - Include examples for utility types
     - Document API response shapes

     ## Deployment Considerations

     ### Docker
     - Update Dockerfile for new dependencies
     - Consider multi-stage build optimization
     - Include health checks for services
     - Document environment variable requirements

     ### CI/CD
     - Update GitHub Actions workflow for new test requirements
     - Include deployment steps for new services
     - Add environment-specific configurations
     - Document deployment procedures

     ## Common Patterns to Follow

     1. **Consistent imports**: Use `@/` path alias for internal
     imports
     2. **Error boundaries**: Wrap feature areas with proper error
     handling
     3. **Loading states**: Implement skeleton loaders and loading
     indicators
     4. **Responsive design**: Mobile-first approach with Tailwind
     breakpoints
     5. **Accessibility**: Include proper ARIA labels and semantic
     HTML
     6. **Performance**: Optimize for Core Web Vitals and user
     experience
     7. **Type safety**: Leverage TypeScript's strict mode throughout
     8. **Testing**: Maintain high test coverage with meaningful
     tests

     ## Avoid These Patterns

     1. **Any types**: Use specific TypeScript types instead of `any`
     2. **Inline styles**: Prefer Tailwind classes over inline CSS
     3. **Direct DOM manipulation**: Use React patterns instead
     4. **Hardcoded values**: Use constants and environment variables
     5. **Missing error handling**: Always handle potential error
     states
     6. **Untested code**: Write tests for new functionality
     7. **Breaking changes**: Maintain backward compatibility when
     possible
     8. **Inconsistent naming**: Follow established naming
     conventions
