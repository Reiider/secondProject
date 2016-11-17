import angular from 'angular';

(function() {
  'use strict'
  
  class MeetingList{
    constructor(){

    }

    add(text, time){
      if(text != "" && time != ""){
        this.object.elems.push({
          select: false, 
          text: text,
          complete: false,
          optional: false,
          time: time
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
  .module('app.meeting')
  .component('meetingList', {
    templateUrl: './js/meeting/templates/meetingList.html',
    controller: MeetingList,
    controllerAs: 'Meeting',
    bindings:{
      object:'<',
      filter:'<'
    }
  });

})();