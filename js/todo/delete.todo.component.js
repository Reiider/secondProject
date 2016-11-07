(function(){
  'use strict'
  
  angular
  .module('app.todo')
  .component('todoDelete', {
    templateUrl: 'js/todo/templates/delete.html',
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