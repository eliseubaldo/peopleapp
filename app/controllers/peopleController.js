peopleApp.controller('peopleController', ['$scope', 'getPeopleList', function($scope, getPeopleList){

	getPeopleList.getList().success(function(data){
			$scope.peopleList = data;
		});
	

}]);