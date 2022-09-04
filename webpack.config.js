const path = require("path"); //built-in : path, http , fs
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  // entry: './src/index.js',

  //multiple entry
  entry: {
    main: "./src/index.js",
    home: "./src/home.js",
  },

  // entry: {
  //     main: ['./src/index.js', './src/test.js']
  // },

  output: {
    // filename: 'app.js',
    // path: path.resolve(__dirname, 'dist'),

    //! cleanup and filename
    // filename: 'bundle.js',
    // path: path.resolve(__dirname, 'build'),
    // clean: true

    //multiple entry
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  mode: "development", // run: npx webpack --mode=development or production
  watch: true, // or false, run: npx webpack --watch
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "My App",
      filename: "index.html",
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    compress: true,
    open: true,
    port: 9000,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
