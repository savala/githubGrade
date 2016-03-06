var HtmlWebpackPlugin = require('html-webpack-plugin')

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});
module.exports = {
    entry: [
        "./app/app.js",
    ],

    output: {
        filename: "app.js",
        path: __dirname + "/dist"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["react-hot", "babel-loader"],
            },
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}
