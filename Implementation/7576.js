let input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [M, N] = input.shift().split(' ').map(Number);
let arr = input.map(x => x.split(' ').map(Number));

// 안익은 토마토(0) 개수 카운팅
const countZeros = (arr) => arr.reduce((acc, cur) => acc + cur.filter(y => y === 0).length, 0);

// 익은 토마토와 인접한 안익은 토마토 처리
const bfs = (ripedTomatoes) => {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  let days = 0;
  while (true) {
    let willRipedTomatoes = []; // 하루 뒤 익을 토마토

    let idx = 0;
    while (idx < ripedTomatoes.length) {
      let [x, y] = ripedTomatoes[idx++];

      for (let k = 0; k < 4; k++) {
        const [nx, ny] = [x + dx[k], y + dy[k]];

        if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

        if (arr[nx][ny] === 0) {
          willRipedTomatoes.push([nx, ny]);
          arr[nx][ny] = 1;
        }
      }
    }
    // 안익은 토마토가 없는 경우
    if (!willRipedTomatoes.length) break;

    days += 1;
    ripedTomatoes = willRipedTomatoes;
  }

  // 안익은 토마토가 있는 경우
  if (countZeros(arr)) console.log(-1);
  else console.log(days);
};


// 안익은 토마토 개수
let cnt = countZeros(arr);

// 안 익은 토마토가 없는 경우
if (!cnt) console.log(cnt);
else {
  let q = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === 1) q.push([i, j]); // 익은 토마토 배열에 저장
    }
  }

  bfs(q);
}