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
    extend: {},
    fontFamily: {
      'decorative': ['permanent_marker'],
      'primary': ['ibm_plex_mono']
    }
  },
  plugins: [],
}
