/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Only apply basePath in production to keep local development (npm run dev) working at root /
  basePath: process.env.NODE_ENV === 'production' ? '/movers' : '',
  images: {
    unoptimized: true,
  },
  transpilePackages: ['three'],
};

export default nextConfig;
