'use strict';

/**
 * @ngdoc function
 * @name denTopThreeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the denTopThreeApp
 */
angular.module('denTopThreeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
