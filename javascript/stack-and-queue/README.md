# Challenge Title

Implement stack and queues that will pass all the provided tests:

    Can successfully push onto a stack
    Can successfully push multiple values onto a stack
    Can successfully pop off the stack
    Can successfully empty a stack after multiple pops
    Can successfully peek the next item on the stack
    Can successfully instantiate an empty stack
    Calling pop or peek on empty stack raises exception
    Can successfully enqueue into a queue
    Can successfully enqueue multiple values into a queue
    Can successfully dequeue out of a queue the expected value
    Can successfully peek into a queue, seeing the expected value
    Can successfully empty a queue after multiple dequeues
    Can successfully instantiate an empty queue
    Calling dequeue or peek on empty queue raises exception

## Whiteboard Process

Whiteboard was taken from lecture this challenge

![Alt text](../../assets/Stack&Que-IntroWhiteBoard.png)

## Approach & Efficiency

After following along with Ryan throughout the lecture I was able to figure out the stack tests which resulted in me being able to build out the queue tests up until the calling dequeue or peek on empty queue tests.  I was unable to get that test to pass so I utilized ChatGPT to help me fix that portion of the test.

Stacks Big O time and space:
push(): O(1) & O(1).
pop(): O(1) & O(1).
peek(): O(1) & O(1).
isEmpty(): O(1) & O(1).

Queue Big O time and space:
enqueue(): O(1) & O(1).
dequeue(): O(1) & O(1).
peek(): O(1) & O(1).
isEmpty(): O(1) & O(1).

## Solution

npm test to run all suites or npm test (fileName)
![Alt text](../../assets/Screenshot%202023-05-26%20153405.png)
