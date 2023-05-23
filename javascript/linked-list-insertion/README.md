# Challenge Title

Extend a linked list to allow various insertion methods.
Method 1: append - adds a new node with the given value to the end of the list.
Method 2: insert - adds a new node with the given newValue immediately before the first node that has the value specified.
Method 3: insert after - add a new node with the given newValue immediately after the first node that has the value specified.

## Whiteboard Process

![Linked list insert](../../assets/linked-insert-whiteboard.png)

## Approach & Efficiency

 We utilized the code challenge from friday on how to approach the append method, the insert after method and insert before we took the approach of created a new node with the new value we wanted to insert either before or after the given found value.  We then utilized while loops to iterate through the linked list searching if the current.value or the current.next.value was found and then assigning either the current node the value or the next node the new value depending on if we were inserting before or after.
Big O space: O(n)
Big O time: O(1)

## Solution

npm test linked-list-insertion

<!-- Show how to run your code, and examples of it in action -->

