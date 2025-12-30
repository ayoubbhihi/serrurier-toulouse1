/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./*.html",
      "./components/**/*.html",
      "./assets/js/**/*.js"
    ],
    theme: {
      extend: {
        fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        },
      },
    },
    plugins: [
      require("daisyui")
    ],
    daisyui: {
      themes: ["light"],
    },
  }
  