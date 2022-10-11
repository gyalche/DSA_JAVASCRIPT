//Indirect recursion;

let money = 100;
let totalApple = 0;

function buyApple(x) {
  if (x > 0) {
    console.log('I have ' + x + 'RS ' + totalApple);
    buyMore(x);
  } else {
    console.log('I dont have more money ', totalApple);
  }
}

function buyMore(x) {
  totalApple++;
  buyApple(x - 20);
}
buyApple(money);
