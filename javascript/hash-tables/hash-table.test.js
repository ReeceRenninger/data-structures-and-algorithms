'use strict';

const HashTable = require('.');

describe('Hash Table', () => {
  test('should create a hash table of a given size', () => {
    const table = new HashTable(1024);
    expect(table.size).toEqual(1024);
  });

  test('should hash a key to an in-range value', () => {
    const table = new HashTable(1024);
    const hash = table.hash('test key');
    expect(hash).toBeLessThanOrEqual(1024);
    expect(hash).toBeGreaterThanOrEqual(0);
  });

  test('should set a key/value pair in the hash table', () => {
    const table = new HashTable(1024);
    table.set('test key', 'test value');
    const hash = table.hash('test key');
    expect(table.buckets[hash]).toBeDefined();
  });

  test('should retrieve a value from the hash table by key', () => {
    const table = new HashTable(1024);
    table.set('test key', 'test value');
    const value = table.get('test key');
    expect(value).toEqual('test value');
  });

  test('should return null for a key that does not exist in the hash table', () => {
    const table = new HashTable(1024);
    const value = table.get('test key');
    expect(value).toBeNull();
  });

  test('should successfully handle a collision within the hash table', () => {
    const table = new HashTable(1024);
    table.set('test key', 'test value');
    table.set('test yek', 'test value');
    table.set('tset key', 'test value');
    const hash = table.hash('test key');
  
    expect(table.buckets[hash]).toBeDefined();
  });

  test('should successfully retrieve a value from a bucket within the hash table that has a collision', () => {
    const table = new HashTable(1024);
    table.set('test key', 'test value');
    table.set('test key', 'test value');
    const value = table.get('test key');
    expect(value).toEqual('test value');
  });

  test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    const table = new HashTable(1024);
    table.set('test key', 'test value');
    table.set('test key two', 'test value two');
    table.set('test key three', 'test value three');
    const keys = table.keys();
    expect(keys).toEqual(['test key', 'test key two', 'test key three']);

  });

});
