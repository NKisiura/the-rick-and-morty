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
        'app-background': '#000910',
        'primary': '#F7F7F7',
        'accent': '#87F54E',
        'light-blue': '#11B0C8'
      },
      backgroundImage: {
        'app-background-pattern': "url('/assets/app-background.png')",
        'greeting-section-background-pattern': "url('/assets/home-greeting-section-bg.png')",
      }
    },
    fontFamily: {
      'primary': ['ibm_plex_mono', 'sans-serif'],
      'decorative': ['permanent_marker', 'sans-serif']
    }
  },
  plugins: [],
}
