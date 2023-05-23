'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  test('works', () => {
    expect(true).toBeTruthy();
  });

  test('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();

    expect(list.head).toBeNull();
  });

  test('Can properly insert into the linked list', () => {
    const list = new LinkedList();
    list.insert(1);

    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull();
  });

  test('Head property will properly point to the first node in the linked list', () => {
    const list = new LinkedList();

    list.insert(2);
    expect(list.head.value).toEqual(2);
    expect(list.head.next).toBeNull();
    // 'can properly insert multiple nodes into the linked list'
    list.insert(1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next).toBeNull();

    list.append('a');
    expect(list.head.next.next.value).toEqual('a');
  });

  test('Will return true if a specific value is found within the linked list', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');

    expect(list.includes('a')).toEqual(true);
  });

  test('Will return false if a specific value is NOT found within the linked list', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');

    expect(list.includes('f')).toEqual(false);
  });

  test('Can properly return a collection of all values in the linked list', () =>{
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');

    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> NULL');
  });


  //kth from end
  test('returns the value of the kth node from the end of the linked list', () => {
    // Create a sample linked list
    const head = { value: 1, next: null };
    const node2 = { value: 2, next: null };
    const node3 = { value: 3, next: null };
    const node4 = { value: 4, next: null };
    const node5 = { value: 5, next: null };

    head.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;

    expect((head, 2)).toBe(4);
    expect((head, 3)).toBe(3);
    expect((head, 1)).toBe(5);
  });

});

