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
        { test: /\.less$/, loader: 'style!css!less' },
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
        { test: /\.(gif|jpg|png)$/, loader: 'url?limit=8192&name=images/[name].[hash].[ext]' },
        { test: /\.(woff|svg|eot|ttf)$/, loader: 'url?limit=50000&name=fonts/[name].[hash].[ext]' }
    ]
  },  
   //插件
  plugins: [
    new HtmlwebpackPlugin({
      title: 'nodepro',
      filename: './index.html'
    }),
  ],
  //
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 1111,

    inline: true,
    historyApiFallback: true,

    colors: true,
    stats: 'normal',
  },
 
}