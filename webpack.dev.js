const { DefinePlugin } = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    module: {
        rules: [{
            test: /\.ts(x?)$/,
            loader: 'ts-loader',
            exclude: /ńode_modules/
        }, {
            test: /\.scss$/,
            use: [{
                loader: 'style-loader',
            }, {
                loader: 'css-loader',
                options: {
                    modules: true,
                }
            }, {
                loader: 'sass-loader',
            }],
        }],
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './public',
        writeToDisk: true,
        historyApiFallback: true,
        port: 3000,
    },
})
