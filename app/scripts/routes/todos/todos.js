/*global Todos */
'use strict';
Todos.TodosRoute = Ember.Route.extend({
    location: 'none',
    model: function () {
        return this.store.find('todo');
    }
});
