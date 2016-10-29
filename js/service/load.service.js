(function(){

  angular
  .module('service')
  .service('loadService', LoadService);
  
  LoadService.$inject = ['$http', '$q', 'todayService'];
  
  function LoadService($http, $q, todayService){
    var serv = this;
    serv.load = load;

    function load(){
      var random = getRandomInt(1, 3); //need random
      $http.get("json/"+random+".json").then(function(res){
          var data = res.data;
          todayService.setTodayDate(data.date);
          //return loadMeeting(data.path);
        }, function(res){
          alert("error of loading");
        }
      );
    }
    
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    /*function loadMeeting(path){
      var deferred = $q.defer();
      
      return deferred.promise;
    }*/
    
  }

})();