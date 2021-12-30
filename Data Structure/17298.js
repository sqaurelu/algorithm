let [N, arr] = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
  .split('\n');

arr = arr.split(' ').map(Number);

let res = '-1';
let stack = [arr[N - 1]]; // 스택의 최상위 원소 = 탐색한 값들 중 가장 큰 값

// 입력의 오른쪽부터 확인
for (let i = N - 2; i >= 0; i--) {
  let cur = arr[i];

  let lastItem = stack[stack.length - 1];
  while (lastItem <= cur) {
    // 스택의 최상위 원소가 현재 원소보다 작거나 같으면 제거
    stack.pop();
    lastItem = stack[stack.length - 1];
  }

  if (lastItem > cur) res = `${lastItem} ${res}`;
  else res = `${-1} ${res}`;

  stack.push(cur);
}

console.log(res);

/* 반례
4
7 7 9 9
 */
