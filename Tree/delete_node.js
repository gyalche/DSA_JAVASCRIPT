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

  insertNode(node) {
    let newNode = new Node(node);
    if (this.root === null) {
      this.root === newNode;
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
      if (root.right === null) {
        root.right === newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  search(node, value) {
    if (node === null) return false;
    else if (node === value) return true;
    else if (node > value) {
      this.search(node.left, value);
    } else if (node < value) {
      this.search(node.right, value);
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

  removeData(value) {
    this.root = this.deleteNode(this.root, value);
  }
  deleteNode(root, value) {
    if (root === null) {
      return null;
    } else if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      //now we  have reach the number;
      //check whether it has right or left
      if (!root.left && !root.right) {
        return null;
      }
      //if it has right node and not a left node
      else if (!root.left) {
        //if it has right node put that node in the deleted node;
        return root.right;
      }
      //now if it doesnt have right node;
      else if (!root.right) {
        return root.left;
      }
      //if both node are presnt;
      root.value = this.minValue(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
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

bst.removeData(5);
