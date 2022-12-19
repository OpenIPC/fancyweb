import path from "path";
import webpack from "webpack";
import autoprefixer from "autoprefixer";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
const WebpackModules = require("webpack-modules");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: "./build",
    filename: "bundle.js",
  },
  resolve: {
    modulesDirectories: [
      path.resolve(__dirname, "node_modules"),
      "node_modules",
    ],
    extensions: ["", ".jsx", ".scss", ".js", ".json"],
    alias: {
      react: "preact-compat",
      "react-dom": "preact-compat",
      "react-addons-css-transition-group": "rc-css-transition-group",
    },
  },
  module: {
    preLoaders: [
      // {
      // 	exclude: /src\//,
      // 	loader: 'source-map'
      // }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel",
      },
    ],
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new WebpackModules(),
    new ExtractTextPlugin("style.css", { allChunks: true }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ].concat(
    process.env.ENVIRONMENT === "production"
      ? [
          new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production"),
          }),
          new webpack.optimize.OccurenceOrderPlugin(),
        ]
      : []
  ),
  stats: { colors: true },
  devServer: {
    port: process.env.PORT || 8080,
    contentBase: "./src",
    historyApiFallback: true,
  },
};
