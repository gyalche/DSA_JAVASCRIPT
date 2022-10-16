let data = [];
let currentSize = data.length;
function push(value) {
  data[currentSize] = value;
  currentSize++;
}

function pop() {
  if (currentSize > 0) {
    lastRemovedItem = data[currentSize - 1];
    currentSize--;
    data.length = currentSize;
    return lastRemovedItem;
  }
}
reverseStr = (item) => {
  console.log(item);
  for (let i = 0; i < item.length; i++) {
    push(item[i]);
  }

  for (let i = 0; i < item.length; i++) {
    item[i] = pop();
  }
};
let str = 'dawa';
str = str.split('');
reverseStr(str);
console.log(str.join(''));
