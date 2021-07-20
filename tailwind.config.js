module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        animateLeft: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-256px)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
