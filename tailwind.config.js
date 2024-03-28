/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'background1': "url('/src/assets/LilaBg.jpg')",
  },
  }},
  plugins: [],
};
