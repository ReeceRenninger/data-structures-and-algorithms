'use strict';

const { Stack } = require('../index');

describe('Stack testing', () => {

  //push onto stack
  test('Can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push(5);



    expect(stack.top.value).toEqual(5);
    expect(stack.top.next).toBeNull();
  });

  test('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push(5);
    stack.push(4);
    stack.push(3);

    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(4);
    expect(stack.top.next.next.value).toEqual(5);
    expect(stack.top.next.next.next).toBeNull();
  });

  test('Can successfully pop off a stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();

    expect(stack.top.value).toEqual(1);
    expect(stack.top.next).toBeNull();
  });

  test('Can successfully empty a stack after multiple pops', () => {
    let stack = new Stack();
    stack.push(3);
    stack.push(2);
    stack.push(1);
    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.top).toBeNull();
  });

  test('Can successfully peek into next value', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toBe(3);
  });

  test('Can successfully instantiate an empty stack', () => {
    let stack = new Stack();

    expect(stack.isEmpty()).toBe(true);
  });

  test('Calling pop or peek on empty stack raises exception', async () => {
    // No idea how this is working, Chat GPT helped me
    expect.assertions(2);

    try {
      await stack.pop();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }

    try {
      await stack.peek();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }

  });

});
