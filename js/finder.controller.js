(function() {

  angular
  .module('app')
  .controller('FinderController', FinderController);
  
  FinderController.$inject = ['todoService', 'meetingService', 'eventService'];
  
  function FinderController(todoService, meetingService, eventService){
    var vm = this;
    vm.filter = {};
    
    vm.objTodo = todoService.getObj();
    vm.objMeeting = meetingService.getObj();
    vm.objEvent = eventService.getObj();
    
    vm.objTodo.filter = vm.filter;
    vm.objMeeting.filter = vm.filter;
    vm.objEvent.filter = vm.filter;
    
  }

})();