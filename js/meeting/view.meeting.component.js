(function(){
  'use strict'
  
  angular
  .module('meeting')
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
    var vm = this;
  }
  
})();