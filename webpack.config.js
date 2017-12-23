const path = require('path'),
    webpack = require('webpack');


module.exports = {
        entry: {
            'react-echarts': './index.js'
        },
        output: {
            path: path.resolve(__dirname, 'dist/'),
            filename: "[name].js",
            libraryTarget: 'commonjs'
        },
        externals: {
            react: {
                commonjs: 'react',
                amd: 'react'
            },
            echarts: {
                commonjs: 'echarts',
                amd: 'echarts'
            },
            "util-toolkit": 'util-toolkit'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader'
                }
            ]
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin()
        ]
};
