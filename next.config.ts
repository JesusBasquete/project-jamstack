import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "x-robots-tag",
            value: "index, follow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;