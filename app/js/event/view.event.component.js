import angular from 'angular';

(function(){
  'use strict'
  
  angular
  .module('app.event')
  .component('eventView', {
    templateUrl: 'js/event/templates/view.html',
    controllerAs: 'View',
    bindings:{
      object:'<',
      filter:'<'
    }
  });
  
})();