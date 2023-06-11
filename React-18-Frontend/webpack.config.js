var HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "index.js",
  output: {
    path: __dirname + "/dist",
    filename: "index_bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Guest List Booking System",
      filename: "./src/index.html",
    }),
  ],
  externals: {
    // global app config object
    config: JSON.stringify({
        apiUrl: 'http://localhost:4000'
    })
}
};
