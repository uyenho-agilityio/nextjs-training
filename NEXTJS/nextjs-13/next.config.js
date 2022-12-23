/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }],
  },

  images: {
    domains: ['/public/images'],
    // unoptimized: true,
  },

  // async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
  //   const routes = {
  //     '/': { page: '/' },
  //     // '/about': { page: '/about' },
  //     // '/events/index': { page: '/events' },
  //   };

  //   return routes;
  // },
};

module.exports = nextConfig;
