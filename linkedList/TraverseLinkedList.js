class List {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.size = 1;
  }
  appendNode(nodeData) {
    let newNode = {
      value: nodeData,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  //traversing linked list;
  traversing() {
    let counter = 0;
    let currentNode = this.head;
    while (counter < this.size) {
      currentNode = currentNode.next;
      counter++;
      console.log(currentNode);
    }
  }
}

const list = new List(10);
list.appendNode(100);
list.appendNode(200);
list.appendNode(300);
list.traversing();
console.log(list);
