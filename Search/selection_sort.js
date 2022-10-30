//selection sort with javascript;
let data = [20, 12, 53, 3, 0, 3, 84, 948];

function selectionSort(data) {
  let minValue;
  for (let i = 0; i < data.length; i++) {
    minValue = i;
    for (let j = i + 1; j < data.length; j++) {
      if (data[minValue] > data[j]) {
        minValue = j;
      }
    }
    let temp = data[minValue];
    data[minValue] = data[i];
    data[i] = temp;
  }
}
selectionSort(data);
console.log(data);

// function selectionSort(data) {
//   let minValue;
//   for (let i = 0; i < data.length; i++) {
//     minValue = i;
//     for (let j = i + 1; j < data.length; j++) {
//       if (data[j] < data[minValue]) {
//         minValue = j;
//       }
//     }
//     let temp = data[minValue];
//     data[minValue] = data[i];
//     data[i] = temp;
//   }
// }
// selectionSort(data);
// console.log(data);
