var User = require('../models/user.js');
// 查
exports.index =  function* (next){ 
    var obj = {
      title: 'koa + mongodb',
      tabName: '网校前端组'
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
    var userData = new User;
    var id = this.request.query && this.request.query.id;
    var userItem = yield userData.find({_id:id});
    yield this.render('index', userItem);
    
}
// 增
exports.save = function* (next){
    var userData = new User;
    Object.assign(userData,this.request.query);
    yield userData.save({});
}
// 更新
exports.update = function* (next){
    var userData = new User;
    var userItem = yield userData.findOneAndUpdate();
    yield this.render('index', userItem);
    
}