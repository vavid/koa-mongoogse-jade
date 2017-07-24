var router = require('koa-router')();
var parse = require('co-body');
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
  //request和response上的方法(this)
  console.log('--------fun1---------')
  console.log(this.request.query); 
  this.obj = {
    title: 'koa + mongodb',
    tabName: '网校前端组'
  };
  this.obj.data = yield User.find({});
  yield next;    
}, function* (next) {
  console.log('--------fun2---------')  
  console.log(this.query);  
  yield this.render('index', this.obj);
});
// router.post('/add', function(ctx, next){
//   //Cannot read property 'body' of undefined"
//   // let body = ctx.request.body;
//   console.log(ctx.body);
//   // var postdata = await parsePostData( ctx )
//   // console.log(postdata)
// })
router.post('/add', function *(next){
  //404
  // reverse the order of the two app.use() 
  console.log('=======1111111111=======')
  console.log(this.body)  
  console.log(this.request.body)
  var userData = new User(this.request.body);
  var cnt = yield userData.save({});
  yield next;
},function *(next){
  console.log('request new data');
})


module.exports = router;