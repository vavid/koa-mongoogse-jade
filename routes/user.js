var router = require('koa-router')();
var User = require('../controller/user.js');

router.prefix('/users');

// router.get('/', function *(next) {
//   this.body = 'this is a users response!';
// });

// router.get('/bar', function *(next) {
//   this.body = 'this is a users/bar response!';
// });
// router.post('/add', function *(next){
//   console.log(this.request.body);
// });
// router.get('/findOne', function*(next){
//   console.log(this.request.query)
// });
router.get('/',User.index); //查
router.get('/findOne',User.queryOne);
router.get('/updateOne',User.queryUpdate);

router.get('/add', User.save); //增
router.get('/delOne', User.delOne); //删

module.exports = router;
