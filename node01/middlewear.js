// 中间件
const express = require('express');
const app = express();

// 相当于拦截器
// app.use('/', (req, res, next) => {
//     console.log("中间件");
//     let { token } = req.query;

//     if (token) {
//         // 是否继续往下执行

//         next();
//     } else {
//         res.send('缺少token');
//     }
// })

// 如果是拦截根目录 则可省略 与上面一样
app.use((req, res, next) => {
    console.log("中间件");
    let { token } = req.query;

    if (token) {
        // 是否继续往下执行

        next();
    } else {
        res.send('缺少token');
    }
})


app.get('/test1', (req, res) => {
    console.log("test1");
    // let { token } = req.query;

    // if (token) {
    //     res.send('ok');
    // } else {
    //     res.send('error');
    // }
    res.send("test1")
})

app.get('/test2', (req, res) => {
    let { token } = req.query;

    // if (token) {
    //     res.send('ok');
    // } else {
    //     res.send('error');
    // }
})

app.listen(3000, () => {
    console.log('server start');
})