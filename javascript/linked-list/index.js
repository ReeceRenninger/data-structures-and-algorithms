'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  // adds node to front of linked list
  insert(value) {
    let node = new Node(value);
    node.next = this.head; // first time this will be null but value will adjust as more things are added
    this.head = node; // reassign the head: head pointer is MOVED when a value is added to the list so we have to move the head pointer back to the start of the linked list.
  }

  //adds a node to end of linked list
  append(value) {
    let node = new Node(value);
    //if head = null , we need to assign this new to the head as well
    if (!this.head) {
      //so if our list is empty do this and complete
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) { // searching through linked list for the next node to be null before adding
      current = current.next;
    }
    current.next = node; //
  }

  // // this will iterate along the linked list and do something
  // traversal() {
  //   let current = this.head;

  //   while (current) {
  //     // do something here
  //     console.log(current.value);
  //     //this moves us to the next node
  //     current = current.next;
  //   }
  // }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  toString() {
    let current = this.head;
    let result = ''; // empty string to fill
    while (current) {
      result = `${result} -> ${current.value} ->`; // result gets current.value added on each iteration
      current = current.next; // current.next is invoked to move to the next node in the list
    }
    result = `${result} -> `, null;
    return result;
  }
}

// string and boolean will require some type of traversal for the code challenge

module.exports = LinkedList;
