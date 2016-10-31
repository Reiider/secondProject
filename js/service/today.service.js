(function(){
  'use strict'
  
  angular
  .module('service')
  .service('todayService', TodayService);
  
  function TodayService(){
    var serv = this;
    
    var today = {};
    today.date = "00.00.0000";
    
    serv.getToday = getToday;
    serv.setTodayDate = setTodayDate;
    
    function getToday(){
      return today;
    }
    
    function setTodayDate(date){
      today.date = date;
    }
  }

})();