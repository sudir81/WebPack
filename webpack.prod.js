const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  //devtool: "none", // to remove "eval" in webpack minified file, so that easy to understand
  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new CleanWebpackPlugin()]
});
