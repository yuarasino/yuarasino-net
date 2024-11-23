import type { Config } from "tailwindcss";

const defineConfig = (config: Config): Config => config;

export default defineConfig({
  content: [
    "src/**/*.astro",
  ],
});
