//head and tail recursion;
// function colors() {
//   let data = 20;
//   console.log(data);
// }
// function days() {
//   colors();
// }
// function fruits() {
//   days();
// }
// function topfunction() {
//   fruits();
// }

function test(x) {
  console.log(x); //this is head recursion
  if (x > 0) {
    text(x - 1);
  }
  //   console.log(x); // this is tail recursion
}
console.log(text(5));

topfunction();
