(function() {
  'use strict'
  
  angular
  .module('app')
  .controller('TodayController', TodayController);
  
  TodayController.$inject = ['todayService', 'loadService'];
  
  function TodayController(todayService, loadService){
    var vm = this;
    loadService.load();
    vm.today = todayService.getToday();
  }

})();