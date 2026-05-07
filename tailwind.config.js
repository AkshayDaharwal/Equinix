// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
      fontFamily: {
        mokoto: ["Mokoto", "sans-serif"],
         montserrat: ["Montserrat", "sans-serif"],
         oxanium: ["Oxanium", "sans-serif"],
           inter: ["Inter", "sans-serif"], 
      },
    },
  },
  plugins: [],
}
