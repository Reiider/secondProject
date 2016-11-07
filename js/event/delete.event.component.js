(function(){
  'use strict'
  
  angular
  .module('app.event')
  .component('eventDelete', {
    templateUrl: 'js/event/templates/delete.html',
    controller: EventDelete,
    controllerAs: 'Delete',
    bindings:{
      del:'&'
    }
  });
  
  function EventDelete(){

  }
  
})();