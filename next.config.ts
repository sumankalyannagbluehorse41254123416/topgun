/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "topgunshootingacademy.com",
      "wip.tezcommerce.com",
      "ik.imagekit.io", // ✅ Added ImageKit
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wip.tezcommerce.com",
        port: "3304",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io", // ✅ Allow remote loading from ImageKit
      },
    ],
  },
};

export default nextConfig;
