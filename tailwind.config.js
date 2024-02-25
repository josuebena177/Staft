/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '415px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '1.5xl': '1400px',
        '2xl': '1536px',
      },
      boxShadow: {
        'custom-shadow1': '16px 16px 8px 0px rgba(0, 0, 0, 4%)',
        'custom-shadow2': '-16px 0px 8px 0px #0000000A',
        'custom-shadow3': '0px 12px 9px 0px #0000000D',
        'custom-shadow4': '12px 12px 9px 0px #0000000D',
        'custom-shadow5': '-12px -12px 8px 0px #0000000D',
        'custom-shadow6': '0px 16px 8px 0px #0000000D',
        'custom-shadow7': '0px 15px 15px 0px #00000014',
        'custom-shadow8': '0px 12px 8px 0px #0000000D',
        'custom-shadow9': '16px 16px 8px 0px rgba(0, 0, 0, 4%)',
      },
      colors: {
        'deep-black': '#222222',
        'deep-black2': '#666666',
        'deep-black3': '#888888',
        'deep-black4': '#BCBABA',
        'deep-black5': '#EFECEC',
        'deep-green': '#05494C',
        'light-green': '#05494c0d',
        'light-black1': '#B1B0B0',
        'light-black2': '#F3F6F6',
        'light-black3': '#C4C0C0',
        'light-black4': '#9FA3A3',
        'light-black5': '#E8E7E7',
        'light-black6': '#E2DEDE',
        'deep-yellow': '#FFCA02',
        'light-yellow': '#FFFAE6',
        'light-yellow2': '#FFFCF0',
      },
    },
  },
  plugins: [],
}


