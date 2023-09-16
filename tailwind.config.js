module.exports = {
  content: ["./*.html", "./assets/**/*.js"],
  theme: {
    colors: {
      'primary': '#7c3aed'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailgrids/plugin")],
};
