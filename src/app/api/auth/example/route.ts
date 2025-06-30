import { NextRequest } from 'next/server';
import { z } from 'zod';
import {
  withApiHandler,
  createApiResponse,
  createApiError,
  validateRequestBody,
} from '@/lib/api';

// Example validation schemas
const LoginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

const RegisterSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  name: z.string().min(1, 'Name is required'),
});

/**
 * Example POST endpoint for user login
 * This is a template - replace with your actual authentication logic
 */
export const POST = withApiHandler(async (req: NextRequest) => {
  // Validate request body
  const body = await validateRequestBody(req, LoginSchema);

  // TODO: Implement your authentication logic here
  // Example:
  // - Hash password comparison
  // - Database user lookup
  // - JWT token generation
  // - Session creation

  // Mock authentication (replace with real logic)
  if (body.email === 'demo@example.com' && body.password === 'password123') {
    const user = {
      id: '1',
      email: body.email,
      name: 'Demo User',
    };

    // In a real app, you would:
    // - Generate a JWT token
    // - Set secure HTTP-only cookies
    // - Store session in database/cache

    return createApiResponse(
      { user, token: 'mock-jwt-token' },
      'Login successful'
    );
  }

  return createApiError('Invalid credentials', 401);
});

/**
 * Example PUT endpoint for user registration
 * This is a template - replace with your actual registration logic
 */
export const PUT = withApiHandler(async (req: NextRequest) => {
  // Validate request body
  const body = await validateRequestBody(req, RegisterSchema);

  // TODO: Implement your registration logic here
  // Example:
  // - Check if user already exists
  // - Hash password
  // - Store user in database
  // - Send welcome email
  // - Generate verification token

  // Mock registration (replace with real logic)
  const existingUser = body.email === 'existing@example.com';

  if (existingUser) {
    return createApiError('User already exists', 409);
  }

  const newUser = {
    id: Math.random().toString(36).substr(2, 9),
    email: body.email,
    name: body.name,
    createdAt: new Date().toISOString(),
  };

  return createApiResponse({ user: newUser }, 'Registration successful');
});

/**
 * Example GET endpoint for user profile
 * This is a template - replace with your actual user lookup logic
 */
export const GET = withApiHandler(async (req: NextRequest) => {
  // TODO: Implement authentication middleware
  // - Verify JWT token
  // - Check session validity
  // - Extract user information

  // Mock authentication check (replace with real logic)
  const authHeader = req.headers.get('authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return createApiError('Authentication required', 401);
  }

  // Mock user data (replace with database lookup)
  const user = {
    id: '1',
    email: 'demo@example.com',
    name: 'Demo User',
    createdAt: '2024-01-01T00:00:00.000Z',
  };

  return createApiResponse(user);
});

/**
 * Handle CORS preflight requests
 */
export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
