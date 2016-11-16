import angular from 'angular';

const template = require('./templates/eventList.html');

(function() {
  'use strict'
  
  angular
  .module('app.event')
  .component('eventList', {
    template,
    controller: EventList,
    controllerAs: 'Event',
    bindings:{
      object:'<',
      filter:'<'
    }
  });
  
  function EventList(){
    var vm = this;
    
    vm.add = add;
    vm.deleteSelectTodos = deleteSelectTodos;
    
    function add(text){
      if(text != ""){
        vm.object.elems.push({
          select: false, 
          text: text
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