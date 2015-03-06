'use strict';

/**
 * @ngdoc function
 * @name dssApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dssApp
 */
angular.module('dssApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
