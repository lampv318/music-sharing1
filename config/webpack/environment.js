const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

// https://github.com/rails/webpacker/issues/1119
environment.loaders.get('sass').use.splice(-1, 0, {
  loader: 'resolve-url-loader'
})

environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    jquery: 'jquery',
    'window.jQuery': 'jquery',
    Popper: ['popper.js', 'default'],
    'noUiSlider': 'nouislider'
  })
)
const typescript =  require('./loaders/typescript')

environment.loaders.prepend('typescript', typescript)
module.exports = environment
