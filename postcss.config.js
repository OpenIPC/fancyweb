const combineSelectors = require('postcss-combine-duplicated-selectors')

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    combineSelectors({ removeDuplicatedProperties: true }),
    require('tailwindcss')('./tailwind.js'),
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
  ],
}
