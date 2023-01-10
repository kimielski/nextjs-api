/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    darkMode: "class", // or 'media' or false
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        gray: {
          50: "#f9f9f9",
          100: "#efefef",
          200: "#cccccc",
          300: "#b6b6b6",
          400: "#d9d9d9",
          500: "#7d7d7d",
          600: "#686465",
          700: "#4d4948",
          800: "#323232",
          900: "#1c1c1c",
        },
        blue: {
          500: "#99ecff;",
          700: "#68e1fd;",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundOpacity: ["dark"],
    },
  },
  plugins: [],
};
