(function(){

  angular
  .module('service')
  .service('meetingService', MeetingService);
  
  function MeetingService(){
    var serv = this;
    
    var obj = {};
    obj.elems = [];
    obj.filter = {};
    obj.filter.find = "";
    
    serv.setElems = setElems;
    serv.getObj = getObj;
    serv.add = add;
    serv.completeOrNot = completeOrNot;
    serv.deleteSelectTodos = deleteSelectTodos;
    
    function setElems(elements){
      for(var i = 0; i < elements.length; i++){
        obj.elems.push({
          select: false, 
          text: elements[i].text,
          complete: false,
          time: elements[i].time
        });
      }
    }
    
    function getObj(){
      return obj;
    }
    
    function add(text, time){
      if(text != "" && time != ""){
        obj.elems.push({
          select: false, 
          text: text,
          complete: false,
          time: time
        })
      }
    }
    
    function completeOrNot(index){
      if(obj.elems[index].complete){
        obj.elems[index].complete = false;
      }
      else{
        obj.elems[index].complete = true;
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