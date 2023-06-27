'use strict';

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = Array(size);
  }

  hash(key) {
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);
    // console.log('asciiSum: ', asciiSum);
    //multiply by a prime number to reduce collisions
    //return remainder of division to fit within buckets
    let hashKey = (asciiSum * 599) % this.size;
    // console.log('hashKey: ', hashKey);
    return hashKey;

  }

  set(key, value) {
    let position = this.hash(key);
    // remember square brackets are used to access a key in an object
    let data = { [key]: value };

    // !! initial approach before refactoring
    // linked list approach(so you can see it)
    // if (this.buckets[position]) {
    //   let bucket = this.buckets[position];
    //   bucket.add(data);

    // } else {
    //   let bucket = new LinkedList();
    //   bucket.add(data);
    //   this.buckets[position] = bucket;
    // }

    //!! our lab approach. if the data exists replace it, if doesn't exist, just assign it!
    this.buckets[position] = data;
  }

  get(key) {
    let position = this.hash(key);
    if (this.buckets[position]) {
      return this.buckets[position][key];
    } else {
      return null;
    }
  }


  has(key){
    let position = this.hash(key);
    let result = this.buckets[position] ? true : false;
    return result;
  }

  keys(){
    let results = this.buckets.reduce((keysArr, bucket) => {
      if(bucket){
        keysArr.push(Object.keys(bucket)[0]);
        return keysArr;
      } else {
        return keysArr;
      }
    }, []);
    return results;
  }
}


// const table = new HashTable(1024);

// console.log('table: ', table);
// let hashOne = table.hash('Reece');
// let hashTwo = table.hash('Ike');
// console.log('hashOne: ', hashOne);
// console.log('hashTwo: ', hashTwo);

// table.set('Reece', 'this is my value');
// table.set('Ike', 'this is his value');
// console.log('updated table: ', table);

// console.log('get is working for Reece:', table.get('Reece'));
// console.log('get is working for Ike: ', table.get('Ike'));

// console.log('has is working for Reece: ', table.has('Reece'));
// console.log('has is working for Ike: ', table.has('Ike'));


// let keys = table.keys();
// console.log('keys: ', keys);


module.exports = HashTable;
