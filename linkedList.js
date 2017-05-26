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
      totalNodes++;
    }
    tail = node;

    return node;
  }

  function getTail(){
    return tail;
  }

  function remove(num){
    var curNodeParent = get(num - 1);
    var curNode = get(num);

    if(num === 0){
      head = head.next;
    } else if(num > totalNodes){
      return false;
    } else if(num === totalNodes){
      curNodeParent.next = null;
      tail = curNodeParent;
      totalNodes--;
    }

    else {
      curNodeParent.next = curNode.next;
      totalNodes--;
      console.log("head", head);
      console.log("tail", tail);
    }
  }

  function get(num){
    var currentNode = head;
    var i = 0;
    if(num > totalNodes){
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
myLL.add("max");
myLL.add("ryu");
myLL.add("ken");
console.log(myLL.remove(3));
console.log(JSON.stringify(myLL.getHead()));
