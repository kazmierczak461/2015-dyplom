'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.projects',
  'myApp.tasks',
  'myApp.home',
  'myApp.dashboard',
  'myApp.calendar',
  'myApp.version',
  'ui.calendar'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
