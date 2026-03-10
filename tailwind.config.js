/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050508",
        accent: "#2563EB",
        background: "#111111",
        textLight: "#F5F3EE",
        textDark: "#888888"
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        drama: ["DM Serif Display", "serif"],
        data: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
