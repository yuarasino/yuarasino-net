import type { Config } from "tailwindcss";

const defineConfig = (config: Config): Config => config;

export default defineConfig({
  content: [
    "src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        split: "960px",
        clamp: "640px",
      },
      fontFamily: {
        sans: "'Noto Sans JP', sans-serif",
        mono: "'Noto Sans Mono', 'Noto Sans JP', monospace",
      },
      colors: {
        primary: {
          50: "#fbf4f8",
          100: "#f9eaf3",
          200: "#f5d5e7",
          300: "#edb1d1",
          400: "#e284b4",
          500: "#d55f98",
          600: "#c24079",
          700: "#a72f60",
          800: "#8a2a50",
          900: "#742745",
          950: "#461125",
        },
        secondary: {
          50: "#f1f9fe",
          100: "#e1f2fd",
          200: "#bde5fa",
          300: "#78cdf6",
          400: "#40baf0",
          500: "#17a1e0",
          600: "#0a81bf",
          700: "#0a679a",
          800: "#0c5780",
          900: "#10496a",
          950: "#0b2e46",
        },
      },
    },
  },
});
