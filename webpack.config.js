const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point for your application
  entry: './src/index.js',

  // Output configuration
  output: {
    // Output directory for bundled files
    path: __dirname + '/dist',
    // Filename for the JavaScript bundle
    filename: 'bundle.js',
    // Public URL path where bundled files will be served from
    publicPath: '/',
  },

  // Module rules for handling different file types
  module: {
    rules: [
      // JavaScript/JSX files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // CSS files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  // Plugins configuration
  plugins: [
    // HtmlWebpackPlugin to generate HTML file
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],

  // Development server configuration (if needed)
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    hot: true,
  },
};
