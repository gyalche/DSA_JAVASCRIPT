let data = [];
let currentSize = data.length;
let max = 6;

function push() {
  let newValue = document.getElementById('newEl').value;
  if (currentSize > max) {
    alert('The size has already excedded ' + newValue);
  } else {
    data[currentSize] = newValue;
    currentSize++;
    document.getElementById('newEl').value = '';
    console.log('Element added');
  }
}

function pop() {
  if (currentSize > 0) {
    currentSize--;
    data.length = currentSize;
    console.log(`${currentSize} elemnt removed`);
  } else {
    alert('Data is already empty');
  }
}

function display() {
  for (let i = 0; i <= currentSize - 1; i++) {
    console.log(i, 'and value is ' + ' ' + data[i]);
  }
}
