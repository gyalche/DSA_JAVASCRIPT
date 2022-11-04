//Find even values  from array,Make double of every element and find array length manually;

let data = [10, 19, 6, 18, 45, 68, 90, 35, 100];
let evenArr = [];
let counter = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i] % 2 == 0) {
    evenArr.push(data[i]);
  }
}
for (let i = 0; i < evenArr.length; i++) {
  evenArr[i] = evenArr[i] * 2;
  counter++;
}
console.log(evenArr);
console.log('the length is ' + counter);
