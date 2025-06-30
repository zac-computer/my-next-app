import { NextResponse } from 'next/server';

/**
 * Health check endpoint
 * Useful for monitoring and load balancers
 */
export async function GET() {
  try {
    // You can add additional health checks here:
    // - Database connectivity
    // - External service availability
    // - Cache status

    const healthData = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV,
      version: process.env.npm_package_version || '1.0.0',
      // Add more health indicators as needed
      checks: {
        database: 'ok', // Replace with actual DB check
        cache: 'ok', // Replace with actual cache check
        external: 'ok', // Replace with external service checks
      },
    };

    return NextResponse.json(healthData, { status: 200 });
  } catch (error) {
    console.error('Health check failed:', error);

    return NextResponse.json(
      {
        status: 'error',
        timestamp: new Date().toISOString(),
        message: 'Health check failed',
      },
      { status: 503 }
    );
  }
}
