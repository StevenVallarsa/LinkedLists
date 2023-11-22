class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNodeToTail(data) {
    const node = new Node(data);
    let tail = this.findTail();
    if (!tail) this.head = node;
    else tail.next = node;
    console.log(`Node with a value of '${data}' has been added to the tail`);
  }

  addNodeToHead(data) {
    const node = new Node(data);
    if (!this.head) this.head = node;
    else {
      const prevHead = this.head;
      this.head = node;
      node.next = prevHead;
    }
    console.log(`Node with a value of '${data}' has been added to the head`);
  }

  removeFromHead() {
    const oldHead = this.head;
    this.head = this.head.next;
    return oldHead;
  }

  removeTail() {
    if (this.count() === 0) return null;
    if (this.count() === 1) {
      const removedNode = this.head;
      this.head = null;
      return removedNode;
    }
    let currentNode = this.head;
    let previousNode;
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      console.log(`PREV: ${JSON.stringify(previousNode)} - CURRENT: ${JSON.stringify(currentNode)}`);
    }
    previousNode.next = null;
    return currentNode;
  }

  count() {
    let counter = 0;
    let currentNode = this.head;
    while (currentNode) {
      currentNode = currentNode.next;
      counter++;
    }
    return counter;
  }

  findNode(value) {
    let currentNode = this.head;
    let isItemFound = false;
    while (currentNode) {
      if (currentNode.data === value) {
        isItemFound = true;
        currentNode = null;
      } else {
        currentNode = currentNode.next;
      }
    }
    console.log(`${value} was ${isItemFound ? "" : "not "}found in this list.`);
    // return currentNode
  }

  findTail() {
    let current = this.head;
    if (!current) return null;
    let prev;
    while (current) {
      prev = current;
      current = current.next;
    }
    return prev;
  }

  printLinkedList() {
    let current = this.head;
    while (current) {
      current = current.next;
    }
  }
}

// const ll = new LinkedList();
// ll.addNodeToTail(1);
// ll.addNodeToTail(2);
// ll.addNodeToTail(3);
// ll.addNodeToHead(4);
// ll.printLinkedList();
// ll.removeTail();
// ll.printLinkedList();

function fiboMemo(n, memo = { 1: 1, 2: 1 }) {
  if (n in memo) return memo[n];

  const result = fiboMemo(n - 1, memo) + fiboMemo(n - 2, memo);
  memo[n] = result;
  return result;
}

function fiboIteration(n) {
  if (n <= 2) return 1;

  let last1 = 1;
  let last2 = 1;

  for (let i = 2; i < n; i++) {
    const temp = last1;
    last1 = last2 + temp;
    last2 = temp;
  }

  return last1;
}
