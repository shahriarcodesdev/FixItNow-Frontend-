import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: false,

  turbopack: {
    root: process.cwd(),
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;