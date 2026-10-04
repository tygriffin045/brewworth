import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/products/flair-neo-flex", destination: "/categories/travel-espresso", permanent: true },
      { source: "/products/fellow-opus", destination: "/categories/grinders", permanent: true },
      { source: "/products/fellow-stagg-ekg", destination: "/categories/kettles-scales", permanent: true },
      { source: "/products/timemore-black-mirror", destination: "/categories/kettles-scales", permanent: true },
      { source: "/products/acaia-pearl", destination: "/categories/kettles-scales", permanent: true },
      { source: "/products/timemore-grinder-brush", destination: "/categories/cleaning-maintenance", permanent: true },
      { source: "/products/fellow-atmos-canister", destination: "/products/atmos-storage", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "images-eu.ssl-images-amazon.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
