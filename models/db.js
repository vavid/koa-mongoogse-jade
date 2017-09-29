var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var url = 'mongodb://localhost:27017/schematest';
// 创建一个数据库连接
mongoose.connect(url);

// var db = mongoose.createConnection(url);

/**
  * 连接成功
  */
mongoose.connection.once('open', function () {    
    console.log('Mongoose connection open to ' + url);  
});    

/**
 * 连接异常
 */
mongoose.connection.on('error',function (err) {    
    console.log('Mongoose connection error: ' + err);  
});    
 
/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {    
    console.log('Mongoose connection disconnected');  
}); 

module.exports = mongoose;