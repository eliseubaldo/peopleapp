peopleApp.config(function($routeProvider){

	$routeProvider
	.when('/', {
		templateUrl:'pages/home.html',
		controller:'homeController'
	})
	.when('/people', {
		templateUrl:'pages/peoplelist.html',
		controller:'peopleController'
	})
	.when('/album', {
		templateUrl:'pages/albumlist.html',
		controller:'albumController'
	})



});