import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://imagedelivery.net/**")],
  },
};

export default nextConfig;
