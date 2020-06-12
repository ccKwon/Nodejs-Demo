const express = require('express');
const router = express.Router();
const multer = require('multer');
const { route } = require('./userRouter');


let storage = multer.diskStorage({
    // 设置上传后的文件路径  uploads文件夹会自动创建
    // 指定文件路径
    destination: function (req, file, cb) {
        // 第一个参数null  第二个参数为路径名
        cb(null, './static/image');
    },

    fileFilter: function (req, file, cb) {
        // 这个函数应该调用 `cb` 用boolean值来
        // 指示是否应接受该文件


        let types = ['jpg', 'jpeg', 'png', 'gif'];
        let ext = file.originalname.split('.')[1];

        if (types.indexOf(ext) === -1) {
            // 拒绝这个文件，使用`false`，像这样:
            cb(null, false)
        }

        // 接受这个文件，使用`true`，像这样:
        cb(null, true)
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

        // if (types.indexOf(ext) === -1) {
        //     cb(null, false);
        // } else {
        // 第一个参数null 第二个参数为文件名
        cb(null, `${tmpname}.${ext}`);
        // }



    }
});

let upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        // 这个函数应该调用 `cb` 用boolean值来
        // 指示是否应接受该文件


        let types = ['jpg', 'jpeg', 'png', 'gif'];
        let exts = file.originalname.split('.');
        let ext = exts[exts.length - 1];
        if (types.indexOf(ext) === -1) {
            // 拒绝这个文件，使用`false`，像这样:
            return cb(new Error("扩展名错误"));
        }

        // 接受这个文件，使用`true`，像这样:
        return cb(null, true)
    },
    limits: {
        fileSize:400*1000
    }
});


// 上传文件必须使用post
router.post('/upload', upload.single('hehe'), (req, res) => {
    // hehe为 要上传图片数据的key值
    // upload(req, res, function (err) {
    //     if (err instanceof multer.MulterError) {
    //         console.log(err);
    //         return res.send("扩展名错误")
    //     } else if (err) {
    //         return res.send("扩展名错误")
    //         console.log(err);
    //     }


    // })
    // // 一切都好
    // single('hehe')
    let url = `/public/image/${req.file.filename}`
    res.send({err:0, msg:'上传', img:url})
})

router.use(function (err, req, res, next) {
    if (err) {
        res.send(err.toString());
    } else {
        next();
    }
});





module.exports = router;
