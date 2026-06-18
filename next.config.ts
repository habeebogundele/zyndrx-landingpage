import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.resolve(process.cwd()),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "app.zyndrx.soothetechnologies.com",
        pathname: "/assets/images/**",
      },
    ],
  },
};

export default nextConfig;
