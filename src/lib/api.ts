import { NextRequest, NextResponse } from 'next/server';
import { ZodError, ZodSchema } from 'zod';

/**
 * Standard API response format
 */
export interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  message?: string;
  success: boolean;
}

/**
 * Create a standardized API response
 */
export function createApiResponse<T>(
  data?: T,
  message?: string,
  success = true
): NextResponse<ApiResponse<T>> {
  const response: ApiResponse<T> = {
    success,
    ...(data !== undefined && { data }),
    ...(message && { message }),
  };

  return NextResponse.json(response);
}

/**
 * Create a standardized API error response
 */
export function createApiError(
  error: string,
  status = 400,
  details?: unknown
): NextResponse<ApiResponse> {
  const response: ApiResponse = {
    success: false,
    error,
    ...(details ? { details } : {}),
  };

  return NextResponse.json(response, { status });
}

/**
 * API route handler wrapper with error handling
 */
export function withApiHandler<T = unknown>(
  handler: (req: NextRequest) => Promise<NextResponse<ApiResponse<T>>>
) {
  return async (req: NextRequest): Promise<NextResponse<ApiResponse<T>>> => {
    try {
      return await handler(req);
    } catch (error) {
      console.error('API Error:', error);

      if (error instanceof ZodError) {
        return createApiError(
          'Validation error',
          400,
          error.errors
        ) as NextResponse<ApiResponse<T>>;
      }

      if (error instanceof Error) {
        return createApiError(error.message, 500) as NextResponse<
          ApiResponse<T>
        >;
      }

      return createApiError('Internal server error', 500) as NextResponse<
        ApiResponse<T>
      >;
    }
  };
}

/**
 * Validate request body against a Zod schema
 */
export async function validateRequestBody<T>(
  req: NextRequest,
  schema: ZodSchema<T>
): Promise<T> {
  try {
    const body = await req.json();
    return schema.parse(body);
  } catch (error) {
    if (error instanceof ZodError) {
      throw error;
    }
    throw new Error('Invalid JSON body');
  }
}

/**
 * Extract and validate query parameters
 */
export function validateQueryParams<T>(
  searchParams: URLSearchParams,
  schema: ZodSchema<T>
): T {
  const params = Object.fromEntries(searchParams.entries());
  return schema.parse(params);
}

/**
 * Rate limiting helper (basic implementation)
 * In production, use a proper rate limiting solution like Upstash
 */
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(
  identifier: string,
  limit = 100,
  windowMs = 15 * 60 * 1000 // 15 minutes
): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const windowStart = now - windowMs;

  // Clean up old entries
  for (const [key, value] of rateLimitMap.entries()) {
    if (value.resetTime < windowStart) {
      rateLimitMap.delete(key);
    }
  }

  const current = rateLimitMap.get(identifier);

  if (!current || current.resetTime < windowStart) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + windowMs });
    return { allowed: true, remaining: limit - 1, resetTime: now + windowMs };
  }

  if (current.count >= limit) {
    return { allowed: false, remaining: 0, resetTime: current.resetTime };
  }

  current.count++;
  rateLimitMap.set(identifier, current);

  return {
    allowed: true,
    remaining: limit - current.count,
    resetTime: current.resetTime,
  };
}

/**
 * Get client IP address from request
 */
export function getClientIP(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  const realIP = req.headers.get('x-real-ip');

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  return realIP || 'unknown';
}

/**
 * CORS headers for API routes
 */
export function setCorsHeaders(response: NextResponse): NextResponse {
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  response.headers.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization'
  );
  return response;
}

/**
 * Handle CORS preflight requests
 */
export function handleCors(): NextResponse {
  const response = new NextResponse(null, { status: 200 });
  return setCorsHeaders(response);
}
