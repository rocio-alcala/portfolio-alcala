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
        mulish: ["var(--font-mulish)"],
        poppins: ["var(--font-poppins)"]
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
        },
        "fade-in": {
          "0%": {
            opacity: "0"
          },
          "100%": {
            opacity: "1"
          }
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(-60px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(60px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        pulse: {
          "0%": {
            transform: "scale(1)"
          },
          "50%": {
            transform: "scale(1.4)"
          },
          "100%": {
            transform: "scale(1)"
          }
        },
        sink: {
          "0%": {
            transform: "translateY(-10px)"
          },
          "50%": {
            transform: "translateY(0)"
          },
          "100%": {
            transform: "translateY(-10px)"
          }
        },
        appear: {
          "0%": {
            width: "0%",
            height: "0%"
          },
          "100%": {
            width: "100%",
            height: "100%"
          }
        },
        shadow: {
          "100%": {
            "box-shadow":
              "0px 7px 10px rgba(0, 0, 0, -0.002) 0px 56px 80px rgba(0, 0, 0, 0.04)"
          }
        }
      },
      animation: {
        "fade-out-top": "fade-out-top 1.8s",
        "fade-out-bottom": "fade-out-bottom 1.8s",
        "fade-in": "fade-in 1s ease-in",
        "fade-in-right": "fade-in-right 1s ease-in-out",
        "fade-in-left": "fade-in-left 1s ease-in-out",
        pulse: "pulse 1s ease-in-out",
        sink: "sink 1s ease-in-out infinite",
        appear: "appear 1s ease"
      }
    }
  },
  plugins: []
};
export default config;
