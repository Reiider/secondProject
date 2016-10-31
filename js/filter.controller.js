(function() {
  'use strict'
  
  angular
  .module('app')
  .controller('FilterController', FilterController);
  
  FilterController.$inject = ['mainService'];
  
  function FilterController(mainService){
    var vm = this;
    vm.filter = mainService.getFilter();
  }

})();