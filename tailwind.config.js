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

        'status-alive': '#55CC44',
        'status-dead': '#ff4848',
        'status-unknown': '#a8a8a8',

        'blue': '#11B0C8',
        'light-blue': '#C8CAFF',
        'dark-blue': '#070728',

      },
      backgroundImage: {
        'app-background-pattern': "url('/assets/app-background.png')",
        'greeting-section-background-pattern': "url('/assets/home-greeting-section-bg.png')",
        'page-link-card-bg-pattern': "url('/assets/home-page-link-card-bg.png')",
        'decorative-card-bg': "url('/assets/home-decorative-card-bg.png')",
      },
      spacing: {
        'header-height': '75px'
      }
    },
    fontFamily: {
      'primary': ['ibm_plex_mono', 'sans-serif'],
      'decorative': ['permanent_marker', 'sans-serif']
    }
  },
  plugins: [],
}
