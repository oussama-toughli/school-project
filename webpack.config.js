var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");



module.exports = {
    entry: {
      app: './src/index.js'
    },
  
    output: {
      path: path.join(__dirname, '/dist'),
      publicPath:'/',
      filename: 'main.js'
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, "/dist"),
        port:8080,
        open: true,
        writeToDisk: true,
      
      },

    module: {
        rules: [
    
          {
            test: /\.html$/,
            use: [
              {
                loader: 'html-loader',
                options: {
                  minimize: true
                }
              }
            
            ]
          },

          {
            
            test: /\.(sa|sc|c)ss$/,
                use:[
                  'style-loader',
                  {
                    loader:  MiniCssExtractPlugin.loader,
                    options:{
                      esModule: false
                    }
            
                  },
            
                  'css-loader',
                  'sass-loader'
                ]
            },
            {
              test: /\.(gif|png|jpe?g|svg)$/i,
              use: [
              
                {
                  loader: 'file-loader',
                  options: {
                    name: "[name].[ext]",
                    outputPath: "images",

                  },
                },
              ],
            },

            {
              test: /\.(svg|eot|woff|woff2|ttf)$/,
                use: [
                  {
                    loader: "file-loader", 
                    options: {
                      name: '[name].[ext]',
                      outputPath: "fonts",
                      esModule: false,
                    }
                  }
                ]
            },
            {
              test: require.resolve("jquery"),
              loader: "expose-loader",
              options: {
                exposes: ["$", "jQuery"],
      
              },
            },

        ]
        },




        plugins: [
            new HtmlWebpackPlugin({
              filename: 'index.html',
              template: './src/index.html',
            }),
            new HtmlWebpackPlugin({
              filename: 'registration.html',
              template: './src/registration.html',
            }),
            new HtmlWebpackPlugin({
              filename: 'login.html',
              template: './src/login.html',
            }),
            new HtmlWebpackPlugin({
              filename: 'omar.html',
              template: './src/omar.html',
            }),
            new HtmlWebpackPlugin({
              filename: 'nour.html',
              template: './src/nour.html',
            }),
            
            
            new MiniCssExtractPlugin({ filename: 'css/style.css' }),
            new OptimizeCSSAssetsPlugin({}),
        ]
};