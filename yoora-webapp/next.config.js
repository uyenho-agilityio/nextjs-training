/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', 'yoora-webapp.vercel.app'],
    deviceSizes: [320, 768, 1440],
  },
  optimizeFonts: true,
  env: {
    NEXT_PUBLIC_ENV: 'PRODUCTION',
  },
});

module.exports = nextConfig;
