(function(){
  'use strict'
  
  angular
  .module('app.event')
  .component('eventView', {
    templateUrl: 'js/event/templates/view.html',
    controller: EventView,
    controllerAs: 'View',
    bindings:{
      object:'<',
      filter:'<'
    }
  });
  
  function EventView(){

  }
  
})();