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
        mokoto: ["mokoto", "sans-serif"],
        montserrat: ["montserrat", "sans-serif"],
        oxanium: ["oxanium", "sans-serif"],
        inter: ["inter", "sans-serif"],
      },

      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },

  plugins: [],
};
