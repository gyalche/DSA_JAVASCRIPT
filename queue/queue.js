let queue = [];
let currentSize = queue.length;
let maxSize = 5;
function enqueue(value) {
  if (currentSize < maxSize) {
    queue[currentSize] = value;
    currentSize++;
  } else {
    alert('Queeue is already full');
  }
}

function dequeue() {
  if (currentSize > 0) {
    for (let i = 0; i < queue.length; i++) {
      queue[i] = queue[i + 1];
    }
    currentSize--;
    queue.length = currentSize;
  } else {
    alert('Queue is already empty');
  }
}

function display() {
  console.log(queue);
}

enqueue(10);
enqueue(20);
enqueue(30);
display();
