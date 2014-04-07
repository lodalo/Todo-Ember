/*global Todos */
'use strict';
Todos.Router.map(function () {
    this.resource('todos', { path: '/' }, function () {
        this.route('active');
        this.route('completed');
    });
});
