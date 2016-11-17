import angular from 'angular';

'use strict'

class FilterController{
	static get $inject(){ return ['mainService']; };
	
  constructor(mainService){
  	this.filter = mainService.getFilter();
  }
}

angular
.module('app')
.controller('FilterController', FilterController);