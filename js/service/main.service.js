(function(){
  'use strict'
  
  angular
  .module('app.service')
  .service('mainService', MainService);
  
  MainService.$inject = ['loaderService'];
  
  function MainService(loaderService){
    var serv = this;

    var filter = {};
    serv.getFilter = getFilter;
    
    var massObject = {};
    serv.loadFile = loadFile;
    serv.newLoadFile = newLoadFile;
    
    var objTodo = {};
    objTodo.elems = [];
    
    serv.setElemsTodo = setElemsTodo;
    serv.getObjTodo = getObjTodo;
    
    var objMeeting = {};
    objMeeting.elems = [];
    
    serv.setElemsMeeting = setElemsMeeting;
    serv.getObjMeeting = getObjMeeting;
    
    var objEvent = {};
    objEvent.elems = [];
    
    serv.setElemsEvent = setElemsEvent;
    serv.getObjEvent = getObjEvent;

    var objListDate = {};
    objListDate.list = [];
    
    serv.setListDate = setListDate;
    serv.getListDate = getListDate;
    
    function loadFile(date){
      if(massObject[date]){
        objTodo = massObject[date].todo;
        objMeeting = massObject[date].meeting;
        objEvent = massObject[date].event;
        return true;
      }
      else return false;
    }
    function newLoadFile(elem){
      massObject[elem.date] = {};
      
      setElemsTodo(elem.paths.todo);
      setElemsMeeting(elem.paths.meeting);
      setElemsEvent(elem.paths.event);
      
      massObject[elem.date].todo = objTodo;
      massObject[elem.date].meeting = objMeeting;
      massObject[elem.date].event = objEvent;
    }
    
    function setListDate(){
      objListDate = loaderService.setListDate();
    }
    function getListDate(){
      return objListDate;
    }
    
    function getFilter(){
      return filter;
    }
    
    function setElemsTodo(path){
      objTodo = loaderService.setTodo(path);
    }
    function getObjTodo(){
      return objTodo;
    }
    
    function setElemsMeeting(path){
      objMeeting = loaderService.setMeeting(path);
    }
    function getObjMeeting(){
      return objMeeting;
    }
    
    function setElemsEvent(path){
      objEvent = loaderService.setEvent(path);
    }
    function getObjEvent(){
      return objEvent;
    }
  }

})();