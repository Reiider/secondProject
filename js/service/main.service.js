(function(){
  'use strict'
  
  angular
  .module('service')
  .service('mainService', MainService);
  
  function MainService(){
    var serv = this;
    
    var filter = {};
    serv.getFilter = getFilter;
    
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
    
    function getFilter(){
      return filter;
    }
    
    function setElemsTodo(elements){
      for(var i = 0; i < elements.length; i++){
        objTodo.elems.push({
          select: false, 
          text: elements[i],
          complete: false,
          optional: false
        });
      }
    }
    
    function getObjTodo(){
      return objTodo;
    }
    
    function setElemsMeeting(elements){
      for(var i = 0; i < elements.length; i++){
        objMeeting.elems.push({
          select: false, 
          text: elements[i].text,
          complete: false,
          optional: false,
          time: elements[i].time
        });
      }
    }
    
    function getObjMeeting(){
      return objMeeting;
    }
    
    function setElemsEvent(elements){
      for(var i = 0; i < elements.length; i++){
        objEvent.elems.push({
          select: false, 
          text: elements[i]
        });
      }
    }
    
    function getObjEvent(){
      return objEvent;
    }
  }

})();