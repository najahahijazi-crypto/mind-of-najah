import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#102A33",
        cream: "#F8F3EA",
        clay: "#C65B3C",
        sage: "#B9C9B2",
        moss: "#466051",
        sand: "#E7D4BD",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 60px -28px rgba(16, 42, 51, 0.28)",
      },
      backgroundImage: {
        grain: "radial-gradient(rgba(16, 42, 51, 0.10) 0.65px, transparent 0.65px)",
      },
    },
  },
  plugins: [],
};

export default config;
