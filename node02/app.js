const express = require('express');
const app = express();
const db = require('./db/connect');
const bodyparser = require('body-parser');


app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

// 引入路由
const userRouter = require('./router/userRouter');
const { urlencoded } = require('body-parser');

app.use('/user', userRouter);

app.listen(3000, () => {
    console.log('server start');
})