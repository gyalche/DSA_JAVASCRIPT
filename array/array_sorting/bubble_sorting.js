//1=>bobble sorting
const data = [40, 30, 12, 25];

for (i = 0; i < data.length; i++) {
  for (j = 0; j < data.length; j++) {
    if (data[j] < data[j + 1]) {
      let temp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = temp;
    }
  }
}
// for (i = 0; i < data.length; i++) {
//   //   console.log(i);
//   for (j = 0; j < data.length; j++) {
//     // console.log(data[j]);
//     if (data[j] > data[j + 1]) {
//       let temp = data[j];
//       data[j] = data[j + 1];
//       data[j + 1] = temp;
//       console.log(data);
//     }
//   }
// }

console.log(data);
