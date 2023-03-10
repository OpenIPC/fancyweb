const notFoundError = (name) => `Please pass the ${name} parameter to plugin`

const defaultParams = {
  regex: /[\w-/:]+(?<!:)/g,
}

module.exports = (config, env, helpers, params = defaultParams) => {
  if (!config) throw new Error(notFoundError('config'))
  if (!env) throw new Error(notFoundError('env'))
  if (!helpers) throw new Error(notFoundError('helpers'))
  // const purgecss = require('@fullhuman/postcss-purgecss')({
  //   // Specify the paths to all of the template files in your project
  //   content: ['./src/**/*.tsx', './src/**/*.js', './src/**/*.jsx'],

  //   // Include any special characters you're using in this regular expression
  //   defaultExtractor: (content) => content.match(params.regex) || [],
  // })

  const postCssLoaders = helpers.getLoadersByName(config, 'postcss-loader')
  postCssLoaders.forEach(({ loader }) => {
    const plugins = loader.options.plugins

    // Add tailwind css at the top.
    plugins.pop(require('tailwindcss'))
  })
  if (env.isProd) {
    config.devtool = false // disable sourcemaps
  }
  return config
}
