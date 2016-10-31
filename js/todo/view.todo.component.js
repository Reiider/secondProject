(function(){
  'use strict'
  
  angular
  .module('todo')
  .component('todoView', {
    templateUrl: 'template/todo/view.html',
    controller: TodoView,
    controllerAs: 'View',
    bindings:{
      object:'<',
      filter:'<'
    }
  });
  
  function TodoView(){
    var vm = this;
  }
  
})();