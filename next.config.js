/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
    fontLoaders: [{ loader: "@next/font/google" }],
  },
};

module.exports = nextConfig;
