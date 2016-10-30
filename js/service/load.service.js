(function(){

  angular
  .module('service')
  .service('loadService', LoadService);
  
  LoadService.$inject = ['$http', '$q', 'todayService', 'todoService', 'meetingService', 'eventService'];
  
  function LoadService($http, $q, todayService, todoService, meetingService, eventService){
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
        }
      ).then(function(res){
          var data = res.data;
          todoService.setElems(data.todos);
          return loadNextFile(data.path);
        }, function(){
          alert("error of loading second file");
        } 
      ).then(function(res){
          var data = res.data;
          meetingService.setElems(data.meetings);
          return loadNextFile(data.path);
        }, function(){
          alert("error of loading third file");
        } 
      ).then(function(res){
          var data = res.data;
          eventService.setElems(data.events);
        }, function(){
          alert("error of loading fourth file");
        } 
      );
    }
    
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function loadNextFile(path){
      return $http.get(path);
    }
    
  }

})();