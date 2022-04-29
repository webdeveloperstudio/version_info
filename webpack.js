const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', //production
    entry: './index.js',
    output: {
        filename: '[name].[contenthash].app.js',
        path: path.resolve(__dirname, './dist'),
        clean: true
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }]
    },
    plugins: [new HtmlWebpackPlugin()]
};