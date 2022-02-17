const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      dark: "#1F2626",
      light: "#FFFFFF",
      gray: {
        700: "#272E2E",
        500: "#2D3838",
        300: "#B2C0C1",
        100: "#EBF4F5",
      },
      teal: "#0BC1CC",
      orange: "#FF570A",
      red: "#F64949",
    },
    fontFamily: {
      sans: ["Red Hat Display", "sans-serif"],
    },
    boxShadow: {
      DEFAULT: "0 4px 32px 0 rgba(3, 57, 61, 0.08)",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        "2xl": "6rem",
      },
    },
    borderRadius: {
      DEFAULT: "0.5rem",
    },
    fontSize: {
      "3xl": ["1.75rem", "1.75rem"],
      "2xl": ["1.5rem", "1.5rem"],
      xl: ["1.25rem", "1.875rem"],
      lg: ["1.125rem", "1.6875rem"],
      base: ["1rem", "1.5rem"],
      sm: ["0.75rem", "1.125rem"],
    },
    transitionDuration: {
      DEFAULT: "0.75s",
    },
    transitionTimingFunction: {
      DEFAULT: "cubic-bezier(0,1.5,1,1.5)",
    },
  },
  plugins: [],
};
