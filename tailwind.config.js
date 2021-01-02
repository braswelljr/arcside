module.exports = {
  purge: {
    mode: "all",
    enabled: false,
    content: ["./src/**/*.{js, jsx, ts, tsx}", "./public/index.html"],
    preserveHtmlElements: true
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mulish: ["'Mulish'", "sans-serif"]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
