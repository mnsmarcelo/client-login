const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      }, {
        loader: 'sass-loader',
      }],
    }, {
      test: /\.(gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    }],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    writeToDisk: true,
    historyApiFallback: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.dev.html',
    }),
    new DefinePlugin({
      'process.env.API_URL': 'url_here',
    }),
  ],
});
