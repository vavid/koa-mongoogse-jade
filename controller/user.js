var User = require('../models/user.js');
// 查
exports.index =  function* (next){ 
    var obj = {
      title: 'koa + mongodb',
      tabName: '成员列表'
    };
    obj.data = yield User.find({}); //.limit(20) 默认每次查20条  todo
    // var page = parseInt(fields.page);
    // var pageSize = parseInt(fields.pageSize);
    // var query = Item.find({});
    // query.skip((page-1)*pageSize);
    // query.limit(pageSize);
    // query.exec(function(err,rs){
    //        if(err) return next(err);
    //        console.log(rs);
    //        res.json(rs);
    //    }); 
    console.log(obj.data)
    yield this.render('index', obj);
}
// 查一条
exports.queryOne = function* (next){
    // var userData = new User;
    var id = this.request.query && this.request.query.id;
    var userItem = null;
    yield User.findById(id,function(err,res){
        if(res){
            userItem = Object.assign({},res);
        }
    });
    this.body = userItem;
}
// 增
exports.save = function* (next){
    var userData = new User;
    Object.assign(userData,this.request.query);
    var resObj = null;
    yield userData.save({},function(err,res){
        resObj = Object.assign({},res);
    });
    this.body = resObj;
}
// 更新
exports.queryUpdate = function* (next){
    var userData =  Object.assign({},this.request.query);
    var id = this.request.query && this.request.query.id;
    var itemObj = yield User.findByIdAndUpdate(id,{$set:userData});
    this.body = itemObj;
}
// 删除
exports.delOne = function* (next){
    var userData = new User;
    var id = this.request.query && this.request.query.id;
    var resultObj = null;
    yield User.remove({_id:id},function(err,result){
        if(result){
            resultObj = Object.assign({},result);
        }
    })
    this.body = resultObj;
}
