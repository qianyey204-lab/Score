// -----------------------------
// 速度ごとの加点・減点設定
// -----------------------------
const speedConfig = {
  normal:     { plus: 10,  minus: -5 },
  ultra:      { plus: 20,  minus: -10 },
  superultra: { plus: 30,  minus: -15 }
};

// -----------------------------
// チーム一覧
// -----------------------------
const teamNames = ["Aチーム", "Bチーム", "Cチーム", "Dチーム", "Eチーム", "Fチーム", "Gチーム"];

// -----------------------------
// HTML生成
// -----------------------------
const teamsDiv = document.getElementById("teams");

teamNames.forEach((name, index) => {
  const row = document.createElement("div");
  row.className = "team-row";

  row.innerHTML = `
    <span>${name}</span>
    <span id="score-${index}" class="score">0</span>
    <button onclick="addScore(${index})">▲ 加点</button>
    <button onclick="subScore(${index})">▼ 減点</button>
  `;

  teamsDiv.appendChild(row);
});

// -----------------------------
// 加点処理
// -----------------------------
function addScore(id) {
  const speed = document.getElementById("speed").value;
  const add = speedConfig[speed].plus;

  const scoreEl = document.getElementById(`score-${id}`);
  scoreEl.textContent = Number(scoreEl.textContent) + add;
}

// -----------------------------
// 減点処理
// -----------------------------
function subScore(id) {
  const speed = document.getElementById("speed").value;
  const sub = speedConfig[speed].minus;

  const scoreEl = document.getElementById(`score-${id}`);
  scoreEl.textContent = Number(scoreEl.textContent) + sub;
}

// -----------------------------
// window に登録
// -----------------------------
window.addScore = addScore;
window.subScore = subScore;