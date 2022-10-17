let queue = [];
let currentSize = queue.length;
let maxSize = 5;

// function enqueue(value) {
//   if (currentSize < maxSize) {
//     queue[currentSize] = value;
//     currentSize++;
//   } else {
//     alert('Queue is already full');
//   }
// }

function enqueueWithBtn() {
  let newValue = document.getElementById('qEl').value;
  if (currentSize < maxSize) {
    queue[currentSize] = newValue;
    currentSize++;
    document.getElementById('qEl').value = '';
  } else {
    alert('Queue is already full');
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

//how will you take the front;
function front() {
  if (currentSize > 0) {
    console.log(queue[0]);
  } else {
    alert('Queue is already empty');
  }
}
function rear() {
  if (currentSize > 0) {
    console.log(queue[currentSize - 1]);
  } else {
    alert('Queue is empty');
  }
}

// enqueue(10);
// enqueue(20);
// enqueue(30);

display();
