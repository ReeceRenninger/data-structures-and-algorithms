'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []); //vertex is the point on the graph, and the array is the edges (connections)
    return vertex;
  }

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    //find the vertex we want to connect and grab the edge array
    const neighbors = this.adjacencyList.get(startVertex);
    //push in the new edge
    neighbors.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {
    return [...this.adjacencyList.get(vertex)]; //list of all the edges associated with this vertex
  }

  getVertices() {
    let iterator = [...this.adjacencyList.keys()];
    // console.log('first vertex', iterator[0]);
    // console.log('first vertex VALUE', iterator[0].value);
    return iterator;
  }

  size(){
    return this.adjacencyList.size;
  }

  breadthFirst(root, callback) {
    const queue = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;

    while(queue.length){
      current = queue.pop();

      //if callback exists, we use it to do the thing
      if(callback){
        callback(current.value);
      }

      //grab neighbor(s) if they exist
      const neighbors = this.getNeighbors(current);
      for(let edge of neighbors){
        //if node has not been visited yet, add it to the visited set and the queue
        if(!visited.has(edge.vertex)){
          visited.add(edge.vertex);
          queue.unshift(edge.vertex);
        }
      }
    }
    return visited; //return the set of visited nodes
  }

  depthFirst(root, callback) {
    const stack = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;

    while(stack.length){
      current = stack.pop();

      //if callback exists, we use it to do the thing
      if(callback){
        callback(current.value);
      }

      //grab neighbor(s) if they exist
      const neighbors = this.getNeighbors(current);
      for(let edge of neighbors){
        //if node has not been visited yet, add it to the visited set and the stack
        if(!visited.has(edge.vertex)){
          visited.add(edge.vertex);
          stack.push(edge.vertex);
        }
      }
    }
    return visited; //return the set of visited nodes
  }

}

const graph = new Graph();

const A = graph.addVertex('A');
const B = graph.addVertex('B');
const C = graph.addVertex('C');
const D = graph.addVertex('D');
const E = graph.addVertex('E');
const F = graph.addVertex('F');
const G = graph.addVertex('G');
const H = graph.addVertex('H');

graph.addDirectedEdge(A, B);
graph.addDirectedEdge(A, D);
graph.addDirectedEdge(A, C);
graph.addDirectedEdge(B, G);
graph.addDirectedEdge(D, F);
graph.addDirectedEdge(D, H);
graph.addDirectedEdge(F, H);
graph.addDirectedEdge(C, H);
graph.addDirectedEdge(F, E);

// console.log('Get size of graph', graph.size());
// console.log('Get vertices/keys of graph', graph.getVertices());
// console.log('Get neighbors of A', graph.getNeighbors(A));
// console.log('----------- Breadth First traversal: ');
// graph.breadthFirst(A, console.log); //callback is console.log to log every visited node
// console.log('----------- Depth First traversal: ');
// graph.depthFirst(A, console.log);


module.exports = { Graph, Vertex, Edge };
