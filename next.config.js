/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "",
      },
    ],
  },
  env: {
    BASE_TOKEN: process.env.NEXT_PUBLIC_TOKEN,
  },
};
