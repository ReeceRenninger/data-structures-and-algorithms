'use strict';

function leftJoin(hashMapLeft, hashMapRight) {
  let output = [];
  let leftKeys = hashMapLeft.keys();
  let rightKeys = hashMapRight.keys();
  if (leftKeys.length < 0) {
    return output;
  }
  leftKeys.map((keyValue) => {
    let forArray = [];
    forArray.push(keyValue);
    forArray.push(hashMapLeft(keyValue));
    rightKeys.includes(keyValue) ?
      forArray.push(hashMapRight(keyValue)) :
      null;
    output.push(forArray);
  });
  return output;
}

module.exports = leftJoin;
