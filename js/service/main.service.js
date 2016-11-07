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
    
    var objTodo = {};
    objTodo.elems = [];
    objTodo.path = "";
    
    serv.setElemsTodo = setElemsTodo;
    serv.setTodoPath = setTodoPath;
    serv.getObjTodo = getObjTodo;
    
    var objMeeting = {};
    objMeeting.elems = [];
    objMeeting.path = "";
    
    serv.setElemsMeeting = setElemsMeeting;
    serv.setMeetingPath = setMeetingPath;
    serv.getObjMeeting = getObjMeeting;
    
    var objEvent = {};
    objEvent.elems = [];
    objEvent.path = "";
    
    serv.setElemsEvent = setElemsEvent;
    serv.setEventPath = setEventPath;
    serv.getObjEvent = getObjEvent;

    var objListDate = {};
    objListDate.list = [];
    
    serv.setListDate = setListDate;
    serv.getListDate = getListDate;
    
    function setListDate(){
      loaderService.setListDate(objListDate);
    }
    function getListDate(){
      return objListDate;
    }
    
    function getFilter(){
      return filter;
    }
    
    function setElemsTodo(){
      loaderService.setTodo(objTodo);
    }
    function setTodoPath(path){
      objTodo.path = path;
    }
    function getObjTodo(){
      return objTodo;
    }
    
    function setElemsMeeting(){
      loaderService.setMeeting(objMeeting);
    }
    function setMeetingPath(path){
      objMeeting.path = path;
    }
    function getObjMeeting(){
      return objMeeting;
    }
    
    function setElemsEvent(){
      loaderService.setEvent(objEvent);
    }
    function setEventPath(path){
      objEvent.path = path;
    }
    function getObjEvent(){
      return objEvent;
    }
  }

})();