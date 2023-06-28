const treeIntersection = require('./tree-intersection.js');
const Tree = require('../trees/index.js');
const HashTable = require('../hash-tables/index.js');

describe('Tree Intersection', () => {
  test('Identify common values in tree intersections', () => {
    const treeOne = new Tree([1, 2, 3, 4, 5]);
    const treeTwo = new Tree([4, 5, 6, 7, 8]);

    const result = treeIntersection(treeOne, treeTwo);

    expect(result).toEqual([4, 5]);
  });
});
