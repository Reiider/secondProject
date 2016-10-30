(function(){

  angular
  .module('service')
  .service('eventService', EventService);
  
  function EventService(){
    var serv = this;
    
    var obj = {};
    obj.elems = [];
    
    this.setElems = setElems;
    this.getObj = getObj;
    this.add = add;
    this.deleteSelectTodos = deleteSelectTodos;
    
    function setElems(elements){
      for(var i = 0; i < elements.length; i++){
        obj.elems.push({
          select: false, 
          text: elements[i]
        });
      }
    }
    
    function getObj(){
      return obj;
    }
    
    function add(text){
      if(text != ""){
        obj.elems.push({
          select: false, 
          text: text
        })
      }
    }
    
    function deleteSelectTodos(){
      for(var i = 0; i < obj.elems.length;){
        if(obj.elems[i].select){
          obj.elems.splice(i,1);
        }
        else i++;
      }
    }
  }

})();