import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // VS Code dark theme palette
        background: "#0d1117",       // GitHub dark / deep editor bg
        surface: "#161b22",          // editor panel
        "surface-2": "#1c2128",      // slightly elevated
        "surface-3": "#21262d",      // hover states
        accent: "#58a6ff",           // VS Code blue
        "accent-dim": "#388bfd",
        "accent-green": "#3fb950",   // terminal green — used sparingly
        "accent-orange": "#d29922",  // warning / highlight
        "accent-purple": "#bc8cff",  // type annotations
        "text-primary": "#e6edf3",
        "text-secondary": "#8b949e",
        "text-muted": "#484f58",
        border: "#21262d",
        "border-hover": "#30363d",
        "border-accent": "#388bfd44",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "'Fira Code'", "monospace"],
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.4rem, 6vw, 4.2rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(1.6rem, 3.5vw, 2.4rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      borderRadius: {
        card: "6px",
        sm: "4px",
      },
      boxShadow: {
        card: "0 0 0 1px #21262d",
        "card-hover": "0 0 0 1px #388bfd44",
        glow: "0 0 20px #58a6ff18",
      },
    },
  },
  plugins: [],
};

export default config;
