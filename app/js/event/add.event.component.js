var template = require('html!./templates/add.html');

'use strict'

class EventAdd{
  constructor(){
    this.text = ""; 
  }
  
  addElem(){
    this.add({value: this.text});
    this.text = ""; 
  }
}

export default {
  template,
  controller: EventAdd,
  controllerAs: 'Add',
  bindings:{
    text:'<',
    add:'&'      
  }
};