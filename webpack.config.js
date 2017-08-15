var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: './src/public/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    ]
  },
  devServer: {
    historyApiFallback: true,
    proxy:{
      '**':{
        target:'http://localhost:3000',
        changeOrigin:true,
        secure:false
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.html'                                                                                                                                  
    })
  ]
};

module.exports = config;