var User = require('../models/user.js');
//首页数据
exports.index = function *(next){
    var userList = User.find({}),
        obj = {
            title:"首页",
            users: userList
        }
    console.log(obj);
    this.body = yield render('index',obj);
}