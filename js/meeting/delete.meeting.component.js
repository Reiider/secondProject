(function(){
  'use strict'
  
  angular
  .module('app.meeting')
  .component('meetingDelete', {
    templateUrl: 'js/meeting/templates/delete.html',
    controller: MeetingDelete,
    controllerAs: 'Delete',
    bindings:{
      del:'&'
    }
  });
  
  function MeetingDelete(){
    var vm = this;
  }
  
})();