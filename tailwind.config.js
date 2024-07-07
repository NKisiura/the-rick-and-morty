/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        'primary': '#F7F7F7',
        'accent': '#87F54E',
        'light-blue': '#11B0C8'
      }
    },
    fontFamily: {
      'primary': ['ibm_plex_mono', 'sans-serif'],
      'decorative': ['permanent_marker', 'sans-serif']
    }
  },
  plugins: [],
}
