import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // screens: {
      //   "2xl": "1560px",
      // },
      container: {
        screens: {
          default: "1180px",
          "2xl": "1560px",
          xl: "1280px",
          lg: "1024px",
          md: "768px",
          sm: "640px",
        },
        center: true,
        padding: {
          DEFAULT: "15px",
          // DEFAULT: '5%',
          // md: '7%',
        },
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
