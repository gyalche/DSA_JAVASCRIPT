//RECURSION;

// function apple(x) {
//   console.log(x);
//   if (x < 10) {
//     apple(x + 1);
//   }
// }
// let x = 0;
// apple(x);

//finding a factorial;

//with recursion;
function factorial(x) {
  if (x == 0) {
    return 1;
  }
  return x * factorial(x - 1);
}
console.log(factorial(5));
