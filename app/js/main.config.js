'use strict';

class Configure {   
  static get $inject(){ return ['$stateProvider', '$urlRouterProvider']; };

  constructor($stateProvider, $urlRouterProvider){
    this.loadFiles.$inject = ['mainService', '$stateParams', '$q'];
    this.getTodo.$inject = ['mainService'];
    this.getMeeting.$inject = ['mainService'];
    this.getEvent.$inject = ['mainService'];
    this.getFilter.$inject = ['mainService'];
    
    var states = [
      {
        abstract: true,
        name: 'date', 
        url: '/date/{id}', 
        component: 'selectDate',
        resolve: {
            set: this.loadFiles
        }
      },
      {
        name: 'date.todo',
        component: 'todoList',
        url: '/todo',
        resolve:{
          object: this.getTodo,
          filter: this.getFilter
        }
      },
      {
        name: 'date.meeting',
        component: 'meetingList',
        url: '/meeting',
        resolve:{
          object: this.getMeeting,
          filter: this.getFilter
        }
      },
      {
        name: 'date.event',
        component: 'eventList',
        url: '/event',
        resolve:{
          object: this.getEvent,
          filter: this.getFilter
        }
      },
      {
        name: 'toForm',
        component: 'theForm',
        url: '/form',
        resolve:{
        }
      }
    ];
    
    states.forEach(function(state) {
      $stateProvider.state(state);
    });
    $urlRouterProvider.otherwise('/');
  }

  loadFiles(mainService, $stateParams, $q){
    var deferred = $q.defer();
    
    var id = $stateParams.id;
    if(!mainService.loadFile(id)){
      var listDate = mainService.getListDate().list;
      for(var i = 0; i < listDate.length; i++){
        if(id === listDate[i].date){
          mainService.newLoadFile(listDate[i]);
        }
      }
    }
    setTimeout(function(){
      if(mainService.getObjTodo().error){
        alert(mainService.getObjTodo().error);
        deferred.reject();
      } else if(mainService.getObjMeeting().error){
        alert(mainService.getObjMeeting().error);
        deferred.reject();
      } else if(mainService.getObjEvent().error){
        alert(mainService.getObjEvent().error);
        deferred.reject();
      }
      deferred.resolve();
    },100);
    return deferred.promise;
  }

  getTodo(mainService){
    return mainService.getObjTodo();
  }

  getMeeting(mainService){
    return mainService.getObjMeeting();
  }

  getEvent(mainService){
    return mainService.getObjEvent();
  }

  getFilter(mainService){
    return mainService.getFilter();
  }

  static factory(){
    const func = function($stateProvider, $urlRouterProvider){
      return new Configure($stateProvider, $urlRouterProvider);
    }
    func.$inject = ['$stateProvider', '$urlRouterProvider'];
    return func;
  } 
}

export default Configure.factory();