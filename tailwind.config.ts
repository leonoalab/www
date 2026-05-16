import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#243044",
        paper: "#FFFCF7",
        cloud: "#F5F9FF",
        bluebolt: "#2F80ED",
        violetlab: "#8E7CF6",
        coral: "#FF7A59",
        aqua: "#2FBFA5",
        citrus: "#F7C948",
        amberline: "#FFB86B",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(36, 48, 68, 0.08)",
        lift: "0 20px 55px rgba(47, 128, 237, 0.10)",
        color: "0 18px 45px rgba(47, 128, 237, 0.12)",
      },
      borderRadius: {
        xxl: "2rem",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
