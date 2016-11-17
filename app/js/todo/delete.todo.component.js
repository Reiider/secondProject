import angular from 'angular';

(function(){
  'use strict'
  
  angular
  .module('app.todo')
  .component('todoDelete', {
    templateUrl: 'js/todo/templates/delete.html',
    controllerAs: 'Delete',
    bindings:{
      del:'&'
    }
  });
  
})();