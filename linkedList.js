/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var head = null;
  var tail = null;
  var totalNodes = 0;

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
    totalNodes++;
    return node;
  }

  function getTail(){
    return tail;
  }

  function remove(num){

  }

  function get(num){
    var currentNode = head;
    var nextNode = null;
    var i = 0;
    if(num >= totalNodes){
      return false;
    } else {
      while(i < num){
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;
    }
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