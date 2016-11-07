(function(){
  'use strict'
  
  angular
  .module('app.service')
  .service('mainService', MainService);
  
  MainService.$inject = ['loaderService'];
  
  function MainService(loaderService){
    var serv = this;
    serv.test = 'testing';
    var filter = {};
    serv.getFilter = getFilter;
    
    var objTodo = {};
    objTodo.elems = [];
    
    serv.setElemsTodo = setElemsTodo;
    serv.setTodoPath = setTodoPath;
    serv.getObjTodo = getObjTodo;
    
    var objMeeting = {};
    objMeeting.elems = [];
    
    serv.setElemsMeeting = setElemsMeeting;
    serv.setMeetingPath = setMeetingPath;
    serv.getObjMeeting = getObjMeeting;
    
    var objEvent = {};
    objEvent.elems = [];
    
    serv.setElemsEvent = setElemsEvent;
    serv.setEventPath = setEventPath;
    serv.getObjEvent = getObjEvent;
    
    var loadNext = {};
    loadNext['todo'] = objTodo;
    loadNext['meeting'] = objMeeting;
    loadNext['event'] = objEvent;
    loadNext.text = '';
    serv.setLoadFile = setLoadFile;
    serv.getLoadFile = getLoadFile;
    
    serv.setSelectElem = setSelectElem;
    serv.getSelectElem = getSelectElem;
    var date = {};
    date.date = "";
    function setSelectElem(d){
      date.date = d;
    }
    function getSelectElem(){
      return date;
    }
    
    function getFilter(){
      return filter;
    }
    
    function setLoadFile(textObj){
      loadNext.text = textObj;
    }
    function getLoadFile(){
      return loadNext[loadNext.text];
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