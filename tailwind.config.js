/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#054C73',
        'primary-black': '#333333',
        'sub-black': '#111111',
        'sub-blue-1': '#DFE9F4',
        'sub-blue-2': '#F2F5FF',
        'sub-black-2' : '#666666',
      },
      // backgroundImage: {
      //   'intro': "url('./src/assets/Mask Group.jpg')",
      // }
    },
  },
  plugins: [],
}

