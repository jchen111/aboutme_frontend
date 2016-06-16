'use strict';

/**
 * @ngdoc function
 * @name aboutmeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aboutmeApp
 */
angular.module('aboutmeApp')
  .controller('MainCtrl', ['$scope','email',function ($scope,email) {
    $scope.name = 'JIAQI CHEN';
    $scope.title = 'Full stack software engineer';
    $scope.selfIntroduction = 'I am a diligent full stack software engineer with strong academic knowledge and enterprise experience, dedicated in delivering reliable, scalable and easy monitoring application.';
    $scope.aboutme = 'I graduated from Illinois Institute of Technology in May 2015 with the masters degree computer science. Currently I am a software engineer at Target in downtown Minnespolis, me along with thousands of engineers in Target contribute our talent and sweat to provide best tech support for Target.';
    $scope.welcome = 'Welcome to my personal page!';
    $scope.personalInterests = 'I just got married in 2016, in my spare time, I like cooking, good food and travelling around the world with my wife.';
    $scope.smsAPIProject = {
      name: 'SMS Message API',
      description: 'Worked with senior product owner, redesigned a public sms message api for target.',
      tech: 'Developed the API in groovy under the springboot framework, CI pipeline was built along with the project. The application passed serious load and pressure test.',
      highlight: 'Metrics are added to the application so performance of it is under real time monitoring by grafana. '
    };
    $scope.MITProject = {
      name: 'Maintenance Intake Tool',
      description: 'Built a web application on top of jira to provide target item COE a ticket tracking and monitoring system. ',
      tech: 'Technologies involved: AngularJS, HTML, CSS, bootstrap, springboot, docker, kubernetes',
      highlight: '100% scrum methodology, dockerized portable applications, cloud based container management, always-on rolling update concept, auto backup and restoration process.'
    };

    $scope.message = '';
    $scope.senderName = '';
    $scope.email = '';
    $scope.httpCallText = 'Send';
    $scope.disableSendButton = '';

    $scope.submit = function() {
      console.log('clicked');
      email.sendEmail($scope.senderName, $scope.email, $scope.message)
      .success(function(data) {
        var buttonColor = "green";
        $scope.httpCallText = "Thanks";
        $scope.httpCall = {
          'background-color': buttonColor
        };
        $scope.disableSendButton = 'true';
      })
      .error(function(error) {
        console.log(error);
      });
    };

  }]);
