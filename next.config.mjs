import createNextIntlPlugin from "next-intl/plugin";

const plugins = [createNextIntlPlugin('./src/settings/i18n.ts')];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
};

const nextConfigWithPlugins = plugins.reduce((configs, plugin) => plugin(configs), nextConfig);

export default nextConfigWithPlugins;
