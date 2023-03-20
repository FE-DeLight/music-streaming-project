/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
    fontLoaders: [{ loader: '@next/font/google' }],
  },
  images: {
    domains: ['cdn.music-flo.com'],
  },
};

module.exports = nextConfig;
