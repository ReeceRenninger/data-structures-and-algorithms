'use strict';

const { Animal, AnimalShelter } = require('../index');


describe('AnimalShelter', () => {
  let shelter;

  beforeEach(() => {
    shelter = new AnimalShelter();
  });

  test('enqueue should add the animal to the appropriate queue', () => {
    const dog = new Animal('dog', 'Buddy');
    const cat = new Animal('cat', 'Whiskers');

    shelter.enqueue(dog);
    shelter.enqueue(cat);

    expect(shelter.dogQueue.length).toBe(1);
    expect(shelter.catQueue.length).toBe(1);
    expect(shelter.dogQueue[0]).toEqual(dog);
    expect(shelter.catQueue[0]).toEqual(cat);
  });

  test('dequeue should return the oldest animal of the preferred type', () => {
    const dog1 = new Animal('dog', 'Buddy');
    const dog2 = new Animal('dog', 'Max');
    const cat1 = new Animal('cat', 'Whiskers');
    const cat2 = new Animal('cat', 'Oliver');

    shelter.enqueue(dog1);
    shelter.enqueue(dog2);
    shelter.enqueue(cat1);
    shelter.enqueue(cat2);

    expect(shelter.dequeue('dog')).toEqual(dog1);
    expect(shelter.dequeue('cat')).toEqual(cat1);
  });

  test('dequeue should return null if no animals of the preferred type are available', () => {
    const dog = new Animal('dog', 'Buddy');
    const cat = new Animal('cat', 'Whiskers');

    shelter.enqueue(dog);
    shelter.enqueue(cat);

    expect(shelter.dequeue('bird')).toBeNull();
    expect(shelter.dequeue('cat')).toEqual(cat);
    expect(shelter.dequeue('cat')).toBeNull();
  });
});
