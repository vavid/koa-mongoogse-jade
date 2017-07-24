var User = require('../models/user.js');
var user = new User({
    name: 'vavid', //姓名
    phone: 18601611256, //电话
    email: 'vavid317@sina.com',  //邮箱
    sex: '女', //性别
    birthday: '2000-12-05', //生日
    status: '在职'  //状态
});
// console.log(user.checkAll())
// user.save(function(err,data){

// })
