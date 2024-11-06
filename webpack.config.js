const path = require('path');

module.exports = {
  entry: './src/index.js',  // entry point for bundling
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),  // output location
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],  // processes CSS files
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // copies and injects JS into HTML
    }),
  ],
  mode: 'development',  // for production, change this to 'production'
};
