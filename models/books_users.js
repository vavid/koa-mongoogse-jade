// api文档：http://mongoosejs.com/docs/guide.html

var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

//定义一个user的Schema数据模型
var BookUserSchema = new Schema({
    name: String, //书名
    cover: String, //封面
    publish: String, //出版社
    status: String,  //借出状态
    lendnum: Number //被借次数
},{
    collection: 'books' //指定用户模型对应的表
});
module.exports = mongoose.model('BooksUsers', BookUserSchema);