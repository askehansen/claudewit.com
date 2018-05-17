var tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-cssnext'),
    require('cssnano'),
    tailwindcss('./tailwind.js'),
  ]
}
