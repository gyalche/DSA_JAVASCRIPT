let str = 'hello peter';
let strObj = {};
let maxKey = '';

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);

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
