// api文档：http://mongoosejs.com/docs/guide.html

var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

//定义一个user的Schema数据模型
var UserSchema = new Schema({
    name: String, //姓名
    nick: String, //昵称
    password: String, //密码
    phone: String, //电话
    email: String,  //邮箱
    sex: String, //性别
    birthday: String, //生日
    belongs: String  //所属产线
},{
    collection: 'users' //指定用户模型对应的表：users
});
module.exports = mongoose.model('User', UserSchema);