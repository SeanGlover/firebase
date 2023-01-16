// in a terminal: Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const config = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    watch: true,
    experiments: {
        topLevelAwait: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
module.exports = config;