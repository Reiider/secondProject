(function() {
  'use strict'
  
  angular
  .module('app')
  .component('selectDate', {
    templateUrl:'js/selectedDate.html',
    controller: SelectDate
  });
  
  SelectDate.$inject = ['mainService'];
  
  function SelectDate(mainService){
    
  }

})();