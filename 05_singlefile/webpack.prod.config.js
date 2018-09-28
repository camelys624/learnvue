const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // 入口
    entry:{
        // 可以有多个入口，也可以有一个，如果有一个，就默认从这个入口开始分析
        'index':'./src/main.js'
    },
    // 出口
    output:{
        // 指定产出的路径
        path: path.resolve('./dist'),   // 相对转绝对
        filename: "build.js"
    },
    // 声明模块，包含着各个loader
    module:{
        loaders:[   // webpack后面版本可以叫做roles
            { test:/\.css$/,loader:'style-loader!css-loader'},
            // loader:'url-loader?limit=200'; 如果文件小于这个limit，就会生成一个base64文件到build.js中,反之就是源文件
            { test:/\.(jpg|png|gif|svg)$/,loader:'url-loader?limit=4096'},
            { test:/\.less$/,loader:'style-loader!css-loader!less-loader'},
            {
                test:/\.js$/,
                exclude: /node_modules/,    // 不包含node_modules文件夹里面的文件
                loader:'babel-loader',
                options:{
                    presets:['env'],    // 关键字
                    plugins:['transform-runtime']   // 处理函数
                }}
        ],
    },
    // watch: true,    // 监视文件，发生改变，自动产出build.js
    plugins:[
        // 插件的执行顺序与元素索引有关
        new HtmlWebpackPlugin({
            template:'./src/index.html',    // 参照物
        })
    ]
};