
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        cyberturquoise: "#0bcfce",
        cyberblue: "#37a1da",
        cyberpurple: "#7067e8",
        cybernavy: "#000418",
        primary: {
          DEFAULT: "#0bcfce",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#37a1da",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#7067e8",
          foreground: "#ffffff",
        },
      },
      fontFamily: {
        armenian: ["Noto Sans Armenian", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
