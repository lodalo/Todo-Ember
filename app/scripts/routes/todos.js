/*global Todos */
'use strict';
Todos.TodosRoute = Ember.Route.extend({
    location: 'none',
    model: function () {
        return this.store.find('todo');
    }
});

Todos.TodosIndexRoute = Ember.Route.extend({
    setupController: function () {
        this.controllerFor('todos').set('filteredTodos', this.modelFor('todos'));
    }
});

Todos.TodosActiveRoute = Ember.Route.extend({
    setupController: function () {
        var todos = this.store.filter('todo', function (todo) {
            return !todo.get('isCompleted');
        });

        this.controllerFor('todos').set('filteredTodos', todos);
    }
});

Todos.TodosCompletedRoute = Ember.Route.extend({
    setupController: function () {
        var todos = this.store.filter('todo', function (todo) {
            return todo.get('isCompleted');
        });

        this.controllerFor('todos').set('filteredTodos', todos);
    }
});
