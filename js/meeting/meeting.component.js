(function(){

  angular
  .module('meeting')
  .component('meetingList', {
    templateUrl: 'template/meeting.template.html',
    controller: MeetingController
  });
  
  MeetingController.$inject = ['meetingService'];
  
  function MeetingController(meetingService){
    var vm = this;
    vm.obj = meetingService.getObj();
    vm.textAdd = "";
    vm.timeAdd = ""
    
    vm.add = function(){meetingService.add(vm.textAdd, vm.timeAdd);}
    vm.completeOrNot = function(index){meetingService.completeOrNot(index);}
    vm.deleteSelectTodos = function(){meetingService.deleteSelectTodos();}
  }
  

})();