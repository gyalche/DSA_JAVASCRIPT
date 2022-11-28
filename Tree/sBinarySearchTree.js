class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BsTree {
  constructor() {
    this.root = null;
  }

  isTreeEmpty() {
    return this.root === null;
  }

  makeTree(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (root.value > newNode.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
}

let bst = new BsTree();
bst.makeTree(100);
bst.makeTree(10);
bst.makeTree(110);
console.log(bst);
