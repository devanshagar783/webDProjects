/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "text-blue-500",
    "text-gray-500",
    "text-red-500",
    "text-green-500",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

