const express = require('express');
const router = express.Router();

const foodModel = require('../db/model/foodModel');
const { route } = require('./userRouter');


// 添加信息
router.post('/add', (req, res) => {
    // 获取参数
    let { name, price, desc, typename, typeid, img } = req.body;
    // 判断参数是否正确
    foodModel.insertMany({ name, price, desc, typename, typeid, img })
        .then(data => {
            res.send({ err: 0, msg: '添加成功' });
        })
        .catch(err => {
            console.log(err);
            res.send({ err: -1, msg: '添加失败' });
        })

})

// 根据分类查询
router.post('/getinfoByType', (req, res) => {
    let { typeid } = req.body;

    // 参数必须是对象
    foodModel.find({ typeid })
        .then(data => {
            console.log(data);
            res.send({ err: 0, msg: '查询成功', lists: data });
        })
        .catch(err => {
            console.log(err);
            res.send({ err: -1, msg: '查询失败' });
        })

})


// 关键字查询
router.post('/getInfoByKw', (req, res) => {
    let { kw } = req.body;
    let reg = new RegExp(kw);
    foodModel.find({ name: { $regex: reg } })
        .then(data => {
            console.log(data);
            res.send({ err: 0, msg: '查询成功', lists: data });
        })
        .catch(err => {
            console.log(err);
            res.send({ err: -1, msg: '查询失败' });
        })
})

// 删除
router.post('/del', (req, res) => {
    let { _id } = req.body;
    foodModel.remove({ _id })
        .then(data => {
            res.send({ err: 0, msg: '删除成功' });

        })
        .catch(err => {
            console.log(err);
            res.send({ err: -1, msg: '删除失败' });

        })
})

// 修改
router.post('/update', (req, res) => {
    let { name, price, desc, typename, typeid, _id } = req.body;
    foodModel.update({ _id }, { name, price, desc, typename, typeid })
        .then(data => {
            res.send({ err: 0, msg: '修改成功' });

        })
        .catch(err => {
            console.log(err);
            res.send({ err: -1, msg: '修改失败' });

        })
})


// 分页查询
router.post('/getInfoByPage', (req, res) => {
    let pageSize = req.body.pageSize || 5;  // 设置每页数据数条数
    let page = req.body.page || 1;      // 页数

    foodModel.find().limit( Number(pageSize)).skip(Number((page - 1) * pageSize))
        .then(data => {
            res.send({ err: 0, msg: '查询成功', lists: data });

        })
        .catch(err => {
            console.log(err);
            res.send({ err: -1, msg: '查询失败' });

        })
})


module.exports = router