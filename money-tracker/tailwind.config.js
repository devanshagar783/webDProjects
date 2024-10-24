/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    safelist: [
      "text-blue-500",
      "text-gray-500",
      "text-red-500",
      "text-green-500",
    ],
    theme: {
        extend: {},
        color: {
            'green': 'green',
            'red': 'red',
            'blue': 'blue',
            'black': 'black',
            'white': 'white',
            // '': '',
        }
    },
    plugins: [],
};