'use strict';

angular.module('denTopThreeApp')
    .directive('topThreeItem', ['$firebase', function ($firebase) {
        return {
	        restrict: 'E',
	        transclude: true,
	        scope: {
		        item: '=item'
	        },
	        templateUrl:'list/listItem.html',
            link: function(scope, element) {
	            scope.readOnly = true;
	            scope.initialItem = angular.copy(scope.item);

				var itemIndex = scope.item.rank - 1;
	            var itemRef = new Firebase('https://dentopthree.firebaseio.com/TopThreeLists/' + scope.$parent.listName +'/items/'+itemIndex);

	            scope.enableEdit = function() {
		            scope.readOnly = false;
	            };

	            scope.cancelEdit = function() {
		            scope.readOnly = true;
		            scope.item = scope.initialItem;
	            };

	            scope.saveItem = function(item) {
		            scope.readOnly = true;

		            itemRef.set({
			            'name': item.name,
			            'desc': item.desc,
			            'rank': item.rank
		            });
	            };
            }
        };
    }])
	.controller('ListCtrl', ['$scope', '$routeParams', '$firebase', function ($scope, $routeParams, $firebase) {

		if ($routeParams.listName) {
			$scope.listName = $routeParams.listName;
		}

		var listsRef = new Firebase('https://dentopthree.firebaseio.com/TopThreeLists/' + $scope.listName +'/items');
		// create an AngularFire reference to the data

		var sync = $firebase(listsRef);
		$scope.topThree = sync.$asArray();

		$scope.addToList = function (name) {
			var newObject = {
				'name': name,
				'items': [
					{
						'name': '',
						'desc': '',
						'rank': 1
					},
					{
						'name': '',
						'desc': '',
						'rank': 2
					},
					{
						'name': '',
						'desc': '',
						'rank': 3
					}
				]
			};
			$scope.topThreeLists.$add(newObject);
			$scope.topThreeLists = sync.$asArray();

			// syncObject.push({name: $scope.name, desc: $scope.description});
		};
	}]);
