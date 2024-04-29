import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "selector",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      fontFamily: {
        inconsolata: ["var(--font-inconsolata)"],
        "source-sans-pro": ["Source Sans Pro"],
        manrope: ["var(--font-manrope)"],
        mulish: ["var(--font-mulish)"]
      },
      colors: {
        "background-light": "#F5F4F3",
        "background-dark": "#211F1A",
        "primary-text-light": "#5D564A",
        "primary-text-dark": "#B1AB9D",
        "secondary-text-light": "#B8B2A6",
        "secondary-text-dark": "#F1EFED",
        "background-secondary-light": "#DEDCD6",
        "background-secondary-dark": "#4C463C"
      },
      keyframes: {
        "fade-out-top": {
          "0%": {
            opacity: "0",
            transform: "translateY(-50%)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0%)"
          }
        },
        "fade-out-bottom": {
          "0%": {
            opacity: "0",
            transform: "translateY(50%)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0%)"
          }
        }
      },
      animation: {
        "fade-out-top": "fade-out-top 1.8s",
        "fade-out-bottom": "fade-out-bottom 1.8s"
      }
    }
  },
  plugins: []
};
export default config;
