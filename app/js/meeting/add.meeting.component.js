var template = require('html!./templates/add.html');

'use strict'

class MeetingAdd{
  constructor(){
    this.text = "";
    this.time = "";
  }
  
  addElem(){
    this.add({text: this.text, time: this.time});
    this.text = "";
    this.time = "";
  }
}

export default {
  template,
  controller: MeetingAdd,
  controllerAs: 'Add',
  bindings:{
    text:'<',
    time:'<',
    add:'&'      
  }
};