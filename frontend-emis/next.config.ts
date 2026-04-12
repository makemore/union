import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Transpile the @union/core workspace package (raw TypeScript)
  transpilePackages: ["@union/core"],
};

export default nextConfig;
