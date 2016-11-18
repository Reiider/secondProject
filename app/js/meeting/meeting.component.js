var template = require('html!./templates/meetingList.html');

'use strict'

class MeetingList{
  constructor(){

  }

  add(text, time){
    if(text != "" && time != ""){
      this.object.elems.push({
        select: false, 
        text: text,
        complete: false,
        optional: false,
        time: time
      })
    }
  }
  
  deleteSelectTodos(){
    var elems = this.object.elems;
    for(var i = 0; i < elems.length;){
      if(elems[i].select){
        elems.splice(i,1);
      }
      else i++;
    }
  }
}

export default {
  template,
  controller: MeetingList,
  controllerAs: 'Meeting',
  bindings:{
    object:'<',
    filter:'<'
  }
};