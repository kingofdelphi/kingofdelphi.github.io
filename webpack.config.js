const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('/'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    node : {
        __filename: true,
        __dirname: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader', 'eslint-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]__[local]--[hash:base64:5]'
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]__[local]--[hash:base64:5]'
                            }
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(eot|svg|ttf|woff|png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            },
        ]
    },
    devServer: {
        stats: {
            hash: false,
            version: false,
            timings: true,
            assets: false,
            chunks: false,
            modules: false,
            reasons: false,
            children: false,
            source: false,
            errors: true,
            errorDetails: true,
            warnings: true,
            publicPath: false
        },
        historyApiFallback: true,
    },
    plugins: [HtmlWebpackPluginConfig /* , new UglifyJSPlugin() */ ]
};
