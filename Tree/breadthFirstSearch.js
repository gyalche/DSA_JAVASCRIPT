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
  isRootEmpty() {
    return this.root === null;
  }

  makeTree(value) {
    let newNode = new Node(value);
    if (this.root == null) {
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
    } else if ((root.value = value)) {
      return true;
    } else if (root.value > value) {
      this.search(root.left, value);
    } else if (root.value < value) {
      this.search(root.right, value);
    }
  }
  bfsTraversing() {
    let queue = [];
    queue.push(this.root);

    while (queue.lenght) {
      let current = queue.shift();
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
      console.warn('Breathfirstsearch', current.value);
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
bst.bfsTraversing();
console.log(bst.root);
// console.log('BreathFirstSearch', bst.bfsTraversing());
