'use strict';

/**
 * @ngdoc overview
 * @name denTopThreeApp
 * @description
 * # denTopThreeApp
 *
 * Main module of the application.
 */
angular
  .module('denTopThreeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/:listName', {
        templateUrl: 'views/topThree.html',
        controller: 'ListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
