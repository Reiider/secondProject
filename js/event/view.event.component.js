(function(){
  'use strict'
  
  angular
  .module('event')
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
    var vm = this;
  }
  
})();