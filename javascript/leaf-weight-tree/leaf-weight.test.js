'use strict';

const leafWeight = require('.');
const { Node, Tree } = require('../trees/index');

describe('Leaf Weight', () => {
  test('Can detect that a binary tree has a leaf with a weight equal to the given number', () => {
    const binaryTree = new Tree();
    binaryTree.root = new Node(5);
    binaryTree.root.left = new Node(4);
    binaryTree.root.right = new Node(8);
    binaryTree.root.left.left = new Node(11);
    binaryTree.root.left.left.left = new Node(7);
    binaryTree.root.left.left.right = new Node(2);
    binaryTree.root.right.left = new Node(13);

    expect(leafWeight(binaryTree, 32)).toBeFalsy();
    // expect(leafWeight(binaryTree, 20)).toBeTruthy();
  });

});
