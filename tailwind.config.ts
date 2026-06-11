import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: "#00f5ff",
          pink: "#ff4fd8",
          yellow: "#ffe600",
          green: "#00ff88",
          purple: "#b983ff"
        },
        cyber: {
          dark: "#050816",
          mid: "#07111f",
          light: "#0a1428"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"]
      },
      animation: {
        "spin-slow": "spin-slow 4s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        scanline: "scanline 8s linear infinite",
        beam: "beam 2s ease-in-out infinite"
      },
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.1)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        scanline: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 100%" }
        },
        beam: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" }
        }
      },
      backgroundImage: {
        "gradient-neon": "linear-gradient(90deg, #00f5ff, #ff4fd8, #ffe600)",
        "gradient-cyber": "linear-gradient(180deg, #050816 0%, #07111f 100%)",
        "grid-pattern": "linear-gradient(rgba(0,245,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,.08) 1px, transparent 1px)"
      },
      backgroundSize: {
        grid: "42px 42px"
      }
    }
  },
  plugins: []
};

export default config;
