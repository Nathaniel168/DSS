'use strict';

/**
 * @ngdoc overview
 * @name dssApp
 * @description
 * # dssApp
 *
 * Main module of the application.
 */
angular
  .module('dssApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])



  .config(function ($stateProvider, $urlRouterProvider) {
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'views/main.html',
        controller:'MainCtrl'
      })

      .state('/about',{
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'


      })
  })


