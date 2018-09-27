module.exports = {
    // 入口
    entry:{
        // 可以有多个入口，也可以有一个，如果有一个，就默认从这个入口开始分析
        'index':'./main.js'
    },
    // 出口
    output:{
        filename: "./build.js"
    }
};