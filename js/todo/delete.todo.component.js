(function(){
  'use strict'
  
  angular
  .module('todo')
  .component('todoDelete', {
    templateUrl: 'template/todo/delete.html',
    controller: TodoDelete,
    controllerAs: 'Delete',
    bindings:{
      del:'&'
    }
  });
  
  function TodoDelete(){
    var vm = this;
  }
  
})();