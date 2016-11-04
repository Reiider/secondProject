(function(){
  'use strict'
  
  angular
  .module('service')
  .service('loadService', LoadService);
  
  LoadService.$inject = ['$http','todayService', 'mainService'];
  
  function LoadService($http, todayService, mainService){
    var serv = this;
    
    serv.load = load;
    
    function load(){
      var random = getRandomInt(1, 3);
      $http.get("json/"+random+".json").then(function(res){
          var data = res.data;
          todayService.setTodayDate(data.date);
          return loadNextFile(data.path);
        }, function(){
          alert("error of loading first file");
          return Promise.reject();
        }
      ).then(function(res){
          var data = res.data;
          mainService.setElemsTodo(data.todos);
          return loadNextFile(data.path);
        }, function(){
          alert("error of loading second file");
          return Promise.reject();
        } 
      ).then(function(res){
          var data = res.data;
          mainService.setElemsMeeting(data.meetings);
          return loadNextFile(data.path);
        }, function(){
          alert("error of loading third file");
          return Promise.reject();
        } 
      ).then(function(res){
          var data = res.data;
          mainService.setElemsEvent(data.events);
        }, function(){
          alert("error of loading fourth file");
        } 
      ).catch(function(){
        alert('error');
      });
     
    }
    
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function loadNextFile(path){
      return $http.get(path);
    }
    
    
  }

})();
