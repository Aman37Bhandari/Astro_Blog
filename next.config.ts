import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons'],
  },
  
  images: {
    domains: [
      'images.unsplash.com',
      'i.pravatar.cc',
      'i.pinimg.com',
      'api.dicebear.com',
      'placehold.co'
    ],
    formats: ['image/avif', 'image/webp'],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  swcMinify: true,
};

export default nextConfig;