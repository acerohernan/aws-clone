/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'orange-primary': '#ec7211',
        'orange-secondary': '#EB5F07',
        'gray-primary': '#F2F3F3',
        'gray-secondary': '#FAFAFA',
        'gray-thirdty': '#eaeded',
        'gray-forty': '#879596',
        'white-primary': '#FFFFFF',
        'black-primary': '#161926',
        'black-secondary': '#545b64',
        'black-thirdty': '#232F3E',
        'skyblue-primary': '#0875C4',
        'skyblue-secondary': '#0073bb',
        'skyblue-thirdty': '#f1faff',
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        md: '16px',
      },
      screens: {
        xs: '450px',
      },
    },
  },
  plugins: [],
};
