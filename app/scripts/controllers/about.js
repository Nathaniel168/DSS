'use strict';

/**
 * @ngdoc function
 * @name dssApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dssApp
 */
angular.module('dssApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
