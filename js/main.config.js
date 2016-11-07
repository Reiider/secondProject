(function() {
  'use strict';
  
  angular
  .module('app')
  .config(configure);
  
  configure.$ingect = ['$stateProvider', '$urlRouterProvider'];
  
  function configure($stateProvider, $urlRouterProvider) {   
    var states = [
      {
        abstract: true,
        name: 'date', 
        url: '/date/{id}', 
        component: 'selectDate', 
      },
      {
        name: 'date.todo',
        component: 'todoList',
        url: '/todo',
        resolve:{
          object: getObject,
          filter: getFilter
        }
      },
      {
        name: 'date.meeting',
        component: 'meetingList',
        url: '/meeting',
        resolve:{
          object: getObject,
          filter: getFilter
        }
      },
      {
        name: 'date.event',
        component: 'eventList',
        url: '/event',
        resolve:{
          object: getObject,
          filter: getFilter
        }
      }
    ];
    
    states.forEach(function(state) {
      $stateProvider.state(state);
    });
    $urlRouterProvider.otherwise('/');
  }

  getObject.$inject = ['mainService'];
  function getObject(mainService){
    return mainService.getObjTodo();
    //this.filter = mainService.getFilter();
  }
  
  getObject.$inject = ['mainService'];
  function getFilter(mainService){
    //return mainService.getObjTodo();
    return mainService.getFilter();
  }
})();