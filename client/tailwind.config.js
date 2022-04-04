module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'familyMatters': {
          'primary': "#233D4D",
          'secondary': '#FCCA46',
          'secondary-2': '#F0F0F0',
          'accent': '#FE7F2D',
          'danger': '#E34D4D',
        }
      },
    },
  },
  plugins: [],
}
