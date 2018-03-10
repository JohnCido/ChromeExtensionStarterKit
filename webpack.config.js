var fs = require('fs')
var webpack = require('webpack')
var path = require('path')
var CopyFilesPlugin = require('copy-webpack-plugin')
var UglifyJsPlugin = require('webpack-uglify-js-plugin')

const ENV = process.env.NODE_ENV
const isDev = ENV === 'development'

module.exports = {
    mode: ENV,
    devtool: isDev ? 'inline-source-map' : 'nosources-source-map',
    entry: {
        main: path.resolve(__dirname, 'src/js/main.js'),
        content: path.resolve(__dirname, './src/js/content-page/content.js')
    },
    output: {
        path: path.resolve(__dirname, `${ENV}/`),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }, {
                test: /\.json$/,
                exclude: /node_modules/,
                use: 'json-loader'
            }, {
                test: /\.(png|jpg|jpeg|woff|woff2|eot|ttf|svg)$/,
                use: 'url-loader'
            }
        ]
    },

    resolve: {
        extensions: ['js', 'es6', 'json', 'less']
    },

    plugins: [
        new CopyFilesPlugin([
            { from: 'src/manifest.json', to: `./manifest.json` },
            { from: 'src/_locales', to: `./_locales` },
            { from: 'src/img', to: `./img` },
        ], {
            ignore: [ '.*' ],
            copyUnmodified: true,
            debug: 'warning'
        })
    ]
}

if (!isDev) {
    module.exports.plugins.push(
        new UglifyJsPlugin({
            cacheFolder: path.resolve(__dirname, 'cache/uglify'),
            debug: false,
            minimize: true,
            sourceMap: true,
            output: {
                comments: false
            },
            compressor: {
                warnings: false
            },
            output: {
                ascii_only: true,
                beautify: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: ENV
            }
        })
    )
}