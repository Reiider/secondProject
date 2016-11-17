import angular from 'angular';

(function(){
  'use strict'
  
  class LoaderService{
    static get $inject(){ return ['$http']; };

    constructor($http){
        this.$http = $http;
    }

    setListDate(){
      var obj = {};
      obj.list = [];
      this.$http.get("json/listDate.json").then(
        (res) => {
          obj.list = res.data;
        }, 
        () => {
          alert("error: file with dates not loaded");
        }
      );
      return obj;
    }
    
    setTodo(path){
      var obj = {};
      obj.elems = [];
      this.$http.get(path).then( 
        (res) => {
          var elements = res.data;
          for(var i = 0; i < elements.length; i++){
            obj.elems.push({
              select: false, 
              text: elements[i],
              complete: false,
              optional: false
            });
          }
        }, 
        () => {
          obj.error = "error: file with Todo not loaded";
        }
      );
      return obj;
    }
    
    setMeeting(path){
      var obj = {};
      obj.elems = [];
      this.$http.get(path).then(
        (res) => {
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
        }, 
        () => {
          obj.error = "error: file with Meeting not loaded";
        }
      );
      return obj;
    }
    
    setEvent(path){
      var obj = {};
      obj.elems = [];
      this.$http.get(path).then(
        (res) => {
          var elements = res.data;
          for(var i = 0; i < elements.length; i++){
            obj.elems.push({
              select: false, 
              text: elements[i]
            });
          }
        },
        () => {
          obj.error = "error: file with Event not loaded";
        }
      );
      return obj;
    } 
  }

  angular
  .module('app.service')
  .service('loaderService', LoaderService);

})();