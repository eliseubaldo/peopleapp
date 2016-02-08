peopleApp.controller('photoController', function($scope, $routeParams, getPhotoList){

	getPhotoList.getList($routeParams.albumID).success(function(data){
			$scope.photoList = data;
		});
	

});