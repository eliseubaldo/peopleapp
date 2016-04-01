peopleApp.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){

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
	.when('/photo/:albumID', {
		templateUrl:'pages/photolist.html',
		controller:'photoController'
	})
	.when('/todo', {
		templateUrl:'pages/todolist.html',
		controller:'todoController'
	})
	.otherwise({redirectTo:'/'});

	$httpProvider.interceptors.push('LoadingInterceptor');

}]);

