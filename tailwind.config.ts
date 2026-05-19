import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        "surface-muted": "rgb(var(--color-surface-muted) / <alpha-value>)",
        primary: "rgb(var(--color-text-primary) / <alpha-value>)",
        muted: "rgb(var(--color-text-muted) / <alpha-value>)",
        soft: "rgb(var(--color-text-soft) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)"
      },
      borderRadius: {
        card: "var(--radius-card)",
        pill: "var(--radius-pill)"
      },
      boxShadow: {
        surface: "0 24px 80px -40px rgba(2, 8, 23, 0.8)"
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"]
      },
      maxWidth: {
        prose: "72ch"
      },
      spacing: {
        "page-x": "var(--space-page-x)",
        "section-y": "var(--space-section-y)"
      }
    }
  },
  plugins: [typography]
};

export default config;
