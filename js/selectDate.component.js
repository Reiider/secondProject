(function() {
  'use strict'
  
  angular
  .module('app')
  .component('selectDate', {
    templateUrl:'js/routeTemplates/selectedDate.html',
    controller: SelectDate
  });
  
  SelectDate.$inject = ['mainService'];
  
  function SelectDate(mainService){
    var vm = this;
    
  }

})();