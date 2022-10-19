// const data = [30, 24, 54, 45, 13, 57, 7];
// let find = 7;
function sear() {
  const data = [23, 4, 6, 7, 8, , 9, 3];
  let find = document.getElementById('el').value;
  for (let i = 0; i < data.length; i++) {
    if (data[i] == find) {
      alert('Found' + i);
      console.log(i);
    } else {
      console.log('Not found');
    }
  }
}
sear();
