'use strict';

angular.module('denTopThreeApp')
  .controller('MainCtrl',  ['$scope', '$firebase',function($scope, $firebase) {

    var ref = new Firebase('https://dentopthree.firebaseio.com/TopThreeLists');
    // create an AngularFire reference to the data

    var sync = $firebase(ref);
    $scope.topThreeLists = sync.$asArray();

    $scope.createList = function(name, description){

	  var listRef = ref.child(name);

      listRef.set({
	      'name': name,
	      'items': [
		      {
			      'name': 'First',
			      'desc': '',
			      'rank': 1
		      },
		      {
			      'name': 'Second',
			      'desc': '',
			      'rank': 2
		      },
		      {
			      'name': 'Third',
			      'desc': '',
			      'rank': 3
		      }
	      ]
      });
      $scope.topThreeLists.$add(listRef);

      // syncObject.push({name: $scope.name, desc: $scope.description});
    };
  }]);
