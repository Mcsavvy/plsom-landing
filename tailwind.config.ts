import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Primary Colors
        plsom: {
          navy: "#1B3668", // Navy Blue
          blue: "#2E5BA8", // Royal Blue
          red: "#C41E3A", // Deep Red
          gold: "#FFD700", // Gold
        },
        // Secondary Colors
        "plsom-secondary": {
          blue: "#EBF3FF", // Light Blue
          gold: "#F9E4A9", // Soft Gold
          burgundy: "#800020", // Burgundy
          white: "#F8F9FA", // Pearl White
        },
        // Accent Colors
        "plsom-accent": {
          blue: "#4682B4", // Steel Blue
          red: "#DC143C", // Crimson
          gold: "#FFBA08", // Golden Yellow
        },
      },
      gradients: {
        "plsom-blue": "linear-gradient(to right, #2E5BA8, #1B3668)",
        "plsom-red": "linear-gradient(to right, #C41E3A, #800020)",
        "plsom-gold": "linear-gradient(to right, #FFD700, #F9E4A9)",
      },
      backgroundImage: {
        "gradient-plsom-blue": "linear-gradient(to right, #2E5BA8, #1B3668)",
        "gradient-plsom-red": "linear-gradient(to right, #C41E3A, #800020)",
        "gradient-plsom-gold": "linear-gradient(to right, #FFD700, #F9E4A9)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        gradient: "gradient 15s ease infinite",
        blob: "blob 7s infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
