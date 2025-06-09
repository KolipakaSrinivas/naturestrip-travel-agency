/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // For Next.js /app directory
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // For Next.js /pages directory (if used)
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "DM-Sans": ["DM Sans"]
      }
    }
  },
  plugins: []
};
