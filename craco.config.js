const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  style: {
    postcss: {
      plugins: [
        require("autoprefixer"),
        purgecss({
          content: [
            "./public/index.html",
            "./src/**/*.jsx",
            "./src/**/*.js",
            "./src/**/*.tsx",
            "./src/**/*.ts"
          ]
        })
      ]
    }
  }
};
