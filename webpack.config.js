const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: "./app/js/main.js",
    output: {
        path: __dirname,
        filename: "./app/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                  presets: 'es2015',
                }
            },
            {
                test: /\.html&/,
                exclude: /node_modules/,
                loader: "html-loader",
            }
        ]
    }
};