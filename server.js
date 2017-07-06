var express = require("express");
var path = require("path");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");
var serveStatic = require('serve-static')

var app = express();
var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: "/" // Same as `output.publicPath` in most cases.
}));

app.use(serveStatic(path.join(__dirname, 'static'), {'index': ['index.html']}))

app.listen(3000, function () {
  console.log("Listening on port 3000!");
});