'use strict';

const { mergeSort } = require('../index');

describe('mergeSort', () => {
  it('should sort an array of numbers in ascending order', () => {
    const array = [5, 3, 8, 4, 2, 1, 6];
    mergeSort(array);
    expect(array).toEqual([1, 2, 3, 4, 5, 6, 8]);
  });

  it('should handle an empty array', () => {
    const array = [];
    mergeSort(array);
    expect(array).toEqual([]);
  });

  it('should handle an array with a single element', () => {
    const array = [7];
    mergeSort(array);
    expect(array).toEqual([7]);
  });

  it('should handle an array with duplicate elements', () => {
    const array = [5, 3, 8, 4, 2, 1, 6, 5, 2, 4];
    mergeSort(array);
    expect(array).toEqual([1, 2, 2, 3, 4, 4, 5, 5, 6, 8]);
  });

  it('should sort an array of strings in alphabetical order', () => {
    const array = ['banana', 'apple', 'cherry', 'date'];
    mergeSort(array);
    expect(array).toEqual(['apple', 'banana', 'cherry', 'date']);
  });

});
