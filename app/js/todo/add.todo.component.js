var template = require('html!./templates/add.html');

'use strict'

class TodoAdd{
  constructor(){
    this.text = "";  
  }

  addElem(){
    this.add({text: this.text});
    this.text = "";
  }
}

export default {
  template,
  controller: TodoAdd,
  controllerAs: 'Add',
  bindings:{
    text:'<',
    add:'&'      
  }
};