(function() {
  'use strict'
  
  angular
  .module('meeting')
  .component('meetingList', {
    templateUrl:'js/meeting/templates/meetingList.html',
    controller: MeetingList,
    controllerAs: 'Meeting',
    bindings:{
      object:'<',
      filter:'<'
    }
  });
  
  function MeetingList(){
    var vm = this;
    
    vm.add = add;
    vm.deleteSelectTodos = deleteSelectTodos;
    
    function add(text, time){
      if(text != "" && time != ""){
        vm.object.elems.push({
          select: false, 
          text: text,
          complete: false,
          optional: false,
          time: time
        })
      }
    }
    
    function deleteSelectTodos(){
      var elems = vm.object.elems;
      for(var i = 0; i < elems.length;){
        if(elems[i].select){
          elems.splice(i,1);
        }
        else i++;
      }
    }
  }

})();