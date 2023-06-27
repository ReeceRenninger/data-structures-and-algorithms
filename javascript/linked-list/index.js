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
    let result = `{ ${current.value} }`; // initialize variable with first value
    current = current.next; // have move the current to next to prevent it from doubling up on the first value
    while (current) {
      result = `${result} -> { ${current.value} }`; // result gets current.value added on each iteration
      current = current.next; // current.next is invoked to move to the next node in the list
    }
    result += ' -> NULL'; // once while loop is exited we add in the required NULL ending
    return result;
  }

  // append(value) {
  //   let node = new Node(value);
  //   //if head = null , we need to assign this new to the head as well
  //   if (!this.head) {
  //     //so if our list is empty do this and complete
  //     this.head = node;
  //     return;
  //   }
  //   let current = this.head;
  //   while (current.next) { // searching through linked list for the next node to be null before adding
  //     current = current.next;
  //   }
  //   current.next = node; //
  // }

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


  //!! Code Challenge 07:
  kthFromEnd(head, k) {
    let p1 = this.head;
    let p2 = this.head; // Move p2 ahead by k steps

    for (let i = 0; i < k; i++) {
      if (p2 === null) {
        return null; // Invalid k value, linked list is shorter
      }
      p2 = p2.next;
    }

    // Move both pointers until p2 reaches the end
    while (p2 !== null && p2.next !== null) {
      p1 = p1.next;
      p2 = p2.next;
    }

    return p1.value;
  }
  //!! Code Challenge 08:
  zip_lists(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    let placeHolder = new ListNode(0);
    let current = placeHolder;

    while (list1 && list2) {
      current.next = list1;
      list1 = list1.next;
      current = current.next;

      current.next = list2;
      list2 = list2.next;
      current = current.next;
    }

    if (list1) {
      current.next = list1;
    }

    if (list2) {
      current.next = list2;
    }

    return placeHolder.next;
  }



}


// string and boolean will require some type of traversal for the code challenge

module.exports = LinkedList;
