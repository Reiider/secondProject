import angular from 'angular';

(function(){
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

  angular
  .module('app.todo')
  .component('todoAdd', {
    templateUrl: 'js/todo/templates/add.html',
    controller: TodoAdd,
    controllerAs: 'Add',
    bindings:{
      text:'<',
      add:'&'      
    }
  });

})();