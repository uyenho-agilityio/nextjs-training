/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    enableUndici: true,
  },

  images: {
    domains: ['localhost', 'yoora-webapp.vercel.app'],
    deviceSizes: [320, 768, 1440],
  },
};

module.exports = nextConfig;
