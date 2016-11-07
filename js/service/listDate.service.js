(function(){
  'use strict'
  
  angular
  .module('app.service')
  .service('listDateService', ListDateService);
  
  ListDateService.$inject = ['loaderService'];
  
  function ListDateService(loaderService){
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