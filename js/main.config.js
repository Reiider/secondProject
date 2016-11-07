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
        resolve: {
            set: setPaths
        }
      },
      {
        name: 'date.todo',
        component: 'todoList',
        url: '/todo',
        resolve:{
          object: getTodo,
          filter: getFilter
        }
      },
      {
        name: 'date.meeting',
        component: 'meetingList',
        url: '/meeting',
        resolve:{
          object: getMeeting,
          filter: getFilter
        }
      },
      {
        name: 'date.event',
        component: 'eventList',
        url: '/event',
        resolve:{
          object: getEvent,
          filter: getFilter
        }
      }
    ];
    
    states.forEach(function(state) {
      $stateProvider.state(state);
    });
    $urlRouterProvider.otherwise('/');
  }

  setPaths.$inject = ['mainService', '$stateParams'];
  function setPaths(mainService, $stateParams){
    var id = $stateParams.id;
    if(!mainService.loadFile(id)){
      var listDate = mainService.getListDate().list;
      for(var i = 0; i < listDate.length; i++){
        if(id === listDate[i].date){
          mainService.newLoadFile(listDate[i]);
        }
      }
    }
  }
  
  getTodo.$inject = ['mainService'];
  function getTodo(mainService){
    return mainService.getObjTodo();
  }
  
  getMeeting.$inject = ['mainService'];
  function getMeeting(mainService){
    return mainService.getObjMeeting();
  }
  
  getEvent.$inject = ['mainService'];
  function getEvent(mainService){
    return mainService.getObjEvent();
  }
  
  getFilter.$inject = ['mainService'];
  function getFilter(mainService){
    return mainService.getFilter();
  }
  
})();