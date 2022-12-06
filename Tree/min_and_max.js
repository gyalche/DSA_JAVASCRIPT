class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BsTree {
  constructor() {
    this.root = null;
  }

  checkIsEmpty() {
    if (this.root === null) {
      return this.root === null;
    }
  }

  makeTree(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root == newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {  
    if (root.value > newNode.value) {
      if (root.left === null) {
        root.left === newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.value < newNode.value) {
        if (root.right === null) {
          root.right = newNode;
        } else {
          this.insertNode(root.right, newNode);
        }
      }
    }
  }

  search(root, value) {
    if (root === null) {
      return false;
    } else if (root.value === value) {
      return true;
    } else if (root.value > value) {
      this.search(root.left, value);
    } else if (root.value < value) {
      this.search(root.right, value);
    }
  }

  minValue(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.minValue(root.left);
    }
  }
  maxValue(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.maxValue(root.right);
    }
  }
}

let bst = new BsTree();
bst.makeTree(20);
bst.makeTree(10);
bst.makeTree(5);
bst.makeTree(11);
bst.makeTree(30);
bst.makeTree(40);
bst.makeTree(23);

console.log(bst.minValue(bst.root));
