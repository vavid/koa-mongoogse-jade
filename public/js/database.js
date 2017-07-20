var database = {
    url: 'mongodb://localhost:27017/userdb',
    connetdb() {
        var self = this;
        var MongoClient = require('mongodb').MongoClient;
        var DB_CONN_STR = this.url; // 数据库为 userdb
        MongoClient.connect(DB_CONN_STR, function (err, db) {
            if(err){
                console.log('连接失败');
                console.log(err);
            }else{
                console.log("连接成功！"); 
            }
            // self.savedb(db, function(result) {
            //     console.log(result);
            //     db.close();
            // });  
            self.getdb(db,function(data){
                console.log(data);
            })          
        });
        // var mongoose = require('mongoose');
        // var db = mongoose.connect('mongodb://127.0.0.1:27017/userdb');
        // // 链接错误
        // db.connection.on('error', function (error) {
        //     console.log(error);
        // });

        // db.connection.on("open", function () {
        //     console.log("——数据库连接成功！——");
        // });
    },
    getdb(db, callback) {
        var collection = db.collection('user'); //从db对象拿到collection
        //查询数据
        collection.find().toArray(function (err, data) {
            if (!err) {
                console.log('查询数据集合成功' + JSON.stringify(data));
                return JSON.stringify(data);
            } else {
                console.log('查询数据集合失败');
                return false;
            }
        })
    },
    savedb(db,callback) {
        var collection = db.collection('user');
        //待插入的数据
        var data = [{"name":"nani","phone":"123456789"},{"name":"vavid","phone":"12334567897"}];
        collection.insert(data, function(err, result) {
            if(err){
                console.log(err);
                return;
            }
            callback(result);
        })
    }
}
module.exports = database;