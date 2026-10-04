import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      // Room for 2MB image uploads (MAX_SIZE in lib/uploadImage.ts)
      // plus multipart overhead.
      bodySizeLimit: "3mb",
    },
  },
};

export default nextConfig;
