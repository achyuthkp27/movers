/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/movers',
  images: {
    unoptimized: true,
  },
  transpilePackages: ['three'],
};

export default nextConfig;
