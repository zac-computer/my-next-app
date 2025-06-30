/** @type {import('next').NextConfig} */
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    dirs: ['src'], // Only run ESLint on the 'src' directory
  },
};

export default nextConfig;
