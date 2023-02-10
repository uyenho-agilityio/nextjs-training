/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    enableUndici: true,
  },

  images: {
    domains: ['localhost'],
    deviceSizes: [320, 768, 1440],
  },
};

module.exports = nextConfig;
