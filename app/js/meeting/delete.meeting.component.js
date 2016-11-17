import angular from 'angular';

(function(){
  'use strict'
  
  angular
  .module('app.meeting')
  .component('meetingDelete', {
    templateUrl: 'js/meeting/templates/delete.html',
    controllerAs: 'Delete',
    bindings:{
      del:'&'
    }
  });
  
})();