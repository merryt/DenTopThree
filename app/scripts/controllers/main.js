'use strict';

angular.module('denTopThreeApp')
  .controller('MainCtrl',  ['$scope', '$firebase',function($scope, $firebase) {

    var ref = new Firebase('https://dentopthree.firebaseio.com/Devs');
    // create an AngularFire reference to the data

    var sync = $firebase(ref);
    $scope.devs = sync.$asArray();

    $scope.addToList = function(name, description){
      var newObject = {'name': name, 'desc': description};
      $scope.devs.$add(newObject);
      $scope.devs.$remove(0);

      // syncObject.push({name: $scope.name, desc: $scope.description});
    };
  }]);
