// const data = [10, 20, 30, 40, 50];

// const pos = document.getElementById('pos').value;
// const ele = document.getElementById('ele').value;

// let newEl = 70;
// let position = 2;

// for (let i = data.length - 1; i >= 0; i--) {
//   console.log(data[i]);
//   if (i >= pos && typeof pos === 'number') {
//     data[i + 1] = data[i];
//     if (i == pos) {
//       data[i + 1] = ele;
//     }
//   }
// }

function insertEl() {
  const data = [1, 2, 3, 4, 5, 6];

  let newEl = document.getElementyById('#ele').value;
  let positon = document.getElementById('#pos').value;
  console.log(data);
  for (let i = data.length - 1; i >= 0; i--) {
    // console.log(data[i]);

    if (i >= positon) {
      data[i + 1] = data[i];
      if (i == positon) {
        data[i] = newEl;
      }
    }
  }
  console.warn(data);
}

let itme = [1, 2, 3, 4, 5];
const ans = itme.splice(2, 0, 100);
console.log(itme);
