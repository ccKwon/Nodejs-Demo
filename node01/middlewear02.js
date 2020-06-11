// 中间件
const express = require('express');
const app = express();


// 局部中间件
app.get('/test1', (req, res, next) => {
    console.log("fun1");
    next();
},
(req, res) => {
    console.log("fun2");
    res.send("test1")
}
)


app.listen(3000, () => {
    console.log('server start');
})