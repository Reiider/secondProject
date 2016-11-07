(function() {
  'use strict'
  
  angular
  .module('app')
  .controller('MainController', MainController);
  
  MainController.$inject = ['selectDateService', 'mainService'];
  
  function MainController(selectDateService, mainService){
    var vm = this;
    vm.obj = {};
    vm.obj.list = [];
    
    selectDateService.setListDate();
    
    vm.obj = selectDateService.getObj();
    
    vm.clickOnElem = clickOnElem;
    
    function clickOnElem(ind){
      var i = 0;
      var list = vm.obj.list;
      while(i < list.length){
        if(list[i].click) list[i].click = false;
        i++;
      }
      list[ind].click = true;
      
      mainService.setSelectElem(vm.obj.list[ind].date);
      mainService.setTodoPath(vm.obj.list[ind].paths.todo);
      mainService.setMeetingPath(vm.obj.list[ind].paths.meeting);
      mainService.setEventPath(vm.obj.list[ind].paths.event);
    }
  }

})();