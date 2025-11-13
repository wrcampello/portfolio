import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.screenshotone.com',
      },
    ],
  },
};

export default nextConfig;
