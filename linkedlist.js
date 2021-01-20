// class Node{
//   constructor(val){
//     this.val=val;
//     this.next = null;
//   }
// }

// class SingalylinkedList{
//   constructor(){
//     this.head=null;
//     this.tail=null;
//     this.length = 0;
//   }
//   push(val){
//     var newNode = new Node(val);
//     if(!this.head){
//       this.head = newNode;
//       this.tail = this.head;
//     }
//     else{
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//     console.log(this);
//   }
//   pop(){
//     if(!this.head) return undefined;
//     var current = this.head;
//     var newTail = current;
//     while(current.next){
//       newTail = current;
//       current = current.next;
//     }
//     this.tail = newTail;
//     this.tail.next = null;
//     this.length--;
//     return current;
//   }
//   shift(){
//     if(!this.head) return undefined;
//     var currentHead = this.head;
//     this.head = currentHead.next;
//     this.length--;
//     return currentHead;
//   }
//   unShift(val){
//     var newNode = new Node(val);
//     if(!this.head){
//       this.head = newNode;
//       this.tail = newNode;
//     }
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }
// }


// var list = new SingalylinkedList()
// list.push("hello");
// list.push("hii");



// sorting alogorithm

// function bubblesort (arr){
//   for(let i=arr.length;i>0;i--){
//       for(let j=0;j<i-1;j++){
//         if(arr[j]>arr[j+1]){
//          var temp = arr[j];
//           arr[j]=arr[j+1];
//           arr[j+1] = temp;
//         }
//       }
//   }
//   return arr;
// }

// let sortedArray=bubblesort([10,8,11,3,7]);
// console.log(sortedArray.length);


// selection sort

// function selectionSort(arr){
//   for(let i=0;i<arr.length;i++){
//       let lowest=i;
//       for(let j=i+1;j<arr.length;j++){
//           if(arr[j]<arr[lowest]){
//            lowest = j;
//           }
//       }
//       let temp = arr[i];
//       arr[i] = arr[lowest];
//       arr[lowest] = temp;
//   }
//   return arr;
// }

// let sortedArray = selectionSort([10,8,11,3,7]);
// console.log(sortedArray);

//insertion sort
// function insertSort(arr){
//   return arr;
// }

// insertSort([10,8,11,3,7])


// stacks
// queue

// var q = [];
// q.push("first");
// q.push("second");
// q.push("third");
// q.shift();
// q.shift();
// q.shift();
// class Node {
//   constructor(value){
//     this.val = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor(){
//       this.first = null;
//       this.second = null;
//       this.size = 0;
//   }
//   enqueue(value){
//        var newNode = new Node(value);
//        if(!this.first) {
//          this.first = newNode;
//          this.last = newNode;
//        }else {
//          this.last.next = newNode;
//          this.last = newNode;
//        }
//        return ++this.size;
//   }
//   deque(){
//     if(!this.first) return null;
//     var temp = this.first;
//     if(this.first === this.last){
//       this.last = null;
//     }
//     this.first = this.first.next;
//     this.size--;
//     return temp.value;
//   }
// }

// var q = new Queue;
// q.enqueue("hello");
// q.enqueue("hii");
// console.log(q);