'use strict';

/**
 * @ngdoc function
 * @name aboutmeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the aboutmeApp
 */
angular.module('aboutmeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
