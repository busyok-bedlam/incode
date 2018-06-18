const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {


    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "semantic ui app",
            template: path.join(__dirname,"src","template.ejs")
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: "source-map"
}


module.exports = config;
