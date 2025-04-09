import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/config/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
      // your custom colors, fonts, container, etc.
>>>>>>> b175e7001d43fbb64383e8d7cb893b4812f6fc01
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        progress: {
          "0%": { width: "0%" },
          "100%": { width: "100%" }
        }
      },
      animation: {
        fadeInUp: "fadeInUp 1s forwards",
        progress: "progress 5s linear infinite"
      }
    }
  },
  plugins: []
};
export default config;
