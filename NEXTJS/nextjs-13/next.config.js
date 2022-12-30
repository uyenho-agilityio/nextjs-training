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
    allowFutureImage: true,
    // unoptimized: true,
  },

  // rewrites() {
  //   return [
  //     {
  //       source: '/about',
  //       destination: '/about-us',
  //     },
  //   ];
  // },

  // async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
  //   const routes = {
  //     '/': { page: '/' },
  //     // '/about': { page: '/about' },
  //     // '/events/page': { page: '/events' },
  //   };

  //   return routes;
  // },
};

module.exports = nextConfig;
