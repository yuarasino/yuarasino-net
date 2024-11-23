import type { Config } from "tailwindcss";

const defineConfig = (config: Config): Config => config;

export default defineConfig({
  content: [
    "src/**/*.astro",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "'Noto Sans JP Variable'",
          "sans-serif",
        ],
        display: [
          "'Noto Sans Display Variable'",
          "'Noto Sans JP Variable'",
          "sans-serif",
        ],
        mono: [
          "'Noto Sans Mono Variable'",
          "'Noto Sans JP Variable'",
          "monospace",
        ],
      },
    },
  },
});
