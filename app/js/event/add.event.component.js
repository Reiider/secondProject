import angular from 'angular';

(function(){
  'use strict'

  class EventAdd{
    constructor(){
      this.text = ""; 
    }
    
    addElem(){
      this.add({value: this.text});
      this.text = ""; 
    }
  }

  angular
  .module('app.event')
  .component('eventAdd', {
    templateUrl: 'js/event/templates/add.html',
    controller: EventAdd,
    controllerAs: 'Add',
    bindings:{
      text:'<',
      add:'&'      
    }
  });

})();