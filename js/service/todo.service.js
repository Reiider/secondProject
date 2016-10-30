(function(){

  angular
  .module('service')
  .service('todoService', TodoService);
  
  function TodoService(){
    var serv = this;
    
    var obj = {};
    obj.elems = [];
    obj.filter = {};
    
    serv.setElems = setElems;
    serv.getObj = getObj;
    serv.add = add;
    serv.deleteSelectTodos = deleteSelectTodos;
    
    function setElems(elements){
      for(var i = 0; i < elements.length; i++){
        obj.elems.push({
          select: false, 
          text: elements[i],
          complete: false,
          optional: false
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
          text: text,
          complete: false,
          optional: false
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