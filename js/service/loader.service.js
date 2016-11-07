(function(){
  'use strict'
  
  angular
  .module('app.service')
  .service('loaderService', LoaderService);
  
  LoaderService.$inject = ['$http'];
  
  function LoaderService($http){
    var serv = this;
    
    serv.setListDate = setListDate;
    serv.setTodo = setTodo;
    serv.setMeeting = setMeeting;
    serv.setEvent = setEvent;
    
    function setListDate(){
      var obj = {};
      obj.list = [];
      $http.get("json/listDate.json").then(function(res){
          obj.list = res.data;
        }, function(){
          alert("error: file with dates not loaded");
        }
      );
      return obj;
    }
    
    function setTodo(path){
      var obj = {};
      obj.elems = [];
      $http.get(path).then(function(res){
          var elements = res.data;
          for(var i = 0; i < elements.length; i++){
            obj.elems.push({
              select: false, 
              text: elements[i],
              complete: false,
              optional: false
            });
          }
        }, function(){
          alert("error: file with Todo not loaded");
        }
      );
      return obj;
    }
    
    function setMeeting(path){
      var obj = {};
      obj.elems = [];
      $http.get(path).then(function(res){
          var elements = res.data;
          for(var i = 0; i < elements.length; i++){
            obj.elems.push({
              select: false, 
              text: elements[i].text,
              complete: false,
              optional: false,
              time: elements[i].time
            });
          }
        }, function(){
          alert("error: file with Todo not loaded");
        }
      );
      return obj;
    }
    
    function setEvent(path){
      var obj = {};
      obj.elems = [];
      $http.get(path).then(function(res){
          var elements = res.data;
          for(var i = 0; i < elements.length; i++){
            obj.elems.push({
              select: false, 
              text: elements[i]
            });
          }
        }, function(){
          alert("error: file with Todo not loaded");
        }
      );
      return obj;
    }
    
  }

})();