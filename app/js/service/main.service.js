'use strict'

class MainService{
  static get $inject(){ return ['loaderService']; };

  constructor(loaderService){
    this.loaderService = loaderService;  

    this.filter = {};
    
    this.massObject = {};
    
    this.objTodo = {};
    this.objTodo.elems = [];
    
    this.objMeeting = {};
    this.objMeeting.elems = [];
    
    this.objEvent = {};
    this.objEvent.elems = [];

    this.objListDate = {};
    this.objListDate.list = [];
  }
  
  
  loadFile(date){
    if(this.massObject[date]){
      this.objTodo = this.massObject[date].todo;
      this.objMeeting = this.massObject[date].meeting;
      this.objEvent = this.massObject[date].event;
      return true;
    }
    else return false;
  }
  newLoadFile(elem){
    this.massObject[elem.date] = {};
    
    this.setElemsTodo(elem.paths.todo);
    this.setElemsMeeting(elem.paths.meeting);
    this.setElemsEvent(elem.paths.event);
    
    this.massObject[elem.date].todo = this.objTodo;
    this.massObject[elem.date].meeting = this.objMeeting;
    this.massObject[elem.date].event = this.objEvent;
  }
  
  setListDate(){
    this.objListDate = this.loaderService.setListDate();
  }
  getListDate(){
    return this.objListDate;
  }
  
  getFilter(){
    return this.filter;
  }
  
  setElemsTodo(path){
    this.objTodo = this.loaderService.setTodo(path);
  }
  getObjTodo(){
    return this.objTodo;
  }
  
  setElemsMeeting(path){
    this.objMeeting = this.loaderService.setMeeting(path);
  }
  getObjMeeting(){
    return this.objMeeting;
  }
  
  setElemsEvent(path){
    this.objEvent = this.loaderService.setEvent(path);
  }
  getObjEvent(){
    return this.objEvent;
  }
}

export default MainService;