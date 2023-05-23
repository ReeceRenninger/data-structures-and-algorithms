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

  // insert newValue in node position BEFORE the called value
  insertBefore(value, newValue) {
    const node = new Node(newValue);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        node.next = current.next;
        current.next = node;
        return;
      }
      current = current.next;
    }
    current.next = node;
  }

  // insert newValue in node position AFTER the called value
  insertAfter(value, newValue) {
    let node = new Node(newValue);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current) {
      if (current.value === value) {
        node.next = current.next;
        current.next = node;
        return;
      }
      current = current.next;
    }
    current.next = node;

  }
}


module.exports = LinkedList;
