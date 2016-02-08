peopleApp.controller('peopleController', function($scope, getPeopleList){

	getPeopleList.getList().success(function(data){
			$scope.peopleList = data;
		});
	

});