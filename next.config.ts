/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "topgunshootingacademy.com",
      "wip.tezcommerce.com", 
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wip.tezcommerce.com",
        port: "3304", 
      },
    ],
  },
};

export default nextConfig;
