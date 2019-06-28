const HtmlWepackPlugin = require('html-webpack-plugin')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = {

  // 路径上下文
  context: path.resolve(__dirname, '../'),

  // 入口js文件 -- 该项目是单入口
  entry: './src/index.js',

  // 输出目录
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },

  // 本地服务的相关配置
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 3002
  },

  module: {

    // 检测相应文件，并使用webpack相关loader去打包该文件
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          optimizeSSR: false
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/img/[name].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[ext]'
        }
      },
      {
        test: /\.(woff|ttf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
        loader: 'url-loader?limit=100000',
        options: {
          limit: 10000,
          name: 'static/fonts/[name].[ext]'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },

  // target: 'node',

  // externals: [nodeExternals()],

  plugins: [
    // 打包所需的入口html文件
    new HtmlWepackPlugin({
      template: './src/index.html'
    }),
    // 打包前清除之前的打包目录
    new CleanWebpackPlugin()
  ],

  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
}
