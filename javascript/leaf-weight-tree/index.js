'use strict';

const {
  Node,
  Tree,
} = require('../trees/index');

const binaryTree = new Tree();
binaryTree.root = new Node(5);
binaryTree.root.left = new Node(4);
binaryTree.root.right = new Node(8);
binaryTree.root.left.left = new Node(11);
binaryTree.root.left.left.left = new Node(7);
binaryTree.root.left.left.right = new Node(2);
binaryTree.root.right.left = new Node(13);

const leafWeight = (tree, num) => {
  let temp = 0;
  const traverse = (node) => {
    temp = temp + node.value;
    if(node.left) traverse(node.left);
    if(node.right) traverse(node.right);
    if(!node.right && !node.left){
      if(temp === num) return true;
    }
    temp = temp - node.value;
  };
  traverse(tree.root);
};

module.exports = leafWeight;
