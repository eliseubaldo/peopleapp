peopleApp.factory('getPeopleList', function($http){

	var factory = {};

	factory.getList = function(id){
		return $http.get('http://jsonplaceholder.typicode.com/users')
	}

	return factory;


});