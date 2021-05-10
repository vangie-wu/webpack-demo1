const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: 'src/assets/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:["file-loader"]
            },
            {
                test:/\.styl$/,
                use:['style-loader','css-loader','stylus-loader']
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // 将 JS 字符串生成为 style 节点
                    "style-loader",
                    // 将 CSS 转化成 CommonJS 模块
                    "css-loader",
                    // 将 Sass 编译成 CSS
                    {
                        loader:"sass-loader",
                        options :{
                            implementation:require('dart-sass')
                        }
                    }
                ],
            },
        ],
    },
}

