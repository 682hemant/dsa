//doubly linked list practise
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;  
  }
}

class doublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){
    var newNode = new Node(val);
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    } 
    else{
      this.tail.next = newNode;
      newNode.prev =  this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop(){
     if(!this.head) return undefined;
     var poppedNode = this.tail;
     if(this.head === this.tail){
       this.head = null;
       this.tail = null;
     }else{
       this.tail = poppedNode.prev;
       this.tail.next = null;
       poppedNode.prev = null;

     }
     this.length--;
     return poppedNode;
  }
}

list = new doublyLinkedList;
list.push(15);
list.push(20);
console.log(list);