'use strict'

class MainController{
  static get $inject(){ return ['mainService']; };

  constructor(mainService){
    this.obj = {};
    this.obj.list = [];
    
    mainService.setListDate();
    
    this.obj = mainService.getListDate();
  }    
}

export default MainController;