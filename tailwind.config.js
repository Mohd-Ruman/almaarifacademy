/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        whiteprimary:"var(--white-primary)",
        whitesecondary:"var(--white-secondary)",
        darkprimary:"var(--dark-primary)",
        darksecondary:"var(--dark-secondary)",
        blueprimary:"var(--blue-primary)",
        bluesecondary:"var(--blue-secondary)",
        bluelight:"var(--blue-light)",
      },
    },
  },
  plugins: [],
}