peopleApp.controller('albumController', function($scope, getAlbumList, getPeopleList){

	getAlbumList.getList().success(function(data){
			$scope.albumList = data;
		});

	getPeopleList.getList().success(function(data){
			$scope.peopleList = data;
		});

});