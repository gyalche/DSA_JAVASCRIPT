let data = new Map([
  ['name', 'dawa'],
  [true, 'boolean'],
]);

data.set('color', 'green');
// console.log(data.get('name'));
// console.log(data);
// data.clear();
// for (let x of data) {
//   console.log(x[1]);
// }

data.forEach((val, key) => {
  console.log(val);
});
console.log(data);
