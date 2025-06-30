# Next.js Web App Template

A **production-ready** Next.js template with TypeScript, Tailwind CSS, comprehensive testing, and enterprise-grade tooling. Perfect for rapid development and scalable applications. Tailwind CSS, comprehensive testing, and enterprise-grade tooling. Perfect for rapid development and scalable applications.

## ✨ Features

### Core Framework

- **Next.js 15** with App Router and Server Components
- **TypeScript** for type safety and better DX
- **Tailwind CSS v4** for modern styling
- **React 19** with latest features

### Development Experience

- **VS Code workspace** with optimized settings and extensions
- **EditorConfig** for consistent formatting across editors
- **ESLint & Prettier** with automatic formatting
- **Husky** for pre-commit hooks and quality gates
- **pnpm** for fast, efficient package management

### Testing & Quality

- **Vitest** for fast unit testing with React Testing Library
- **Playwright** for reliable E2E testing across browsers
- **GitHub Actions** CI/CD pipeline with parallel job execution
- **TypeScript** strict mode with comprehensive type checking
- **Security auditing** and dependency monitoring

### Production Ready

- **Docker** multi-stage builds with health checks
- **Docker Compose** with PostgreSQL, Redis, and Nginx
- **API routes** with validation, error handling, and rate limiting
- **SEO optimization** with Open Graph and Twitter Cards
- **Security headers** and CORS configuration
- **Environment management** with 150+ documented variables

### Code Organization

- **Utility functions** for common operations
- **Type definitions** for consistent data structures
- **Constants** for configuration management
- **API utilities** with Zod validation
- **Component examples** with comprehensive tests

## 🚀 Quick Start

### Prerequisites

- Node.js 20.x or higher
- pnpm (recommended) or npm/yarn
- Git for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo.git
cd your-repo

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local

# Install Playwright browsers (for E2E testing)
pnpm exec playwright install
```

### Development

```bash
# Start development server with Turbopack
pnpm dev

# Open http://localhost:3000 in your browser
```

### Customization

1. Update `package.json` with your project details
2. Configure environment variables in `.env.local`
3. Customize constants in `src/constants/index.ts`
4. Update metadata in `src/app/layout.tsx`
5. Replace placeholder content in `src/app/page.tsx`

## 🧪 Testing

### Unit Tests (Vitest)

```bash
# Run unit tests
pnpm test

# Run tests in watch mode
pnpm test:ui

+  # Run tests with coverage report
pnpm test:coverage
```

**Example test files:**

- `src/components/Button.test.tsx` - Component unit tests
- `src/app/page.test.tsx` - Page component tests

### E2E Tests (Playwright)

```bash
# Run E2E tests (headless)
pnpm test:e2e

# Run E2E tests (headed mode)
pnpm test:e2e:headed

# Run E2E tests for specific browser
pnpm test:e2e --project=chromium
```

**Example E2E tests:**

- `e2e/home.spec.ts` - Homepage functionality
- `e2e/components.spec.ts` - Component interactions (examples)

## 📁 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD
├── .vscode/             # VS Code workspace settings
├── e2e/                 # End-to-end tests
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js App Router
│   │   ├── api/         # API routes with examples
│   │   ├── layout.tsx   # Root layout with SEO
│   │   └── page.tsx     # Homepage
│   ├── components/      # Reusable components
│   │   ├── constants/       # Application constants
│   │   ├── lib/            # Utility functions
│   │   ├── types/          # TypeScript definitions
│   │   └── test/           # Test utilities and setup
│   ├── docker-compose.yml   # Multi-service Docker setup
│   ├── Dockerfile          # Optimized production image
│   ├── .env.example        # Environment variables
│   └── THIRD-PARTY-LICENSES.md  # Dependency licenses
```

## 🛠 Available Scripts

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint errors automatically
pnpm format           # Format code with Prettier
pnpm format:check     # Check code formatting
pnpm type-check       # Run TypeScript compiler check

# Testing
pnpm test             # Run unit tests (watch mode)
pnpm test:ui          # Run tests with UI interface
pnpm test:coverage    # Run tests with coverage report
pnpm test:e2e         # Run E2E tests
pnpm test:e2e:headed  # Run E2E tests in headed mode

# Utilities
pnpm clean            # Clean build artifacts
pnpm analyze          # Analyze bundle size
pnpm check            # Run all quality checks
```

## ⚙ Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
# Application
NEXT_PUBLIC_APP_NAME="My Amazing App"
NEXT_PUBLIC_APP_URL="https://myapp.com"

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/myapp"

# Authentication (optional)
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# See .env.example for 150+ more variables
```

### VS Code Integration

The template includes optimized VS Code settings:

**Recommended extensions (auto-suggested):**

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- Playwright Test for VSCode
- Vitest Explorer
- TypeScript Importer

**Included configurations:**

- Debug settings for full-stack debugging
- Task definitions for common operations
- Optimized settings for Next.js development

## 🚀 Deployment

### Using Docker

```bash
# Build and run with Docker Compose
docker-compose up -d

# Build standalone Docker image
docker build -t my-app .
docker run -p 3000:3000 my-app
```

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)

### Other Platforms

This template supports deployment to:

- **Netlify** - Static and serverless functions
- **AWS Amplify** - Full-stack deployment
- **Railway** - Container deployment
- **Render** - Docker and static sites
- **Digital Ocean App Platform** - Container deployment
- **Heroku** - Container deployment
- **Self-hosted** with Docker

### CI/CD Pipeline

The included GitHub Actions workflow provides:

- **Parallel job execution** for faster builds
- **Automated testing** (unit + E2E)
- **Code quality checks** (lint, format, type)
- **Security auditing**
- **Automatic deployment** to staging/production
- **Build artifacts** and test reports

## 🛡 Security

### Built-in Security Features

- **Security headers** (X-Frame-Options, CSP, etc.)
- **CORS configuration** for API routes
- **Input validation** with Zod schemas
- **Rate limiting** utilities
- **Dependency auditing** in CI/CD
- **Environment variable validation**

### Security Best Practices

- Secrets are never committed to the repository
- API routes include proper error handling
- Database queries use parameterized inputs
- Authentication examples follow OWASP guidelines

## 📚 API Documentation

### Built-in API Routes

- `GET /api/health` - Health check endpoint for monitoring
- `POST /api/auth/example` - Example authentication endpoint
- `GET /api/auth/example` - Example user profile endpoint

### API Utilities

The template includes comprehensive API utilities:

```typescript
import {
  withApiHandler,
  createApiResponse,
  validateRequestBody,
} from '@/lib/api';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
});

export const POST = withApiHandler(async (req) => {
  const body = await validateRequestBody(req, schema);
  // Your logic here
  return createApiResponse({ success: true });
});
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write tests for new features
- Update documentation as needed
- Ensure all CI checks pass

## 📄 License

This project is released into the public domain under
the [Unlicense](UNLICENSE).

See [THIRD-PARTY-LICENSES.md](THIRD-PARTY-LICENSES.md)
for information about dependencies.

## 🙏 Acknowledgments

- **[Next.js](https://nextjs.org/)** - The React framework for production
- **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework
- **[Vitest](https://vitest.dev/)** - Fast unit testing framework
- **[Playwright](https://playwright.dev/)** - Reliable end-to-end testing
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript with syntax for types
- **Built with ❤️ for the developer community. Star ⭐ this repo if it helped you!**
