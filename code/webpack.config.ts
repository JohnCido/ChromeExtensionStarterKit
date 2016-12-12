/// <reference path="typings/index.d.ts" />
var fs = require('fs');
var webpack = require('webpack');
var path = require('path');
var CopyFilesPlugin = require('copy-webpack-plugin');
var UglifyJsPlugin = require('webpack-uglify-js-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: {
        main: './src/js/main.ts',
        content: './src/js/content-page/content.ts'
    },
    output: {
        path: './build',
        filename: '[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.es6', 'json', 'ts', 'less']
    },

    plugins: [
        new CopyFilesPlugin([
            { from: 'src/manifest.json', to: './build/manifest.json' },
            { from: 'src/_locales', to: './build/_locales' },
            { from: 'src/img', to: './build/img' },
        ], {
            ignore: [
                '.*',
            ],
            copyUnmodified: true,
            debug: 'warning'
        }),
        new UglifyJsPlugin({
            cacheFolder: './public/chached_uglify',
            debug: true,
            minimize: false,
            sourceMap: true,
            output: {
                comments: false
            },
            compressor: {
                warnings: false
            }
        }),
        new ExtractTextPlugin('[name].css')
    ]
}