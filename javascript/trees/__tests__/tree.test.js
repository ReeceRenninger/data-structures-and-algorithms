`use strict`;

const { BinarySearchTree } = require(`../index.js`);

// Code Challenge 15: Trees Tests
describe (`Binary Tree`, () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  // Can successfully instantiate an empty tree
  it(`Can successfully instantiate an empty tree`, () => {
    expect(bst.root).toBeNull();
  });

  // Can successfully instantiate a tree with a single root node
  it(`Can successfully instantiate a tree with a single root node`, () => {
    bst.add(1);
    expect(bst.root.value).toEqual(1);
  });

  // For a Binary Search Tree, can successfully add a left child and right child properly to a noe
  it(`For a Binary Search Tree, can successfully add a left child and right child properly to a node`, () => {
    bst.add(1);
    bst.add(2);
    bst.add(3);
    expect(bst.root.value).toEqual(1);
    expect(bst.root.right.value).toEqual(2);
    expect(bst.root.right.right.value).toEqual(3);
  });

  // Can successfully return a collection from a pre-order traversal
  it(`Can successfully return a collection from a pre-order traversal`, () => {
    bst.add(1);
    bst.add(2);
    bst.add(3);
    expect(bst.preOrder()).toEqual([1, 2, 3]);
  });

  // Can successfully return a collection from an in-order traversal
  it(`Can successfully return a collection from an in-order traversal`, () => {
    bst.add(1);

    expect(bst.inOrder()).toEqual([1]);
  });

  // Can successfully return a collection from a post-order traversal
  it(`Can successfully return a collection from a post-order traversal`, () => {
    bst.add(1);

    expect(bst.postOrder()).toEqual([1]);
  });

  // Returns False for the contains method, given an existing or non-existing node value
  it(`Returns False for the contains method, given an existing or non-existing node value`, () => {
    bst.add(1);
    bst.add(2);
    bst.add(3);
    expect(bst.containsValue(4)).toBeFalsy();
  });

  // Returns True for the contains method, given an existing node value
  it(`Returns True for the contains method, given an existing node value`, () => {
    bst.add(1);
    bst.add(2);
    bst.add(3);
    expect(bst.containsValue(3)).toBeTruthy();
  });

});
