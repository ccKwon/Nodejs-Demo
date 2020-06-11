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