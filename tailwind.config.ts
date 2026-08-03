import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Mind of Najah brand palette — semantic aliases use these exact colors.
        ink: "#3F6ECD", // Cobalt
        cream: "#F7F3EA", // Warm Cream
        clay: "#F2C14E", // Golden Yellow
        sage: "#A8C3A0",
        sand: "#9EA8E8", // Periwinkle
        cobalt: "#3F6ECD",
        seafoam: "#A9DCD2",
        chartreuse: "#BFD64A",
        goldenYellow: "#F2C14E",
        periwinkle: "#9EA8E8",
        warmCream: "#F7F3EA",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 60px -28px rgba(38, 58, 113, 0.28)",
      },
      backgroundImage: {
        grain: "radial-gradient(rgba(16, 42, 51, 0.10) 0.65px, transparent 0.65px)",
      },
    },
  },
  plugins: [],
};

export default config;
