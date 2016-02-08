peopleApp.factory('getAlbumList', function($http){

	var factory = {};

	factory.getList = function(id){
		return $http.get('http://jsonplaceholder.typicode.com/albums')
	}

	return factory;


});