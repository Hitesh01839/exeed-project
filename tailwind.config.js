/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "main-bg": "#000000",
      "nav-bg": "#282828",
      "accent-color": "#3CAEA3",
      "btn-bg": "#3CAEA3",
      "main-text-color": "#FFFFFF",
      "border-color": "#666666",
    },
  },
  plugins: [],
};
