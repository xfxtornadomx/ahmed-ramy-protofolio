/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include your React files
    "./node_modules/flowbite-react/**/*.js", // Include Flowbite React components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"), // Add Flowbite plugin
  ],
};
