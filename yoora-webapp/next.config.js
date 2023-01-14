/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },

  images: {
    domains: ['/public/images'],
    deviceSizes: [320, 768, 1440],
  },
};

module.exports = nextConfig;
