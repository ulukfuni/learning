var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', ['$scope', function($scope){
	
$scope.text='hello';

$scope.guy = {};
$scope.guy.details = {
	"name": "Viet",
	"number": "934803"

};
$scope.myModel = '';
$scope.master = {};
$scope.update = function(user){
	$scope.master = angular.copy(user);

};

}]);

myApp.directive('customButton', function(){
	return {
		replace: true,
		template: '<a href="" class=ng-transclude>' + '</a>',
		link: function(scope) {
			// dom manipulation
		

		}

	}
})