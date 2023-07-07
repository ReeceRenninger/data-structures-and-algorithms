'use strict';

const isCircular = require('.');
const LinkedList = require('../linked-list/index');

describe('Circular Linked List testing', () => {

  test('Can detect that a linked list is NOT circular', () => {
    const list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);

    expect(isCircular(list)).toBeFalsy();
  });

  test('Can detect that a linked list IS circular', () => {
    const list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);
    list.head.next.next.next.next = list.head;

    expect(isCircular(list)).toBeTruthy();
  });

});
