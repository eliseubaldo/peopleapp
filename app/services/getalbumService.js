peopleApp.factory('getAlbumList', function($http){

	var factory = {};

	factory.getList = function(id){
		return $http.get('http://jsonplaceholder.typicode.com/albums')
	}

	factory.getUniqueAlbum = function(id){
		return $http.get('http://jsonplaceholder.typicode.com/albums?id='+id)
	}	

	return factory;


});