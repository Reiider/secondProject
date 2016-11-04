(function(){
  'use strict'
  
  angular
  .module('meeting')
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