(function(){

  angular
  .module('event')
  .component('eventList', {
    templateUrl: 'template/event.template.html',
    controller: EventController
  });
  
  EventController.$inject = ['eventService'];
  
  function EventController(eventService){
    var vm = this;
    vm.obj = eventService.getObj();
    vm.textAdd = "";
    
    vm.add = function(){eventService.add(vm.textAdd);}
    vm.deleteSelectTodos = function(){eventService.deleteSelectTodos();}
  }
  

})();