// 连接数据库  

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/1902',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });


// 数据库的链接对象
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('db ok');
})

// 创建一个和集合相关的 schema 对象， 类似表头

let userSchema = new mongoose.Schema({
    us: {type:String, required:true},
    ps: {type:String, required:true},
    age: Number,
    sex: {type:Number, default: 0},
})

// 将 schema 对象转为为数据模型

let User = mongoose.model('user', userSchema);  //  该数据对象和集合关联，（'集合名', schema对象）

// 操作数据库

// 插入数据
// User.insertMany({us:'wangyi', ps:'223', age:17})
// .then(data => {
//     console.log(data);
//     console.log('插入成功');
// })
// .catch(err => {
//     console.log(err);
//     console.log('插入失败');
// })


// 查询操作
// User.find({age: 17})
// .then(data => {
//     console.log(data);
//     console.log('查询成功');
// })
// .catch( err => {
//     console.log(err);
//     console.log('查询失败');
// })