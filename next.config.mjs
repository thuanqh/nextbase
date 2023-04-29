/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "robohash.org",
      },
    ],
  },
  experimental: {
    appDir: true,
  },
}

export default nextConfig
