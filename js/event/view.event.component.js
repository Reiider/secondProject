(function(){
  'use strict'
  
  angular
  .module('event')
  .component('eventView', {
    templateUrl: 'template/event/view.html',
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