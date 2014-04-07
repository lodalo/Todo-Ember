/*global Ember, DS, Todos:true */
/*jshint unused:false */
window.Todos = Ember.Application.create();

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/helpers/*');
require('scripts/views/*');
require('scripts/router');
