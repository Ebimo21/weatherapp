/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['api.lorem.space', 'cdn.weatherapi.com'],
  },
}

module.exports = nextConfig
