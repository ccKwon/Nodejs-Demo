// static中间件
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'./hehe')))

app.listen(3000, () => {
    console.log('server start');
})