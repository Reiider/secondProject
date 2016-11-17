import angular from 'angular';

(function(){
  'use strict'
  
  angular
  .module('app.todo')
  .component('todoView', {
    templateUrl: 'js/todo/templates/view.html',
    controllerAs: 'View',
    bindings:{
      object:'<',
      filter:'<'
    }
  });
  
})();