import angular from 'angular';

(function(){
  'use strict'
  
  angular
  .module('app.meeting')
  .component('meetingView', {
    templateUrl: 'js/meeting/templates/view.html',
    controller: MeetingView,
    controllerAs: 'View',
    bindings:{
      object:'<',
      filter:'<'
    }
  });
  
  function MeetingView(){

  }
  
})();