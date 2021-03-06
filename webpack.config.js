var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: './app/main',
        port: 1337
    },
    entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:1337/',
      path.resolve(__dirname, 'app/main/index.jsx')
    ],
    output: {
        path: __dirname + '/build',
        publicPath: 'build',
        filename: './bundle.js'
    },
    module: {
        loaders:[
          { test: /\.css$/, include: path.resolve(__dirname, 'app'), loader: 'style-loader!css-loader' },
          { test: /\.js[x]?$/, include: path.resolve(__dirname, 'app'), exclude: /node_modules/, loader: 'babel-loader' },
          { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url?limit=10000!img?progressive=true'}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new OpenBrowserPlugin({ url: 'http://localhost:1337' })
    ]
};
