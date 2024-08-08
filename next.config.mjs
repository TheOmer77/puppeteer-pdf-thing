/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['puppeteer-core', '@sparticuz/chromium'],
  },
  webpack: config => {
    config.resolve.alias.canvas = false;
    return config;
  },
};

export default nextConfig;
