(function(){
  'use strict'
  
  angular
  .module('event')
  .component('eventDelete', {
    templateUrl: 'js/event/templates/delete.html',
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