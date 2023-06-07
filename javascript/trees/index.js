'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// not required for Code challenge 15
// class KaryNode {
//   constructor(value, k) {
//     this.value = value;
//     this.children = new Array(k).fill(null);
//   }
// }

// // not required for Code challenge 15
// class KaryTree {
//   constructor() {
//     this.root = null;
//   }
// }

class Tree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    const results = [];

    // defining helper our function
    const traverse = (node) => {
      // base case (do the thing)
      results.push(node.value);

      // left and right recursive cases
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      //IF there is no left and no right WE ARE DONE WITH THIS FUNCTION
    };
    // START THE RECURSIVE STUFF HERE
    traverse(this.root);
    return results;
  }

  inOrder() {
    const results = [];

    const traverse = (node) => {

      if (node.left) {
        traverse(node.left);
      }
      results.push(node.value); // performing our base case here makes this inOrder
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return results;
  }

  postOrder() {
    const results = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      results.push(node.value); // performing our base case here makes this postOrder
    };
    traverse(this.root);
    return results;
  }


  //!! CODE CHALLENGE 16: Find max value
  maxValue() {
    const results = [];
    if (this.root === null) {
      return -1;
    }
    const traverse = (node) => {

      if (node.left) {
        traverse(node.left);
      }
      results.push(node.value); // performing our base case here makes this inOrder
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    let maxValue = results.pop();
    return maxValue;
  }

}

class BinarySearchTree extends Tree {
  constructor() {
    super();
  }

  add(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    const insert = (node) => {
      if (value < node.value) {
        if (node.left === null) {
          node.left = newNode;
          return this;
        } else if (node.left !== null) {
          return insert(node.left);
        }
      } else if (value > node.value) {
        if (node.right === null) {
          node.right = newNode;
          return this;
        } else if (node.right !== null) {
          return insert(node.right);
        }
      } else {
        return null;
      }
    };
    insert(this.root);
  }

  containsValue(value) {
    if (this.root === null) {
      return false;
    }

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else { // value === current.value
        found = true;
      }
    }
    if (!found) {
      return false;
    }
    return true;
  }

}

//!! CODE CHALLENGE 17: Breadth First
class TreeTraversal {
  breadthFirst(tree) {
    if (!tree) {
      return [];
    }

    const result = [];
    const queue = [tree];

    while (queue.length > 0) {
      const node = queue.shift();
      result.push(node.value);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return result;
  }
}


module.exports = {
  Node,
  Tree,
  BinarySearchTree,
  TreeTraversal,
  // KaryNode,
  // KaryTree,
};

// let tree = new Tree();
// tree.root = new Node(10);
// tree.root.left = new Node(5);
// tree.root.right = new Node(15);
// tree.root.left.left = new Node(1);
// tree.root.left.right = new Node(8);
// tree.root.right.right = new Node(17);
// console.log('-------preOrder-------');
// let results = tree.preOrder();
// console.log('preOrder results:', results);
// console.log('-------inOrder-------');
// results = tree.inOrder();
// console.log('inOrder results:', results);
// console.log('-------postOrder-------');
// results = tree.postOrder();
// console.log('postOrder results:', results);

