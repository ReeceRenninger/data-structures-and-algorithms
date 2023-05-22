'use strict';

const LinkedList = require('../index');

describe ('Linked list', () => {
  test('works', () => {
    expect(true).toBeTruthy();
  });

  test('can successfully append a node into the linked list', () => {
    const list = new LinkedList();
    list.append('1');
    list.append('3');
    list.append('2');
    list.append('5');

    expect(list.includes('5')).toEqual(true);
  });

  test('can successfully insert a node after a value is found', () => {
    const list = new LinkedList();

  });

});
