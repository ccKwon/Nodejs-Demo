const express = require('express');
const app = express();
const db = require('./db/connect');
const bodyparser = require('body-parser');
const path = require('path');
const cors = require('cors');

// 解决跨域
app.use(cors());

// 解析POST请求体
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.use('/public',express.static(path.join(__dirname,'/static')))

// 引入路由
const userRouter = require('./router/userRouter');
const foodRouter = require('./router/foodRouter');
const fileRouter = require('./router/fileRouter');

// app.use('/user', (req,res,next), userRouter);

app.use('/user', userRouter);
app.use('/food', foodRouter);
app.use('/file', fileRouter);

app.listen(3000, () => {
    console.log('server start');
})