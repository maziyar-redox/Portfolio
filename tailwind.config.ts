import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}"
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
      screens: {
        "3xl": "2020px"
      },
      colors: {
        "absolute-white": "#FFF",
        "absolute-black": "#000",
        "red-shade-1": "#dc2626",
        "red-shade-2": "#b91c1c",
        "gray-shade-06": "#0F0F0F",
        "gray-shade-10": "#1A1A1A",
        "gray-shade-12": "#1F1F1F",
        "gray-shade-15": "#262626",
        "gray-shade-20": "#333333",
        "gray-shade-25": "#404040",
        "gray-shade-30": "#4C4C4C",
        "gray-shade-40": "#666666",
        "white-shade-50": "#808080",
        "white-shade-55": "#8C8C8C",
        "white-shade-60": "#999999",
        "white-shade-65": "#A6A6A6",
        "white-shade-70": "#B3B3B3",
        "white-shade-75": "#BFBFBF",
        "white-shade-80": "#CCCCCC",
        "white-shade-90": "#E6E6E6",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        caption: {
          DEFAULT: "hsl(var(--caption))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography")
  ],
};

export default config;