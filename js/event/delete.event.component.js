(function(){
  'use strict'
  
  angular
  .module('event')
  .component('eventDelete', {
    templateUrl: 'template/event/delete.html',
    controller: EventDelete,
    controllerAs: 'Delete',
    bindings:{
      del:'&'
    }
  });
  
  function EventDelete(){
    var vm = this;
  }
  
})();