'use strict';

angular.module('myApp.tasks', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tasks', {
    templateUrl: 'pages/tasks/tasks.html',
    controller: 'TasksCtrl'
  });
}])

.controller('TasksCtrl', function($scope) {

      $scope.form = {
        data: {
          tasks: [
            {
              name: 'kolokwium',
              place: 'W14',
              time: '09:10',
              date: '09.05.15',
              desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor.',
              images: [],
              files: []
            },
            {
              name: 'kolokwium',
              place: 'W14',
              time: '09:10',
              date: '09.05.15',
              desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor.',
              images: [],
              files: []
            },
            {
              name: 'kolokwium',
              place: 'W14',
              time: '09:10',
              date: '09.05.15',
              desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor.',
              images: [],
              files: []
            },
            {
              name: 'kolokwium',
              place: 'W14',
              time: '09:10',
              date: '09.05.15',
              desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor.',
              images: [],
              files: []
            },
            {
              name: 'kolokwium',
              place: 'W14',
              time: '09:10',
              date: '09.05.15',
              desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor.',
              images: [],
              files: []
            },
            {
              name: 'kolokwium',
              place: 'W14',
              time: '09:10',
              date: '09.05.15',
              desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor.',
              images: [],
              files: []
            }
          ],
          settings: {}
        }
      }


});