(function(){

  angular
  .module('todo')
  .component('todoList', {
    templateUrl: 'template/todo.template.html',
    controller: TodoList
  });
  
  TodoList.$inject = ['todoService'];
  
  function TodoList(todoService){
    var vm = this;
    vm.obj = todoService.getObj();
    vm.textAdd = "";
    
    vm.add = function(){todoService.add(vm.textAdd);}
    vm.completeOrNot = function(index){todoService.completeOrNot(index);}
    vm.deleteSelectTodos = function(){todoService.deleteSelectTodos();}
  }
  

})();