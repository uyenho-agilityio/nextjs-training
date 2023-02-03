/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },

  images: {
    domains: ['localhost'],
    deviceSizes: [320, 768, 1440],
  },
};

module.exports = nextConfig;
