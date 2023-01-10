/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },

  images: {
    domains: ['/public/images'],
    allowFutureImage: true,
    deviceSizes: [320, 768, 1440],
    // imageSizes: [272, 614, 1140],
  },
};

module.exports = nextConfig;
