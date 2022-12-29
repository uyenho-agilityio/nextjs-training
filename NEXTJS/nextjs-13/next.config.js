/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }],
  },

  images: {
    domains: [
      '/public/images',
      'images.unsplash.com',
      'wembleypark.com',
      'hydeparkwinterwonderland.com',
    ],
  },
};

module.exports = nextConfig;
