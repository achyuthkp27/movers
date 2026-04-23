/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/movers' : '',
  images: {
    unoptimized: true,
  },
  transpilePackages: ['three'],
};

export default nextConfig;
