peopleApp.factory('getPhotoList', function($http){

	var factory = {};

	factory.getList = function(id){
		return $http.get('http://jsonplaceholder.typicode.com/photos?albumId='+id)
	}

	return factory;


});