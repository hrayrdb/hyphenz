/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Keeps React Strict Mode enabled
  output: 'export',      // Enables static export
  assetPrefix: './',     // Ensures relative paths for assets (important for static hosting)
};

module.exports = nextConfig;
