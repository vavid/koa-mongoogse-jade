/*
 * koa框架文档
 * http://javascript.ruanyifeng.com/nodejs/koa.html
 */
var app = require('koa')(),
  logger = require('koa-logger'),
  json = require('koa-json'),
  views = require('koa-views'),
  router = require('koa-router'),
  // multer = require('koa-multer')(),
  bodyParser = require('koa-bodyparser'),
  // koabody = require('koa-body'),
  routes = require('./routes/web.js'),
  onerror = require('koa-onerror');
// require('./controller/user.js');

var index = require('./routes/index');
var user = require('./routes/user');

// error handler
onerror(app);

// global middlewares
app.use(views('views', {
  root: __dirname + '/views',
  default: 'jade'
}));

app.use(json());
app.use(logger());


// 中间件
// 通过当前应用的use方法注册

app.use(function* (next) { // 参数next，表示下一个中间件
  var start = new Date;
  yield next; //Generator函数内部使用yield命令，将程序的执行权转交给下一个中间件
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(require('koa-static')(__dirname + '/public'));

app.use(bodyParser());

// routes definition
app.use(index.routes(), index.allowedMethods());
app.use(user.routes(), user.allowedMethods());

module.exports = app;