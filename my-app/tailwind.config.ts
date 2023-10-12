import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Kanit, sans-serif"'],
        secondary: ["Playfair Display"],
      },
      colors: {
        "button-color-base": "#7a857b",
        "button-hover": "#626A62",
        "button-button-shadow-base": "#2d8634",
        "button-green-shadow-hover": "#206125",
        "button-red-shadow-base": "#ff0048",
        "button-red-shadow-hover": "#b30033",
      },
      fontSize: {
        default: "18px",
        header: "40px",
        "sub-header": "32px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
