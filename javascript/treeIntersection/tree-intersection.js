'use strict';

const HashTable = require('../hash-tables/index.js');

function treeIntersection(treeOne, treeTwo){
  const firstHashMap = new HashTable();
  const secondHashMap = new HashTable();
  let results = [];

  function treeTraversal(tree, hashMap) {
    let current = tree.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      hashMap.set(node.value, true);
      if (node.right) traverse(node.right);
    }
    traverse(current);
  }
  treeTraversal(treeOne, firstHashMap);
  treeTraversal(treeTwo, secondHashMap);

  let firstHashKeys = firstHashMap.keys();

  for (let i = 0; i < firstHashKeys.length; i++) {
    if (secondHashMap.has(firstHashKeys[i])) {
      results.push(firstHashKeys[i]);
    }
  }
  return results;
}

module.exports = treeIntersection;
