import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.vw.mediaservice.avp.tech",
      },
      {
        protocol: "https",
        hostname: "assets.volkswagen.com",
      },
    ],
  },
};

export default nextConfig;
