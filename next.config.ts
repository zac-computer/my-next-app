// @ts-check

/** @type {import('next').NextConfig} */
import type { NextConfig } from 'next';
import type { Configuration as WebpackConfiguration } from 'webpack';

const nextConfig: NextConfig = {
  /* config options here */
  // Enable standalone output for Docker builds
  // output: 'standalone',
  // ESLint configuration
  eslint: {
    dirs: ['src'], // Only run ESLint on the 'src' directory
  },
  // Experimental features
  experimental: {
    // Enable Server Components by default
    // serverComponentsExternalPackages: [],
  },
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ];
  },
  // Bundle analyzer configuration
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config: WebpackConfiguration) => {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { BundleAnalyzerPlugin } = require('@next/bundle-analyzer')({
        enabled: true,
      });
      config.plugins!.push(new BundleAnalyzerPlugin());
      return config;
    },
  }),
};
export default nextConfig;
