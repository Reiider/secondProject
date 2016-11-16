import angular from 'angular';

const template = require('./selectedDate.html');

(function() {
  'use strict'
  
  angular
  .module('app')
  .component('selectDate', {
    template,
    controller: SelectDate
  });
  
  SelectDate.$inject = ['mainService'];
  
  function SelectDate(mainService){
    
  }

})();