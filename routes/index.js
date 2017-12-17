var router = require('koa-router')();
var parse = require('co-body');
var User = require('../controller/user.js');

router.get('/',User.index); //查全部
router.get('/findOne',User.queryOne)
router.get('/add', User.save); //增


module.exports = router;