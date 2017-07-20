var router = require('koa-router')();
var User = require('../models/user.js');
// var firstUser = new User({
//   name: 'haha',
//   phone: '18601611256'
// })
// firstUser.save(function(err){
//     console.log(err) 
// });
// var userObj = new User();

router.get('/', function* (next) {
  this.obj = {
    title: 'koa + mongodb',
    tabName: '网校前端组'
  };
  
  // User.find({}, function(err, data) {
  //   var result_array = JSON.stringify(data);
  //   this.obj.data=result_array;
  //   console.log()
  // });
  this.obj.data = yield User.find({});
  yield next;    
}, function* (next) {
  console.log('=====开始渲染啦======');  
  console.log(this.obj)
  yield this.render('index', this.obj);
});


router.get('/users', function* (next) {
  yield this.render('index', {
    title: 'Hello World users!'
  });
});

module.exports = router;