const webpack = require('webpack');

module.exports = function override(config, env) {
  // Ignore source map warnings
  config.plugins.push(
    new webpack.SourceMapDevToolPlugin({
      filename: null,
      test: /\.(css|js)$/,
    })
  );

  return config;
};
