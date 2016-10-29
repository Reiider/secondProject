(function(){

  angular
  .module('service')
  .service('loadService', LoadService);
  
  LoadService.$inject = ['$http', '$q', 'todayService', 'todoService'];
  
  function LoadService($http, $q, todayService, todoService){
    var serv = this;
    serv.load = load;

    function load(){
      var random = getRandomInt(1, 3);
      $http.get("json/"+random+".json").then(function(res){
          var data = res.data;
          todayService.setTodayDate(data.date);
          return loadTodos(data.path);
        }, function(){
          alert("error of loading first file");
        }
      ).then(function(res){
          var data = res.data;
          todoService.setElems(data.todos);
          //return loadMeeting(data.path);
        }, function(){
          alert("error of loading second file");
        } 
      );
    }
    
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function loadTodos(path){
      return $http.get(path);
    }
    
  }

})();