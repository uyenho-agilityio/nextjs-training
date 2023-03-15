/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', 'yoora-webapp.vercel.app'],
    deviceSizes: [320, 768, 1440],
    minimumCacheTTL: 60,
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.(woff|woff2|ttf)$/,
      loader: 'file-loader',
      options: {
        outputPath: 'static/fonts/',
        publicPath: '/_next/static/fonts/',
        limit: 1,
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return config;
  },
};

module.exports = nextConfig;
