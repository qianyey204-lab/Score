// 速度設定
const speedConfig = {
  normal:     { plus: 10,  minus: -5 },
  ultra:      { plus: 20,  minus: -10 },
  superultra: { plus: 30,  minus: -15 }
};

// 加点
function addScore(id) {
  const speed = document.getElementById("speed").value;
  const add = speedConfig[speed].plus;

  const scoreEl = document.getElementById(`score-${id}`);
  scoreEl.textContent = Number(scoreEl.textContent) + add;
}

// 減点
function subScore(id) {
  const speed = document.getElementById("speed").value;
  const sub = speedConfig[speed].minus;

  const scoreEl = document.getElementById(`score-${id}`);
  scoreEl.textContent = Number(scoreEl.textContent) + sub;
}

window.addScore = addScore;
window.subScore = subScore;