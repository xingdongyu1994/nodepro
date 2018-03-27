var webpack =  require('webpack')
var HtmlwebpackPlugin = require('html-webpack-plugin')
var path = require('path')
module.exports = {
  //入口
  entry: './src/index.js',
  //出口
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    publicPath: '/'
  },
  //加载器
  module: {
    loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
        { test: /\.(gif|jpg|png)$/, loader: 'url?limit=8192&name=images/[name].[hash].[ext]' },
        { test: /\.(woff|svg|eot|ttf)$/, loader: 'url?limit=50000&name=fonts/[name].[hash].[ext]' },
        { test: /\.css$/, loader: "style-loader!css-loader" },
    ]
  },  
   //插件
  plugins: [
    new HtmlwebpackPlugin({
      title: 'nodepro',
      filename: './index.html',
      template: './index.html'
    }),
  ],
  //
 
 
}