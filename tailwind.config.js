/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'intro-img': "url('https://i.pinimg.com/736x/1e/6c/ae/1e6cae8d53ac733a14560cb87fafd068.jpg')",
      }
    }
  },
  plugins: [],
}