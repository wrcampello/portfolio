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
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: process.env.VERCEL_ENV === 'production' 
              ? 'index, follow' 
              : 'noindex, nofollow',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
