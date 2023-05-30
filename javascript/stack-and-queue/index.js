'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top; // if empty stack, top is set to null
    this.top = newNode;

  }

  pop() {
    let removedValue = null;
    if (this.top) {
      removedValue = this.top.value;
      this.top = this.top.next;
    }
    return removedValue;

  }

  //just looking at top.value;
  peek() {
    return this.top.value;
  }

  isEmpty() {
    return this.top === null;
    // if(this.top === null){
    //   return true;
    // } else {
    //   return false;
    // }
  }


}


class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.front) {
      //prepping to get in line
      this.back.next = newNode;
    } else {
      // if there is no front yet. we need to assign one!
      this.front = newNode;
    }
    //moving/assigning the back pointer to the newNode
    this.back = newNode;
  }

  dequeue() {
    let removedValue = null;
    if (this.front) {
      removedValue = this.front.value;
      // if there is only ONE node in the Queue, we have to make the back null
      if (this.front === this.back) {
        this.back = null;
      }
      // works if list is empty or populated, this will either be null, or next in the line
      this.front = this.front.next;

    }

    return removedValue;
  }

  peek() {
    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }
}
//!! CODE CHALLENGE 11

class PseduoQueue {
  constructor () {
    this.stackOne = [];
    this.stackTwo = [];
  }

  enqueue(value){
    while(this.stackOne.length > 0){
      this.stackTwo.push(this.stackOne.pop());
    }
    this.stackOne.push(value);

    while(this.stackTwo.length > 0){
      this.stackOne.push(this.stackTwo.pop());
    }
  }

  dequeue(){
    if(this.stackOne.length === 0 ){
      return null;
    }
    return this.stackOne.pop();
  }

}

module.exports = { Stack, Queue, PseduoQueue };
