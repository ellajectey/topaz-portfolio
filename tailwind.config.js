/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '1px 1px 1px rgba(0, 0, 0, 0.6)', // Define your custom text-shadow value
      },
    },
  },
  plugins: [],
}

