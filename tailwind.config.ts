import type { Config } from "tailwindcss";
import tailwindTheme from './src/settings/tailwind/theme';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  ...tailwindTheme,
  plugins: [],
};
export default config;
