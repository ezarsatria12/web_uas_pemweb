/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  extend: {
    spacing: {},
  },
  plugins: [],
  theme: {
    extend: {
    fontSize: {
      xxl: ["64px", "100.928px"],
      xl: ["32px", "auto"],
    },
    fontFamily: {
      porsche: "porschenext",
    },
    letterSpacing: {
      normal: "0",
      wide: "1.2px",
      wider: ".05em",
      widest: ".1em",
      widest: ".25em",
    },
      height: {
        100: "600px",
        8: "24px",
      },
    },
  },
};

