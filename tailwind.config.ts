import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        midnightBlue : "#004866",
        tropicalTeal : "#2fA4A0",
        emeraldGreen : "#3dc88a",
        goldenYellow : "#ffd116",
        sunsetOrange : "#e55620",
        "crimsonRed" : "#b22234",
        peachPink : "#ffb8a4",
        softBeige : "#efe9dc"
      }
    },
  },
  plugins: [],
};
export default config;
