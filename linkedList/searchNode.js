class List {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
  }

  appendNode(nodeData) {
    let data = {
      value: nodeData,
      next: null,
    };
    this.tail.next = data;
    this.tail = data;
  }

  deleteNode(index) {
    counter = 1;
    let lead = this.head;
    if (index == 1) {
      this.head = this.head.next;
    } else {
      while (counter < index) {
        lead = lead.next;
        counter++;
      }
      let nextNode = lead.next.next;
      lead.next = nextNode;
    }
  }

  insertNode(index, value) {
    let counter = 1;
    let currentNode = this.head;
    while (counter < index) {
      counter++;
      currentNode = currentNode.next;
    }
    let nextNode = currentNode.next;
    currentNode.next = {
      value: value,
      next: nextNode,
    };
  }

  searchNode(data) {
    let result = undefined;
    let lead = this.head;
    let loop = true;
    while (loop) {
      lead = lead.next;
      loop = !!lead;
      if (loop && lead.value === data) {
        loop = false;
        result = lead;
      }
    }
  }
}

let list = new List(100);
list.appendNode(200);
list.appendNode(300);
list.appendNode(400);
list.appendNode(500);
list.appendNode(600);
list.searchNode(200);

console.log(list);
