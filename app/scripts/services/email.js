'use strict';

/**
 * @ngdoc function
 * @name aboutmeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aboutmeApp
 */
angular.module('aboutmeApp').factory('email',['$http',function ($http) {
  var services = {};
  services.sendEmail = function (name, email, text) {
    var req = {
      method: 'POST',
      url: 'http://192.168.99.100:8080/aboutme/v1/emails',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        name: name,
        email: email,
        text: text
      }
    };
    return $http(req);
  };
  return services;
}]);
