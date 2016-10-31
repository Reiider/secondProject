(function() {
  'use strict'
  
  angular
  .module('todo')
  .component('todoList', {
    templateUrl:'template/todoList.html',
    controller: TodoList,
    controllerAs: 'Todo',
    bindings:{
      object:'<',
      filter:'<'
    }
  });
  
  function TodoList(){
    var vm = this;
    
    vm.add = add;
    vm.deleteSelectTodos = deleteSelectTodos;
    
    function add(text){
      if(text != ""){
        vm.object.elems.push({
          select: false, 
          text: text,
          complete: false,
          optional: false
        })
      }
    }
    
    function deleteSelectTodos(){
      var elems = vm.object.elems;
      for(var i = 0; i < elems.length;){
        if(elems[i].select){
          elems.splice(i,1);
        }
        else i++;
      }
    }
  }

})();