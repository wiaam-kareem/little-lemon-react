/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary1: "#495E57",
        primary2: "#F4CE14",
        secondary1: "#EE9972",
        secondary2: "#FBDABB",
        lightGrey: "#EDEFEE",
        black: "#333333",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        Karla: ["Karla", "sans-serif"],
        markazi: ["Markazi Text", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        md: "0.95rem",
        "2xs": "0.6rem",
        "3xs": "0.5rem",
      },
    },
  },
  plugins: [],
};
