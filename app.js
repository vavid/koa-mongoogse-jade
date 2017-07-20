/*
 * koa框架文档
 * http://javascript.ruanyifeng.com/nodejs/koa.html
 */
var app = require('koa')(),
  logger = require('koa-logger'),
  json = require('koa-json'),
  views = require('koa-views'),
  router = require('koa-router'),
  routes = require('./routes/web.js'),
  onerror = require('koa-onerror');

var index = require('./routes/index');
// var users = require('./routes/users');

// error handler
onerror(app);

// global middlewares
app.use(views('views', {
  root: __dirname + '/views',
  default: 'jade'
}));
app.use(require('koa-bodyparser')());
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

// routes definition
app.use(index.routes(), index.allowedMethods());
// app.use(users.routes(), users.allowedMethods());

module.exports = app;