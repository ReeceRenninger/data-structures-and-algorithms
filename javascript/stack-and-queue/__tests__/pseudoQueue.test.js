'use strict';

const { PseduoQueue } = require('../index');

describe('PseudoQueue testing', () => {

  test('Enqueue method on a queue built with two stacks', () => {
    let queue = new PseduoQueue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);


    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
  });

  test('Dequeue method on a queue built with two stacks', () => {
    let queue = new PseduoQueue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);

    queue.enqueue(4);
    queue.enqueue(5);

    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(4);
    expect(queue.dequeue()).toBe(5);


  });


});

