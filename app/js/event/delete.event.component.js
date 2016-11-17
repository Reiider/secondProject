import angular from 'angular';

(function(){
  'use strict'
  
  angular
  .module('app.event')
  .component('eventDelete', {
    templateUrl: 'js/event/templates/delete.html',
    controllerAs: 'Delete',
    bindings:{
      del:'&'
    }
  });
  
})();