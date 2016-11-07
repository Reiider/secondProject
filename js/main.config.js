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

  setPaths.$inject = ['mainService', '$stateParams', '$q'];
  function setPaths(mainService, $stateParams, $q){
    var deferred = $q.defer();
    setTimeout(function(){
      var id = $stateParams.id;
      var listDate = mainService.getListDate().list;
      for(var i = 0; i < listDate.length; i++){
        if(id === listDate[i].date){
          mainService.setTodoPath(listDate[i].paths.todo);
          mainService.setMeetingPath(listDate[i].paths.meeting);
          mainService.setEventPath(listDate[i].paths.event);
          deferred.resolve(true);
        }
      }
      deferred.reject(false);
    },0);
    return deferred.promise;
  }
  
  getTodo.$inject = ['mainService'];
  function getTodo(mainService){
    mainService.setElemsTodo();
    return mainService.getObjTodo();
  }
  
  getMeeting.$inject = ['mainService'];
  function getMeeting(mainService){
    mainService.setElemsMeeting();
    return mainService.getObjMeeting();
  }
  
  getEvent.$inject = ['mainService'];
  function getEvent(mainService){
    mainService.setElemsEvent();
    return mainService.getObjEvent();
  }
  
  getFilter.$inject = ['mainService'];
  function getFilter(mainService){
    return mainService.getFilter();
  }
  
})();