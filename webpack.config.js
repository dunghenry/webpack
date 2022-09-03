const path = require('path'); //built-in : path, http , fs
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        // filename: 'app.js',
        // path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        clean: true
    },
    // mode: 'development', // run: npx webpack --mode=development or production
    // watch: true, // or false, run: npx webpack --watch
    plugins:[
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'index.html',
        }),
    ]
}
