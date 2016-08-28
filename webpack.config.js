/**
 * Created by hzw on 2016/8/28.
 * connect 342782880
 */
var webpack=require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var path=require("path")

module.exports = {
    entry:{
        app:'./src/js/app.js',
        demo:'./src/js/demo.js'
    },
    output: {
        path: path.join(__dirname,"./src/js"),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
        }]
    },
    plugins: [
        new CommonsChunkPlugin("commons","commons.js"),
        new ExtractTextPlugin("../css/[name].bundle.css"),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        })
    ]
};