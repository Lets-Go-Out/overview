const path = require('path');

module.exports = {
  mode: 'production',
  watch: true,
  entry: './client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
};
