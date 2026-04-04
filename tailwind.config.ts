import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0A0A0A",
        "bg-secondary": "#111111",
        "bg-card": "#1A1A1A",
        accent: "#E3000F",
        "accent-light": "#FF1A2A",
        "text-primary": "#F9FAFB",
        "text-secondary": "#9CA3AF",
        border: "#222222",
        success: "#10B981",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "Impact", "sans-serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        bebas: ["var(--font-bebas)", "Impact", "Arial Narrow", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(227,0,15,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(227,0,15,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
    },
  },
  plugins: [],
};
export default config;
