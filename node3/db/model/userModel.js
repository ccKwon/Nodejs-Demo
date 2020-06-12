const mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
    us: {type:String, required:true},
    ps: {type:String, required:true},
    age: Number,
    sex: {type:Number, default: 0},
})

// 将 schema 对象转为为数据模型

let User = mongoose.model('user', userSchema);  //  该数据对象和集合关联，（'集合名', schema对象）


module.exports = User;