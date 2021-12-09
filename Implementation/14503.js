let input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
let [r, c, d] = input.shift().split(' ').map(Number);
let area = input.map(x => x.split(' ').map(Number));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let cleanCnt = 0;

// 청소 가능 여부
let isCanClean = true;

while (true) {
  // 현재 위치 청소
  if (isCanClean) {
    area[r][c] = 2;
    cleanCnt += 1;
    isCanClean = false;
  }

  let curDir; // 현재 방향

  // 왼쪽 방향으로 청소할 공간이 있는지 확인
  for (let i = 0; i < 4; i++) {
    curDir = (d + 3 - i) % 4;

    const [nr, nc] = [r + dx[curDir], c + dy[curDir]];

    if (nr < 0 || nr >= N || nc < 0 || nc >= M) continue;

    // 청소하지 않은 공간인 경우
    if (area[nr][nc] === 0) {
      // 회전
      d = curDir;
      // 한칸 전진
      [r, c] = [nr, nc];
      isCanClean = true;
      break;
    }
  }

  // 청소한 경우
  if (isCanClean) continue;

  // 4 방향 모두 청소 or 벽인 경우 후진
  d = curDir;
  let [br, bc] = [r + dx[d] * (-1), c + dy[d] * (-1)];

  // 후진 불가능 => 벽인 경우
  if (br < 0 || br >= N || bc < 0 || bc >= M) break;
  if (area[br][bc] === 1) break;

  // 후진 가능
  [r, c] = [br, bc];
}

console.log(cleanCnt);