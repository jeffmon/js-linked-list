/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var head = null;
  var tail = null;

  function getHead(){
    return head;
  }

  function add(value){
    var node = {
      value: value,
      next: null
    };
    if(getHead() === null){
      head = node;
    }
    else {
      getTail().next = node;
    }
    tail = node;
    return node;
  }

  function getTail(){
    return tail;
  }

  function remove(num){

  }

  function get(num){

  }

  function insert(val, num){

  }


  return{
    getHead,
    add,
    getTail,
    remove,
    get,
    insert
  };
}

var myLL = linkedListGenerator();
myLL.add("Jeff");
console.log(myLL.getHead());