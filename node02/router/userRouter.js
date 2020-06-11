const express = require('express');
const router = express.Router();

const User = require('../db/model/userModel');

router.post('/reg', (req, res) => {
    // 获取数据

    let { us, ps } = req.body;
    if (us && ps) {

        User.find({us})
        .then( data => {
            if (data.length === 0) {
                return User.insertMany({ us: us, ps: ps })
            }else {
                res.send({err: -3, msg: '用户名已存在'})
            }
        })
        .then( () => {
            res.send({err:0, msg: '注册ok'})
        })
        .catch( err => {
            // console.log(err);
            res.send({err: -1, msg: '注册失败'});
            console.log(err);
        })
    } else {
        return res.send({ err: -1, msg: '参数错误' });

    }

    // 数据处理

    // 返回数据

    // res.send('test ok')
})


router.post('/login', (req, res) => {
    let {us, ps} = req.body;
    if (!us || !ps) {
        return res.send({ err: -1, msg: '参数错误' })
    } else {
        User.find({us, ps})
        .then( data => {
            if (data.length > 0) {
                res.send({err: 0, msg: '登录ok'})
            }else {
                res.send({err: -2, msg: '用户名或密码错误'})
            }
        })
        .catch( err => {
            return res.send({ err: -1, msg: '内部错误' })
        })
    }
})

module.exports = router