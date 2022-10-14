// TO FIND MAX AND MIN IN AN ARRAY;
// const array = [34, 54, 65, 6, 7, 7, 8];
// console.log(Math.max(...array));
// console.log(Math.min(...array));

// let data = [];
// let currentSize = data.length;
// let max = 5;

// function push(value) {
//   if (currentSize >= max) {
//     alert('Stack is full and you cannot add' + value);
//   }
//   data[currentSize] = value;
//   currentSize++;
// }

// function pop() {
//   if (currentSize > 0) {
//     currentSize -= 1;
//     data.length = currentSize;
//   } else {
//     alert('Stack is already empty');
//   }
// }

// push(20);
// push(10);
// push(20);
// push(10);
// pop();
// pop();
// pop();
// push(99);

// console.log(data);

//customer stack push and pop();

let data = [];
let currentSize = data.length;

let max = 5;
function push(value) {
  if (currentSize > max) {
    alert('Stack is full you cannot add value ' + value);
  } else {
    data[currentSize] = value;
    currentSize++;
  }
}

function pop() {
  currentSize--;
  data.length = currentSize;
}
push(10);
push(10);
push(10);

pop();
console.log(data);
