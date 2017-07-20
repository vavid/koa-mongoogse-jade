var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
//定义一个user的Schema数据模型
var UserSchema = new Schema({
    name: String, //姓名
    phone: Number //电话
});




// var oneUser = new User({
//     name: 'haha',
//     phone: '13456783456'
// })
// var promise = oneUser.save();
//     promise.then(function(data){
//         console.log('=======save method======');
//         console.log(data)
//     })

// 添加实例方法：为modal和entity提供公共的方法
UserSchema.methods.printBrief = function(){
    console.log(this.name, this.phone)
}
// 添加一个静态方法：只限于在modal层使用
UserSchema.statics.printCount = function(){
    this.count({},(err, count) => {
        console.log('count = '+ count);
    })
}
UserSchema.methods.savedata = function(data){
    return User.create(data);
}
UserSchema.methods.checkdata = function(){
    return this.find().exec();
}
// 对以上Schema生成一个User的model并导出
// var User = mongoose.model('User', UserSchema);
//选择集合
module.exports = mongoose.model('User', UserSchema);