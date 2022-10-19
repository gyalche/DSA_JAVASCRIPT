// class Queue {
//   constructor(size) {
//     this.max = size;
//     this.item = new Array(size);
//     this.currentSize = 0;
//     this.rear = -1;
//     this.front = -1;
//   }
//   enque(value) {
//     if (this.currentSize !== this.max) {
//       if (this.rear == this.max - 1) {
//         this.rear = 0;
//       } else {
//         this.rear++;
//       }
//       this.item[this.rear] = value;
//       this.currentSize++;

//       if (this.front == -1) {
//         this.front = this.rear;
//       }
//     }
//   }

//   dequeue() {
//     if (this.currentSize !== 0) {
//       this.item[this.front] = null;
//       if (this.front == this.max - 1) {
//         this.font = 0;
//       } else {
//         this.front++;
//       }
//       this.currentSize--;
//     } else {
//       this.front = -1;
//       this.rear = -1;
//       alert('Data is empty');
//     }
//   }
// }

// let queue = new Queue(5);

class Queue {
  constructor(size) {
    this.maxSize = size;
    this.currentSize = 0;
    this.items = new Array(size);
    this.rear = -1;
    this.front = -1;
  }
  enqueue(value) {
    if (this.currentSize !== this.maxSize) {
      if (this.rear === this.maxSize - 1) {
        this.rear = 0;
      } else {
        this.rear++;
      }

      this.items[this.rear] = value;
      this.currentSize++;
      if (this.front == -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.currentSize !== 0) {
      this.items[this.front] = null;
      if (this.front == this.maxSize - 1) {
        this.front = 0;
      } else {
        this.front++;
      }
      this.currentSize--;
    } else {
      this.front = -1;
      this.rear = -1;
      alert('Circular queue is already empty');
    }
  }
}

let queue = new Queue(5);
