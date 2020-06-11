const express = require('express');
const app = express();
const bodyparser = require('body-parser');

    // app.use()    使用中间件（插件）
    app.use(bodyparser.urlencoded({extended: false}))
    app.use(bodyparser.json())
//  最简单的api接口 
app.get('/user/login', (req, res) => {
    // console.log("你好");
    console.log(req.query);
    let {id} = req.query;
    if (id == 1) {
        res.send({err:0, msg:'你好'})
    } else {
        res.send({err:-1, msg:'再见'})
    }
})


app.post('/user/reg', (req, res) => {
    // 接受post 数据 消息体 请求体 req.body
    let {us, ps} = req.body;

    // express 不能直接解析消息体
    // 通过第三方插件 bodyparser 实现
    console.log(req.body);

    if (us == 123 && ps == 123) {
        res.send({err: 0, msg:'ok'})
    } else {
        res.send({err: -1, msg:'nook'})
    }
})


app.listen(3000, () => {
    // 监听3000端口 开启服务器
    console.log('server start');
})  