import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admuzzum.xdevel.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
