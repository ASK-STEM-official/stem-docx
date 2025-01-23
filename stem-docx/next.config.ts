import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  output: 'export',
  distDir: 'docs',
  basePath: '/stem-docx',
  assetPrefix: '/stem-docx',
};


export default nextConfig;
