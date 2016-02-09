peopleApp.controller('todoController',['$scope', function($scope){

	$scope.saveItem = function(){
		localStorage.setItem("todo #", "Smith");

	}

}]);