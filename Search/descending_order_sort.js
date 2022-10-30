//descending order sort;
let data = [20, 12, 53, 3, 0, 3, 84, 948];

function selectionSortDesc(data) {
  let midValue;
  for (let i = data.length - 1; i >= 0; i--) {
    console.log(i);
    midValue = i;
    for (let j = i - 1; j >= 0; j--) {
      if (data[j] < data[midValue]) {
        midValue = j;
      }
    }
    let temp = data[midValue];
    data[midValue] = data[i];
    data[i] = temp;
  }
}
selectionSortDesc(data);
