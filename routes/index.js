var router = require('koa-router')();
var parse = require('co-body');
var User = require('../controller/user.js');

router.get('/',User.index);
router.get('/add', User.save);


module.exports = router;