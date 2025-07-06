/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: process.env.STRAPI_DOMAIN || 'your-production-strapi-domain.com',
        port: '',
        pathname: '/uploads/**',
      },
    ],
    domains: [
      'images.unsplash.com',
      'www.nfpa.org',
      'upload.wikimedia.org',
      'www.ifsm.org.uk',
      'www.thefpa.co.uk',
      'ifss-coalition.org'
    ],
  },
}

module.exports = nextConfig 