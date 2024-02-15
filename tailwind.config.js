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
        '2xl': '1536px',
      },
      boxShadow: {
        'custom-shadow1': '16px 16px 8px 0px rgba(0, 0, 0, 0.1)',
        'custom-shadow2': '-16px 0px 8px 0px #0000000A',
        'custom-shadow3': '0px 12px 9px 0px #0000000D',
        'custom-shadow4': '12px 12px 9px 0px #0000000D',
        'custom-shadow5': '-12px -12px 8px 0px #0000000D',
        'custom-shadow6': '0px 16px 8px 0px #0000000D',
        'custom-shadow7': '0px 15px 15px 0px #00000014',
        'custom-shadow8': '0px 12px 8px 0px #0000000D',
      },
    },
  },
  plugins: [],
}


