(function(){

  angular
  .module('service')
  .service('todoService', TodoService);
  
  function TodoService(){
    var serv = this;
    
    var obj = {};
    obj.elems = [];
    obj.pathCompleteOrNot = "";
    var pathForImgCompleteTrue = "";  //complete (v)
    var pathForImgCompleteFalse = ""; //not complete (x)
    
    this.setElems = setElems;
    this.getObj = getObj;
    this.add = add;
    this.completeOrNot = completeOrNot;
    this.deleteSelectTodos = deleteSelectTodos;
    
    function setElems(elements){
      for(var i = 0; i < elements.length; i++){
        obj.elems.push({
          select: false, 
          text: elements[i],
          complete: false
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
          complete: false
        })
      }
    }
    
    function completeOrNot(index){
      if(obj.elems[index].complete){
        obj.pathCompleteOrNot = pathForImgCompleteFalse;
        obj.elems[index].complete = false;
        //change background to white
      }
      else{
        obj.pathCompleteOrNot = pathForImgCompleteTrue;
        obj.elems[index].complete = true;
        //change background to green
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