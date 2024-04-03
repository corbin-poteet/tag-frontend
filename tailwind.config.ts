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
        "thrive-blue": "#00A5E6",
        "thrive-green": "#9BD606",
        "blue-primary": "#2D759F",
        "blue-secondary": "#E8F8FF",
        "blue-primary-dark": "#235F7F",
        "red-primary": "#9f382d",
        "red-secondary": "#ffeae8",
        "red-primary-dark": "#7f2d23",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }
    }
  },
  plugins: [],
};
export default config;
