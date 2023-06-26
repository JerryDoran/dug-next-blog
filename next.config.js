/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/JerryDoran/remote-mdx-blog-manager/main/images/**',
      },
    ],
    domains: ['encrypted-tbn0.gstatic.com'],
  },
};

module.exports = nextConfig;
