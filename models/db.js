var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var url = 'mongodb://localhost:27017/schematest';
// Mongoose 为你的应用程序数据提供了一个直接的，基于模型的解决方案。他包括内置的类型转换，校验，建立查询，业务逻辑的钩子等。
// Mongoose是一个提供了MongoDB地相映射的Node.js库，它在Node.js中与ORM（Object Relational Mapping）有着类似的接口。如果你不熟悉ORM或者Mongoose中的Object Data Mapping（ODM），意思是Mongoose将数据库中的数据转换为JavaScript对象以供你在应用中使用。
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