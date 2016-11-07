(function(){
  'use strict'
  
  angular
  .module('app.event')
  .component('eventAdd', {
    templateUrl: 'js/event/templates/add.html',
    controller: EventAdd,
    controllerAs: 'Add',
    bindings:{
      text:'<',
      add:'&'      
    }
  });
  
  function EventAdd(){
    var vm = this;
    vm.text = "";
    
    vm.addElem = addElem;
    
    function addElem(){
      vm.add({value: vm.text});
    }
  }
  
})();