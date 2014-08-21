'use strict';

angular.module('denTopThreeApp')
	.controller('MainCtrl', ['$scope', '$location', '$firebase', function ($scope, $location, $firebase) {

		var ref = new Firebase('https://dentopthree.firebaseio.com/TopThreeLists');
		// create an AngularFire reference to the data

		var sync = $firebase(ref);
		$scope.topThreeLists = sync.$asArray();

		$scope.createList = function (name) {

			$scope.listNameInUse = false;

			for (var i=0; i<$scope.topThreeLists.length; i++) {
				if ($scope.topThreeLists[i].name.toLowerCase() == name.toLowerCase()) {
					$scope.listNameInUse = true;
					return;
				}
			}

			if (!$scope.listNameInUse) {
				$location.path('/' + name);
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
			}
		};
	}]);
