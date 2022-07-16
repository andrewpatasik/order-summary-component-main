/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        /* primary */
        'paleblue': "#e0e8ff",
        'brightblue': "#3829e0",
        /* neutral */
        'verypaleblue': "#f5f7ff",
        'desaturatedblue': "#7280a7",
        'darkblue': "	#1f2f56",
      },
      fontFamily: {
        "display": ["Red Hat Display"]
      },
      screens: {
        'mobile': '375px',
        'desktop': '1440px'
      }
    },
  },
  plugins: [],
};
