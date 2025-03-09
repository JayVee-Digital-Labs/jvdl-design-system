import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  // The following helps test Icons in Cypress
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192, // Inline files smaller than 8KB
            fallback: 'file-loader',
            publicPath: '/_next/static/media/',
            outputPath: 'static/media/',
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };

    return config;
  },
};

export default nextConfig;