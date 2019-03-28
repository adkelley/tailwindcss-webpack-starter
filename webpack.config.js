const path = require('path'),
      glob = require ('glob'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      PurgeCssPlugin = require ('purgecss-webpack-plugin');

const PATHS = {
  src: path.join (__dirname, 'src')
};

module.exports = {
  context: __dirname,
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-bundle.js'
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        enforce: 'pre',
        exclude: /node_modules/,
        test: /\.jsx?$/,
        loader: 'eslint-loader'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      chunkFilename: 'styles.css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new PurgeCssPlugin ({
      paths: glob.sync (`${PATHS.src}/**/*`, { nodir: true }),
    })
  ]
}
