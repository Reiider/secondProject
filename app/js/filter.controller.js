'use strict'

class FilterController{
	static get $inject(){ return ['mainService']; };
	
  constructor(mainService){
  	this.filter = mainService.getFilter();
  }
}

export default FilterController;