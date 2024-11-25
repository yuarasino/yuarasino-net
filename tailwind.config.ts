import { defineConfig } from "./src/utils/tailwind.ts";

export default defineConfig({
  content: [
    "src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Noto Sans JP', sans-serif",
        mono: "'Noto Sans Mono', 'Noto Sans JP', monospace",
      },
    },
  },
});
