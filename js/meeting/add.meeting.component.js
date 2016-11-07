(function(){
  'use strict'
  
  angular
  .module('meeting')
  .component('meetingAdd', {
    templateUrl: 'template/meeting/add.html',
    controller: MeetingAdd,
    controllerAs: 'Add',
    bindings:{
      text:'<',
      time:'<',
      add:'&'      
    }
  });
  
  function MeetingAdd(){
    var vm = this;
    vm.text = "";
    vm.time = "";
    
    vm.addElem = addElem;
    
    function addElem(){
      vm.add({text: vm.text, time: vm.time});
    }
  }
  
})();
