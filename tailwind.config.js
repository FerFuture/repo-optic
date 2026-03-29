/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF9F6',
        creamAlt: '#F9F7F0',
        teal: {
          DEFAULT: '#006D77',
          vivid: '#1B7B7B',
        },
        sand: '#DED5C8',
        sandWarm: '#E8DFD0',
        charcoal: '#2C2C2C',
        ink: '#333333',
        /** Superficies modo oscuro (tono verdoso, acorde a la marca) */
        night: '#121916',
        nightCard: '#1a2320',
        nightMuted: '#2a3430',
        nightTeal: '#6eb8b3',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
