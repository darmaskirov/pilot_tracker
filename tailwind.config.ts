import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        accent: "hsl(var(--accent))",
        success: "hsl(var(--success))",
        danger: "hsl(var(--danger))",
      },
      borderRadius: {
        xl: "1.25rem",
        lg: "1rem",
        md: "0.75rem",
      },
      boxShadow: {
        panel:
          "0 24px 90px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.04)",
        neon: "0 0 24px rgba(183, 0, 255, 0.36), 0 0 60px rgba(0, 157, 255, 0.18)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(rgba(255,255,255,0.65), rgba(255,255,255,0.96)), linear-gradient(rgba(14, 23, 38, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 23, 38, 0.08) 1px, transparent 1px)",
        "neon-frame":
          "linear-gradient(135deg, rgba(191, 0, 255, 0.35), rgba(0, 191, 255, 0.3))",
      },
    },
  },
  plugins: [],
};

export default config;
