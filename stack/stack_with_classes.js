// class Stack {
//   item = [];
//   currentSize;
//   maxSize;
//   constructor(size) {
//     this.maxSize = size;
//     this.currentSize = this.item.length;
//   }

//   push(newValue) {
//     if (this.currentSize >= this.maxSize) {
//       alert('stack is full');
//     } else {
//       this.item[this.currentSize] = newValue;
//       this.currentSize++;
//     }
//   }
//   pop() {
//     if (this.currentSize > 0) {
//       this.currentSize--;
//       this.item.length = this.currentSize;
//     } else {
//       alert('Stack is already empty');
//     }
//   }
//   display() {
//     console.log(this.item);
//   }
// }

// st1 = new Stack(5);
// st1.push(20);
// st1.display();

class Stack {
  item = [];
  currentSize;
  maxSize;
  constructor(size) {
    this.maxSize = size;
    this.currentSize = this.item.length;
  }
  push(value) {
    if (this.currentSize < this.maxSize) {
      this.item[this.currentSize] = value;
      this.currentSize++;
    } else {
      alert('stack exceed');
    }
  }
  pop() {
    if (this.currentSize < 0) {
      alert('Stack is already empty');
    } else {
      this.currentSize--;
      this.item.length = this.currentSize;
    }
  }
  display() {
    console.log(this.item);
  }
}
const st = new Stack(5);
