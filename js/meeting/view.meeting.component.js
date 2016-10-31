(function(){
  'use strict'
  
  angular
  .module('meeting')
  .component('meetingView', {
    templateUrl: 'template/meeting/view.html',
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