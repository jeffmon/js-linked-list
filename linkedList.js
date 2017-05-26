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
    var curNodeParent = get(num - 2);
    var curNode = get(num - 1);
    var newNode = {
      value: val,
      next: curNode.next
    };
    if(num === 0){
      newNode.next = curNode;
      head = newNode;
      totalNodes++;
    } else if (num > getTotal() || num < 0){
      return false;
    } else {
      curNode.next = newNode;
      totalNodes++;
    }
  }

  function getTotal(){
    return totalNodes;
  }


  return{
    getHead,
    add,
    getTail,
    remove,
    get,
    insert,
    getTotal
  };
}

var myLL = linkedListGenerator();
console.log(myLL.getTotal());

myLL.add("Jeff");
console.log(myLL.getTotal());
myLL.add("max");
console.log(myLL.getTotal());
myLL.add("ryu");
console.log(myLL.getTotal());
myLL.add("ken");
console.log(myLL.getTotal());
myLL.insert("bison", 3);
console.log(myLL.getTotal());

//console.log(JSON.stringify(myLL.getHead()));
//console.log(myLL.getTotal());
