import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#1DA1F2",
        subMain: "#5B7083",
        profileMain: "#0F1419",
        dark7: "#EBEEF0",
        dark8: "#F7F9FA",
        dark5: "#5B7083",
      },
      letterSpacing: {
        tighter: "-0.272px",
        header: "0.28px",
      },
      width: {
        72: "72px",
        main: "598px",
        235: "235px",
        255: "255px",
        sidebar: "350px",
      },
      margin: {
        375: "375px",
      },

      height: {
        btn: "30px",
      },
      borderWidth: {
        1: "1px",
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
