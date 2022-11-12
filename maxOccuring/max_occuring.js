let str = 'hello peter';
let strObj = {};
let maxKey = '';

for (let i = 0; i < str.length; i++) {
  //   console.log(strObj[str[i]]);

  let key = str[i];
  if (!strObj[key]) {
    strObj[key] = 0;
  }
  strObj[key]++;
  if (maxKey == '' || strObj[key] > strObj[maxKey]) {
    maxKey = key;
  }
}
console.log(strObj);
console.log('the max key is ' + maxKey);

//type of array is object;
// let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// let another = data.splice(1, 1, 100);
// console.log('the length is ' + another);
// console.log(typeof data);
