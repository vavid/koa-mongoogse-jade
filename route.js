var user = require("./controller/user.js");

var routes = function(app) {
  app.get("/", user.index);
};
module.exports = routes;
