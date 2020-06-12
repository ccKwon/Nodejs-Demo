const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    port: 465,
    secure: true,
    auth: {
        user: '308418835@qq.com',
        pass: 'kxl'
    }
});



// 发送邮件
transporter.sendMail(mailobj, (err, data) => {
    console.log(err);
    console.log(data);
})

function send(mail, code) {
    // 邮件信息
    let mailobj = {
        from: "'Fred Foo' <308418835@qq.com>",
        to: "308418835@qq.com",
        subject: "1902",
        text: `您的验证码是${code}, 有效期五分钟`,

    }
}

module.exports = {send}