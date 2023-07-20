/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        dark: "#0f172a",
        secondary: "#64748b",
      },

      fontFamily: {
        inter: "Inter",
      },

      screens: {
        "2xl": "1320px",
      },

      backgroundImage: {
        'nama-gambar': "url('/dist/img/head.jpg')",
      },
    },
  },
  plugins: [],
};
