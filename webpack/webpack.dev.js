const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const WebpackBar = require('webpackbar')

module.exports = {
    mode: 'development',
    devServer: {
        hot: true
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('dieungocbao')
        }),
        new ReactRefreshWebpackPlugin(),
        new WebpackBar()
    ]
}