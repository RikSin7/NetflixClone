/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'netflix-bg': "url('/image/netflix-bg.jpg')", // Ensure the path is correct
        'edge-dark-gradient':
          'radial-gradient(circle, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.8) 100%)'
      },
      screens: {
        xs: { max: '377px' },
        xsplus: { min: '377px' },
        xss: { max: '292px' }
      }
    }
  },
  plugins: []
}
