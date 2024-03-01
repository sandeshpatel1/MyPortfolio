const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // other webpack config settings...
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
};
