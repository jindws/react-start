var webpack = require('webpack')
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

mod  entry: {
      apps: './src/app/app.jsx',
      common: [
          "react-dom",
          "react-router-dom",
      ]
  },

    // output: {
    //     path: path.resolve(__dirname, './dist'),
    //     filename: 'app.min.js',
    //     publicPath: '/',
    // },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].min.js', //最终打包生产的文件名
        publicPath: 'https://cdn.mizlicai.com/mizdai/inapp-2.0/',
    },

    devServer: {
        historyApiFallback: true,
        noInfo: true,
        inline: true
    },

    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.(css|scss)$/,
                loader: "style-loader!css-loader!postcss-loader!sass-loader"
            }
        ]
    },

    // devtool: 'hidden-source-map',
    devtool: 'nosources-source-map',

    watch: true,

    // performance: {
    //     hints: false
    // },
    plugins: [
        // 开发环境配置
        new webpack.DefinePlugin({
            __LOCAL__: false, // 测试环境
            __PRO__: true, // 生产环境
            'process.env': {
                'NODE_ENV': '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({template: './index.html'}),
        new webpack.optimize.CommonsChunkPlugin({names: ['common'], minChunks: Infinity}),
        new webpack.BannerPlugin("Copyright HONGYUANZHANG inc."),
    ]

}
