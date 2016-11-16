import angular from 'angular';

const template = require('./templates/meetingList.html');

(function() {
  'use strict'
  
  angular
  .module('app.meeting')
  .component('meetingList', {
    template,
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