import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http", // or 'https'
        hostname: "**", // Allows all hostnames
      },
      {
        protocol: "https", // or 'http'
        hostname: "**", // Allows all hostnames
      },
    ],
  },
};

export default nextConfig;
