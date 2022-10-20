// //BINARY SEARCH;
// //itterative approach;
// let data = [5, 9, 13, 17];
// let find = 17;
// let start = 0;
// let end = data.length - 1;
// let position = undefined;

// while (start <= end) {
//   //finding mid;
//   let mid = Math.floor((start + end) / 2);
//   //   console.log(mid);
//   //if finding is equal to mid;
//   if (data[mid] === find) {
//     position = mid;
//     break;
//   }
//   //if finding is greater than mid;
//   else if (data[mid] < find) {
//     start = mid + 1;
//   }
//   //when finding is less than mid;
//   else {
//     start = mid - 1;
//   }
// }
// console.log(position);

let data = [2, 3, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
let find = 5;
let position = undefined;
let start = 0;
let end = data.length - 1;
while (start <= end) {
  //findng middle position;
  let mid = Math.floor((start + end) / 2);

  //if finding is equal to mid;
  if (data[mid] === find) {
    position = mid;
    break;
  }
  //if finding is greater than mid;
  else if (data[mid] < find) {
    start = mid + 1;
  }
  //when finding is less than mid;
  else {
    end = mid - 1;
  }
}

console.log(position);
console.log(data[position]);
