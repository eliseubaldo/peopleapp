peopleApp.controller('todoController',['$scope', function($scope){

	$scope.todoList = [];

	
	for(var i=0, len=localStorage.length; i<len; i++) {
	    var key = localStorage.key(i);
	    var value = localStorage[key];
	    console.log(key + " => " + value);
	    $scope.todoList.push({key:value});
	}

	console.log($scope.todoList);	

	/* for (var i = 1; i < Infinity; i++) {

		 if(localStorage.getItem("todo"+i) == null){
		 	$scope.n=i-1;
		 	break;
		 }else {
		$scope.todoList.push({"todo": localStorage.getItem("todo"+i)});
		$scope.n=i;
		}

	}; */


	$scope.saveItem = function(todoitem){
		$scope.n++;
		localStorage.setItem("todo"+$scope.n, todoitem);
		var objToAdd = {"todo" : todoitem};
		$scope.todoList.push(objToAdd);
		//todoList["todo"+n] = todoitem;
		//todoList.push({"todo": todoitem});
		//console.log($scope.todoList);
	}


	$scope.deleteItem = function(itemN){
		console.log(itemN);
		localStorage.removeItem("todo"+itemN);
	}

}]);