'use strict';

function isCircular(list) {
  if (list.head === null) return true;
  let slow = list.head;
  let fast = list.head.next;
  while (fast !== null && fast.next !== null) {
    if (slow === fast) return true;
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
}

module.exports = isCircular;
