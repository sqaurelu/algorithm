let input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const N = Number(input.shift());
const K = Number(input.shift());

let board = Array.from(Array(N), () => new Array(N).fill(0));
board[0][0] = 2; // 뱀의 몸인 경우 2

let applePos = [];
for (let i = 0; i < K; i++) {
  applePos.push(input[i].split(' ').map(Number));
  board[applePos[i][0] - 1][applePos[i][1] - 1] = 1;
}

const L = Number(input.shift());
let snakeDir = [];
for (let i = K; i < input.length; i++) {
  snakeDir.push(input[i].split(' '));
}

let sec = 1;
const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
let dirIdx = 0;
let snake = [[0, 0]];
let snakeHeadIdx = 0;
while (true) {
  // 몸길이 늘리기
  const [nx, ny] = [snake[snakeHeadIdx][0] + dir[dirIdx][0], snake[snakeHeadIdx][1] + dir[dirIdx][1]];

  // 벽 부딪히는지 체크
  if (nx < 0 || nx >= N || ny < 0 || ny >= N) break;

  // 자기몸 부딪히는지 체크
  if (board[nx][ny] === 2) break;

  // 사과가 없는 경우
  if (!board[nx][ny]) {
    const [tx, ty] = snake.shift();
    snakeHeadIdx -= 1;
    board[tx][ty] = 0;
  }

  board[nx][ny] = 2; // 뱀의 몸인 경우 2로 변경
  snake.push([nx, ny]);
  snakeHeadIdx += 1;

  if (snakeDir.length && Number(snakeDir[0][0]) === sec) {
    if (snakeDir[0][1] === 'D') dirIdx = (dirIdx + 1) % 4;  // 오른쪽 회전
    else dirIdx = (dirIdx + 3) % 4; // 왼쪽 회전
    snakeDir.shift();
  }
  sec += 1;
}

console.log(sec);