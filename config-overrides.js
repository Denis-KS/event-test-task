const { override, addBabelPlugin } = require('customize-cra')

module.exports = function(config) {
    return config;
}

module.exports = override(
  addBabelPlugin(
    ['babel-plugin-styled-components', {
      displayName: true,
    }]
  )
)