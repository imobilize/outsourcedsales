module.exports = {
  plugins: {
    tailwindcss: {},
    // Explicit browsers + stats stop browserslist from searching parent
    // directories for config files, which Hugo's Node sandbox blocks.
    autoprefixer: {
      overrideBrowserslist: ['defaults'],
      stats: {},
    },
  },
}
