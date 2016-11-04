(function(){
  'use strict'
  
  angular
  .module('todo')
  .component('todoView', {
    templateUrl: 'js/todo/templates/view.html',
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