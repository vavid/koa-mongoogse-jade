var router = require('koa-router')();

router.prefix('/users');

router.get('/', function *(next) {
  this.body = 'this is a users response!';
});

router.get('/bar', function *(next) {
  this.body = 'this is a users/bar response!';
});
router.post('/add', function *(next){
  console.log(this.request.body);
})

module.exports = router;
