import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: "/moekyawaung-portfolio",
  assetPrefix: "/moekyawaung-portfolio/"
};

export default nextConfig;
