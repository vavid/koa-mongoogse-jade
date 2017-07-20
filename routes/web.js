var user = require('../controller/user.js');

module.exports = routes;
function routes(app){
    app.get('/', user.index);
}