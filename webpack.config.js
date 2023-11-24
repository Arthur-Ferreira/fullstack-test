const path = require('path');

// Webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  // Entry file
  mode: 'development',
  entry: './frontend/index.js',
  devServer: {
    open: true,
    static: {
      directory: path.join(__dirname, 'frontend')
    },
    port: 3030,
  },
  
  // Output file
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/build',
    assetModuleFilename: 'public/assets/[hash][ext][query]'
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        parallel: true,
        terserOptions: {
          sourceMap: true
        },
      }),
      new CssMinimizerWebpackPlugin({})
    ]
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        // { context: 'frontend/', from: '**/*.ejs' },
        { context: 'frontend/', from: 'public/assets/**' }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './frontend/views/index.ejs',
    }),
    new HtmlWebpackPlugin({
      filename: 'post-item.html',
      template: './frontend/views/post-item.ejs',
      
    })
  ],

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.ejs$/i,
        use: ['html-loader', 'template-ejs-loader'],
      },
      {
        test: /\.js$/i,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ]
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset/resource'
      },
    ],
  },


}