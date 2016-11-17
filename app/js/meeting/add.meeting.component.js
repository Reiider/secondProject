import angular from 'angular';

(function(){
  'use strict'
 
  class MeetingAdd{
    constructor(){
      this.text = "";
      this.time = "";
    }
    
    addElem(){
      this.add({text: this.text, time: this.time});
      this.text = "";
      this.time = "";
    }
  }

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
  
})();