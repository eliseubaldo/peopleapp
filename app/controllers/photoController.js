peopleApp.controller('photoController', ['$scope', '$routeParams', 'getPhotoList', 'getPeopleList', 'getAlbumList', function($scope, $routeParams, getPhotoList, getPeopleList, getAlbumList){

	getPhotoList.getList($routeParams.albumID).success(function(data){
			$scope.photoList = data;
		});
	
	getPeopleList.getList().success(function(data){
			$scope.peopleList = data;
		});

	getAlbumList.getUniqueAlbum($routeParams.albumID).success(function(data){
			$scope.usAl = data;
			//usAl.userId;
	});

}]);