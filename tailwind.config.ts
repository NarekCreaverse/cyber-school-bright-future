
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
        
        /* Legacy cyber colors for backward compatibility */
        cyberturquoise: "hsl(191 94% 42%)",
        cyberblue: "hsl(212 87% 54%)",
        cyberpurple: "hsl(262 74% 62%)",
        cybernavy: "hsl(240 100% 3%)",
        
        /* Tech Innovation Semantic Colors */
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        
        /* Tech Innovation Extended Palette */
        "tech-navy": {
          DEFAULT: "hsl(var(--tech-navy))",
          light: "hsl(var(--tech-navy-light))",
        },
        "neural-gray": {
          DEFAULT: "hsl(var(--neural-gray))",
          light: "hsl(var(--neural-light))",
        },
        "quantum-orange": {
          DEFAULT: "hsl(var(--quantum-orange))",
          light: "hsl(var(--quantum-orange-light))",
        },
      },
      backgroundImage: {
        "gradient-cyber": "var(--gradient-cyber)",
        "gradient-neural": "var(--gradient-neural)",
        "gradient-quantum": "var(--gradient-quantum)",
      },
      boxShadow: {
        cyber: "var(--shadow-cyber)",
        purple: "var(--shadow-purple)",
        glow: "var(--glow-cyber)",
      },
      fontFamily: {
        armenian: ["Noto Sans Armenian", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
