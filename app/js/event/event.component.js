import angular from 'angular';

(function() {
  'use strict'
  
  class EventList{
    constructor(){

    }
    
    add(text){
      if(text != ""){
        this.object.elems.push({
          select: false, 
          text: text
        })
      }
    }
    
    deleteSelectTodos(){
      var elems = this.object.elems;
      for(var i = 0; i < elems.length;){
        if(elems[i].select){
          elems.splice(i,1);
        }
        else i++;
      }
    }
  }

  angular
  .module('app.event')
  .component('eventList', {
    templateUrl: './js/event/templates/eventList.html',
    controller: EventList,
    controllerAs: 'Event',
    bindings:{
      object:'<',
      filter:'<'
    }
  });

})();