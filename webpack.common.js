const path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: {
        main: "./src/index.js",
    }, module: {
        rules: [{
            test: /\.html$/, use: ["html-loader"]
        }, {
            test: /\.(svg|png|jpg|gif)$/i, type: 'asset/resource',
        }, {
            test: /\.css$/, sideEffects: true, use: [MiniCssExtractPlugin.loader, "css-loader",],
        }, {test: /\.json$/, type: 'json'}]
    }, plugins: [new MiniCssExtractPlugin({filename: "[name]-[hash].css"}),],
};
