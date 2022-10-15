/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('../public/assets/test4.jpg')",
      },
      backgroundSize: {
        "100%": "100%",
      },
      colors: {
        redish: "#d95252",
        mirage: "#181a28",
        blueGrey: "#64758c",
      },
      gridTemplateRows: {
        work: "auto 1fr 1fr",
      },
      height: {
        60: "60vh",
        70: "70vh",
        80: "80vh",
        90: "90vh",
      },
    },
  },
  plugins: [],
};
