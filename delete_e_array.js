const data = [20, 30, 40, 45, 60, 80];

let position = 3;
for (let i = position; i < data.length - 1; i++) {
  console.log(data[i]);
  data[i] = data[i + 1];
}
data.length = data.length - 1;
console.log(data);
