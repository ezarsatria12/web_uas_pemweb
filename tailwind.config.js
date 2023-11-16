/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  extend: {
    spacing: {},
  },
  plugins: [require('flowbite/plugin')],
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
        102: "550px",
        8: "24px",
      },
      width: {
        102: "26rem",
        100: "1000px",
        101: "550px",
      },
      dropShadow: {
        "3xl": "7px 8px 9px rgba(0, 0, 0, 0.10)",
      },
    },
  },
};

