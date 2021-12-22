let input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
let arr = input.map(x => x.split(' ').map(Number));

let visited = Array.from(Array(N), () => new Array(M).fill(0));
let maxSum = 0;

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

// ㅜ, ㅏ, ㅗ, ㅓ 제외한 모양 체크
const dfs = (x, y, sum, len) => {
  if (len === 4) { // 깊이가 4인 경우 -> 블록 4개까지만 선택
    maxSum = Math.max(maxSum, sum);
    return;
  }

  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];

    if (nx < 0 || nx >= N || ny < 0 || ny >= M || visited[nx][ny]) continue;

    visited[nx][ny] = 1;
    dfs(nx, ny, sum + arr[nx][ny], len + 1);
    visited[nx][ny] = 0; // 방문한 곳 다시 방문하기 위함.
  }
};

const checkExceptionShape = (x, y) => {
  let sum = 0;

  // ㅜ
  if (x >= 0 && x + 1 < N && y >= 0 && y + 2 < M) {
    sum = Math.max(sum, arr[x][y] + arr[x][y + 1] + arr[x + 1][y + 1] + arr[x][y + 2]);
  }

  // ㅏ
  if (x >= 0 && x + 2 < N && y >= 0 && y + 1 < M) {
    sum = Math.max(sum, arr[x][y] + arr[x + 1][y] + arr[x + 1][y + 1] + arr[x + 2][y]);
  }

  // ㅗ
  if (x - 1 >= 0 && x < N && y >= 0 && y + 2 < M) {
    sum = Math.max(sum, arr[x][y] + arr[x - 1][y + 1] + arr[x][y + 1] + arr[x][y + 2]);
  }

  // ㅓ
  if (x - 1 >= 0 && x + 1 < N && y >= 0 && y + 1 < M) {
    sum = Math.max(sum, arr[x][y] + arr[x - 1][y + 1] + arr[x][y + 1] + arr[x + 1][y + 1]);
  }

  return sum;
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    visited[i][j] = 1;
    dfs(i, j, arr[i][j], 1);
    visited[i][j] = 0;

    maxSum = Math.max(maxSum, checkExceptionShape(i, j));
  }
}

console.log(maxSum);