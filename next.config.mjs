/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com', // замените на нужный домен
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com', // замените на нужный домен
        port: '',
        pathname: '/**',
      },
    ],
  },


};

export default nextConfig;
