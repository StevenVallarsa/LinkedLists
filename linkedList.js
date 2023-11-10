class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNodeToTail(value) {
    const node = new Node(value);
    let tail = this.findTail();
    if (!tail) this.head = node;
    else tail.next = node;
  }

  addNodeToHead(value) {
    const node = new Node(value);
    if (!this.head) this.head = node;
    else {
      const prevHead = this.head;
      this.head = node;
      node.next = prevHead;
    }
  }

  findItem(value) {
    let currentNode = this.head;
    let isItemFound = false;
    while (currentNode) {
      if (currentNode.value === value) {
        isItemFound = true;
        currentNode = null;
      } else {
        currentNode = currentNode.next;
      }
    }
    console.log(`${value} was ${isItemFound ? "" : "not "}found in this list.`);
  }

  findTail() {
    let next = this.head;
    if (!next) return null;
    let prev;
    while (next) {
      prev = next;
      next = next.next;
    }
    return prev;
  }

  printLinkedList() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.addNodeToTail(1);
ll.addNodeToTail(2);
ll.addNodeToTail(3);
ll.addNodeToHead(4);
ll.printLinkedList();
ll.findItem(5);
ll.findItem(4);
