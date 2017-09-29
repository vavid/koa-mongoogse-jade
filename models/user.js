// api文档：http://mongoosejs.com/docs/guide.html

var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

// mongoose.Promise = global.Promise;
//定义一个user的Schema数据模型
var UserSchema = new Schema({
    name: String, //姓名
    phone: String, //电话
    email: String,  //邮箱
    sex: String, //性别
    birthday: String, //生日
    status: String  //状态
});
// UserSchema.methods.checkAll = function(data){
//     this.model('User').find({},function(err, docs){
//         if(!err){
//             process.exit();
//             return docs;
//         }else{
//             throw err;
//             return null;
//         }
//     });
// }
// UserSchema.methods.saveData = function(data){

// }
//creating a model
module.exports = mongoose.model('User', UserSchema);