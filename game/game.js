let hitCount = 0;
let isGameStart = true;
function startGame() {
  let mosquito = document.getElementById('mosquito');
  let time = setInterval(() => {
    let i = Math.floor(Math.random() * 500) + 1;
    let j = Math.floor(Math.random() * 500) + 1;
    mosquito.style.left = i + 'px';
    mosquito.style.top = j + 'px';
  }, 2000);

  setTimeout(() => {
    clearTimeout(time);
    isGameStart = false;
  }, 30000);
}

function hitMosquito() {
  if (isGameStart) {
    hitCount++;
    let hit = document.querySelector('.totalHit');
    hit.textContent = hitCount;
  }
}
