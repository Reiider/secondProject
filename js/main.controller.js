(function() {
  'use strict'
  
  angular
  .module('app')
  .controller('MainController', MainController);
  
  MainController.$inject = ['mainService'];
  
  function MainController(mainService){
    var vm = this;
    vm.obj = {};
    vm.obj.list = [];
    
    mainService.setListDate();
    
    vm.obj = mainService.getListDate();  
  }

})();