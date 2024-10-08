/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dr26wooar/image/upload/**',
      },
    ],
  },
};

module.exports = nextConfig;
