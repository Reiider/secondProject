(function(){
  'use strict'
  
  angular
  .module('app.meeting')
  .component('meetingAdd', {
    templateUrl: 'js/meeting/templates/add.html',
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
