/*global Todos */
'use strict';
Todos.TodosIndexRoute = Ember.Route.extend({
    setupController: function () {
        this.controllerFor('todos').set('filteredTodos', this.modelFor('todos'));
    }
});
