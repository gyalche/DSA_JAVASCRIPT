const data = [1, 2, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8];

const item = 8;
let index = undefined;
for (let i = 0; i < data.length - 1; i++) {
  //   console.log(data[i]);
  if (data[i] === item) {
    index = i;
    break;
  }
}
console.log(index);
//by default function to find index;
// console.log(data.indexOf(item));
// data.splice(2, 1);
// console.log(data);

// if (data.includes(1)) {
//   console.log(' available');
// } else {
//   console.log('10 doesnt exist');
// }
