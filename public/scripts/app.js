// Create a new module
angular.module('todosApp', []);

angular
.module('todosApp')
.controller('todosController',['$scope',function($scope){

	$scope.todo = [
	{
		title : "buy Milk",
		done : false,
		editing : false,
	},
	{
		title : "buy eggs",
		done : false,
		editing : false,
	},
	{
		title : "buy flour",
		done : false,
		editing : false,
	},
	];

	$scope.setEditing = function (todo){
		todo.editing = true;
	};

	$scope.updateTodo = function (todo,event){
		
		if($event.keyCode == 27 ) {
			todo.editing = false;
		}else if ($event.keyCode == 13){
			todo.title = $event.target.value;
			todo.editing = false;
		}
	}

} ])
