import angular from 'angular';

(function() {
  'use strict'
  
  class TodoList{
    constructor(){

    }
    
    add(text){
      if(text != ""){
        this.object.elems.push({
          select: false, 
          text: text,
          complete: false,
          optional: false
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

  angular
  .module('app.todo')
  .component('todoList', {
    templateUrl: './js/todo/templates/todoList.html',
    controller: TodoList,
    controllerAs: 'Todo',
    bindings:{
      object:'<',
      filter:'<'
    }
  });
  


})();