(function(){
  'use strict'
  
  angular
  .module('app.service')
  .service('selectDateService', SelectDateService);
  
  SelectDateService.$inject = ['loaderService'];
  
  function SelectDateService(loaderService){
    var serv = this;
    
    var obj = {};
    obj.list = [];
    
    serv.setListDate = setListDate;
    serv.getObj = getObj;
    
    function getObj(){
      return obj;
    }
    
    function setListDate(){
      loaderService.setListDate(obj);
    }
  }

})();