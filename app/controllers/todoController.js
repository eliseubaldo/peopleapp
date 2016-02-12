peopleApp.controller('todoController',['$scope', function($scope){

	$scope.todoList = [];

	for (var i = 1; i < Infinity; i++) {
		 if(localStorage.getItem("todo"+i) == null){
		 	$scope.n=i-1;
		 	break;
		 }else {
		$scope.todoList.push({"todo": localStorage.getItem("todo"+i)});
		$scope.n=i;
		}
	};

	$scope.saveItem = function(todoitem){
		$scope.n++;
		localStorage.setItem("todo"+$scope.n, todoitem);
		var objToAdd = {"todo" : todoitem};
		$scope.todoList.push(objToAdd);
		//todoList["todo"+n] = todoitem;
		//todoList.push({"todo": todoitem});
		//console.log($scope.todoList);
	}

}]);