import path from "node:path";

import type { NextConfig } from "next";

// Sanity Studio's bundle imports `swr` with a default import, but Next's
// "react-server" export condition points `swr` at a build with named
// exports only. Force resolution to the standard build everywhere.
const swrEntry = path.resolve(__dirname, "node_modules/swr/dist/index/index.mjs");

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    resolveAlias: {
      swr: swrEntry,
    },
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      swr: swrEntry,
    };
    return config;
  },
};

export default nextConfig;
