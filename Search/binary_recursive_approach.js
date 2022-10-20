let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let start = 0;
let end = data.length - 1;
let find = 4;
let position = undefined;

function recursiveSearch(data, start, end) {
  let mid = Math.floor((start + end) / 2);
  if (data[mid] === find) {
    position = mid;
    return;
  } else if (data[mid] < find) {
    recursiveSearch(data, mid + 1, end);
  } else {
    recursiveSearch(data, start, mid - 1);
  }
}
recursiveSearch(data, start, end);
console.log(position);
