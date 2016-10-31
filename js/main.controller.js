(function() {
  'use strict'
  
  angular
  .module('app')
  .controller('MainController', MainController);
  
  MainController.$inject = ['mainService'];
  
  function MainController(mainService){
    var vm = this;
    vm.objTodo = mainService.getObjTodo();
    vm.objMeeting = mainService.getObjMeeting();
    vm.objEvent = mainService.getObjEvent();
    vm.filter = mainService.getFilter();
  }

})();