const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const CleanWebPackPlugin = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  //devtool: "none", // to remove "eval" in webpack minified file, so that easy to understand
  entry: "./src/index.js",
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new CleanWebPackPlugin()]
});
