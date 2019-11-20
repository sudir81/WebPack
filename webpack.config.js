const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  //devtool: "none", // to remove "eval" in webpack minified file, so that easy to understand
  entry: "./src/index.js",
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      // // css loader
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"]
      // },
      // scss loader
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
  ]
};
