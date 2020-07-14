'use strict';


module.exports = function(app){
    var todoList = require('./controller');

    app.route('/').get(todoList.index); 
    app.route('/users').get(todoList.users);
    app.route('/users/:id').get(todoList.findUser);
    app.route('/users').put(todoList.updateUser);
    app.route('/users').post(todoList.createUser);
}