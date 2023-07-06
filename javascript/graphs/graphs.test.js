'use strict';

const { Graph, Vertex, Edge } = require('.');


describe('Graph tests', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });


  test('should add a new vertex to the graph', () => {
    const vertex = graph.addVertex('A');

    expect(vertex).toBeInstanceOf(Vertex);
    expect(vertex.value).toBe('A');
  });

  test('should add a directed edge between two vertices', () => {
    const vertexA = graph.addVertex('A');
    const vertexB = graph.addVertex('B');

    graph.addDirectedEdge(vertexA, vertexB, 5);

    const neighbors = graph.getNeighbors(vertexA);
    expect(neighbors.length).toBe(1);
    expect(neighbors[0]).toBeInstanceOf(Edge);
    expect(neighbors[0].vertex).toBe(vertexB);
    expect(neighbors[0].weight).toBe(5);
  });

  test('should return an array of neighboring vertices', () => {
    const vertexA = graph.addVertex('A');
    const vertexB = graph.addVertex('B');

    graph.addDirectedEdge(vertexA, vertexB, 5);

    const neighbors = graph.getNeighbors(vertexA);
    expect(neighbors.length).toBe(1);
    expect(neighbors[0]).toBeInstanceOf(Edge);
    expect(neighbors[0].vertex).toBe(vertexB);
    expect(neighbors[0].weight).toBe(5);
  });

  test('should return an array of all vertices in the graph', () => {
    const vertexA = graph.addVertex('A');
    const vertexB = graph.addVertex('B');
    const vertexC = graph.addVertex('C');

    const vertices = graph.getVertices();

    expect(vertices.length).toBe(3);
    expect(vertices).toContain(vertexA);
    expect(vertices).toContain(vertexB);
    expect(vertices).toContain(vertexC);
  });

  test('should return proper size of the graph, representing the number of vertices', () => {
    const vertexA = graph.addVertex('A');
    const vertexB = graph.addVertex('B');
    const vertexC = graph.addVertex('C');

    expect(graph.size()).toBe(3);
  });

  test('should return the correct size of the graph when there are no vertices', () => {
    expect(graph.size()).toBe(0);
  });

  test('Neighbors are returned with the weight between nodes included', () => {
    const vertexA = graph.addVertex('A');
    const vertexB = graph.addVertex('B');

    graph.addDirectedEdge(vertexA, vertexB, 5);

    const neighbors = graph.getNeighbors(vertexA);

    expect(neighbors.length).toBe(1);
    expect(neighbors[0].weight).toBe(5);
  });

  test('Returns correct node values using a breadth first traversal', () => {
    // const vertexA = graph.addVertex('A');
    // const vertexB = graph.addVertex('B');
    // const vertexC = graph.addVertex('C');
    // const vertexD = graph.addVertex('D');
    // const vertexE = graph.addVertex('E');
    // const vertexF = graph.addVertex('F');

    // graph.addDirectedEdge(vertexA, vertexB);
    // graph.addDirectedEdge(vertexA, vertexC);
    // graph.addDirectedEdge(vertexB, vertexD);
    // graph.addDirectedEdge(vertexC, vertexE);
    // graph.addDirectedEdge(vertexC, vertexF);
    // graph.addDirectedEdge(vertexE, vertexF);

    // const breadthFirstResults = graph.breadthFirst(vertexA);

    // expect(breadthFirstResults).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
  });



});
