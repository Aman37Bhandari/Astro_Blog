import type { NextConfig } from "next";

import globalConfig from "@/config/globalConfig";

const nextConfig: NextConfig = {
  // cacheComponents: true,
  reactStrictMode: true,
  reactCompiler: false,
  images: {
    unoptimized: globalConfig.deployment.development,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.astroverse.in",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3002",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "blogs-api.astroverse.in",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return globalConfig.deployment.production
      ? [
          {
            source: "/static/:path*",
            headers: [
              {
                key: "Cache-Control",
                value: "public, max-age=31536000, immutable",
              },
            ],
          },
          {
            source: "/(.*)",
            headers: [
              {
                key: "Cache-Control",
                value: "public, max-age=0, must-revalidate",
              },
            ],
          },
        ]
      : [];
  },
};

export default nextConfig;
