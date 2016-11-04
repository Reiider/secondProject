(function(){
  'use strict'
  
  angular
  .module('todo')
  .component('todoAdd', {
    templateUrl: 'js/todo/templates/add.html',
    controller: TodoAdd,
    controllerAs: 'Add',
    bindings:{
      text:'<',
      add:'&'      
    }
  });
  
  function TodoAdd(){
    var vm = this;
    vm.text = "";
    
    vm.addElem = addElem;
    
    function addElem(){
      vm.add({text: vm.text});
    }
  }
  
})();