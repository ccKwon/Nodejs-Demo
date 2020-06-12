const express = require('express');
const router = express.Router();
const multer = require('multer');
const { route } = require('./userRouter');


let storage = multer.diskStorage({
    // 设置上传后的文件路径  uploads文件夹会自动创建
    // 指定文件路径
    destination: function (req, file, cb) {
        // 第一个参数null  第二个参数为路径名
        cb(null, './uploads');
    },

    fileFilter: function (req, file, cb) {
        // 这个函数应该调用 `cb` 用boolean值来
        // 指示是否应接受该文件


        let types = ['jpg', 'jpeg', 'png', 'gif'];
        let imgType = file.mimetype.split('/')[1];

        // if (size >= 600 * 1024) {
        //     return;
        // } else 
        if (types.indexOf(imgType) === -1) {
            // 拒绝这个文件，使用`false`，像这样:
            cb(null, false)
        } else {
            // 接受这个文件，使用`true`，像这样:
            cb(null, true)
        }

        // 如果有问题，你可以总是这样发送一个错误:
        // cb(new Error('I don\'t have a clue!'))
    },

    // 给上传文件重命名, 获取添加后缀名
    filename: function (req, file, cb) {
        let fileFormat = (file.originalname).split(".");
        // 给图片加上时间戳格式防止重命名
        console.log(file);
        let types = ['jpg', 'jpeg', 'png', 'gif'];
        let imgType = file.mimetype.split('/')[1];
        let ext = file.originalname.split('.')[1];
        let tmpname = (new Date()).getTime() + parseInt(Math.random() * 9999);
 
        if (types.indexOf(ext) === -1) {
            cb(null, false);
        } else {
            // 第一个参数null 第二个参数为文件名
            cb(null, `${tmpname}.${ext}`);
        }



    }
});

let upload = multer({
    storage: storage
});

function fileFilter(req, res, next) {
    
}

// 上传文件必须使用post
router.post('/upload', (req, res) => {

    // hehe为 要上传图片数据的key值
    let { size, mimetype, path } = req.file;
    // 允许的后缀名 

    // if (size >= 600 * 1024) {
    //     return res.send({ err: -1, msg: '尺寸过大' })
    // } else if (types.indexOf(imgType) === -1) {
    //     return res.send({ err: -1, msg: '类型错误' })
    // } else {
    //     res.send("上传成功")
    // }
    res.send('上传')
})




module.exports = router;
