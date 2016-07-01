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
    $scope.name = 'Jiaqi Chen';
    $scope.title = 'Full stack software engineer';
    $scope.selfIntroduction = 'I am a diligent full stack software engineer with strong academic knowledge and enterprise working experience, dedicated in delivering reliable, scalable and easy monitoring application.';
    $scope.aboutme = 'Hi there, I hope you are enjoying a wonderful life! After graduated from Illinois Institute of Technology in May 2015 with the master\'s degree of computer science, I joined Target as a software engineer in downtown Minnespolis, they say Minnesota is the state of 10000 lakes, it is true! And the summer and automn here is beautiful! Me along with thousands of engineers in Target contribute our talent and sweat to provide best tech support for Target.';
    $scope.welcome = 'Welcome to my personal page!';
    $scope.personalInterests = 'I\'m newly married in 2016, in my spare time, I enjoy cooking, having good food and travelling the world with my wife.';
    $scope.smsAPIProject = {
      name: 'SMS Message API',
      description: 'Worked with senior product owner, redesigned a public sms message api for target.',
      tech: 'Developed the API in groovy under the springboot framework, built CI/CD pipeline, passed serious load and pressure test.',
      highlight: 'Metrics real time monitoring on grafana. '
    };
    $scope.MITProject = {
      name: 'Item Maintenance Intake Tool',
      description: 'Built a web application on top of jira to provide target item COE a ticket tracking and monitoring system. ',
      tech: 'Technologies involved: AngularJS, HTML, CSS, bootstrap, springboot, docker, kubernetes',
      highlight: '100% scrum methodology, containerized portable components, cloud based container management, always-on rolling update which keeps application always on, auto backup and restoration process.'
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
