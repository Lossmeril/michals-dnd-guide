import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      // Room for 2MB image uploads (MAX_SIZE in lib/uploadImage.ts)
      // plus multipart overhead.
      bodySizeLimit: "3mb",
    },
  },
  // Rulebook pages that were merged into others
  async redirects() {
    return [
      { source: "/rulebook/walls-and-gates", destination: "/rulebook/fortifications#walls-and-gates", permanent: true },
      { source: "/rulebook/roofs", destination: "/rulebook/fortifications#roofs", permanent: true },
    ];
  },
};

export default nextConfig;
