const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true, // <-- !!IMPORTANT!!
                            implementation: require.resolve("node-sass"),
                            webpackImporter: false,
                        }
                    }
                ]
            },
            {
                test: /\.m?js$/,
                resolve: {
                  fullySpecified: false, // disable the behaviour
                },
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: './fonts/[name][ext]',
                },
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                resourceQuery: { not: [/url/] },
                use: [{
                    loader: '@svgr/webpack',
                    options: { 
                        native: false, 
                        svgoConfig: {
                          plugins: [
                            {
                              name: 'removeViewBox',
                              active: false
                            },
                            {
                              name: 'removeDimensions',
                              active: true
                            }
                          ]
                        }
                    }
                }],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(jpg|png|gif|webp)$/i,
                type: 'asset/resource'
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    entry: {
        index: path.resolve(__dirname, "source", "index.tsx")
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: path.resolve(__dirname, "public", "favicon/page_icon.png"),
            template: path.resolve(__dirname, "source", "index.html")
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        fallback: { "util": false }
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
      },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: 'index.js',
        assetModuleFilename: 'images/[hash][ext][query]',
        publicPath: '/'
    }

}
