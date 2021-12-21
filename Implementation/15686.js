// let input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let input = `5 1
1 2 0 2 1
1 2 0 2 1
1 2 0 2 1
1 2 0 2 1
1 2 0 2 1`.split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const city = input.map(x => x.split(' ').map(Number));

// 좌표 추출
const findPosition = (place) => {
  let positions = [];
  city.forEach((x, i) => {
    x.forEach((y, j) => {
      if (y === place) positions.push([i, j]);
    });
  });
  return positions;
};

// 좌표 조합
const combination = (idx, chickenPos, len) => {
  let combChicken = [];

  const bfs = (idx, prev) => {
    if (prev.length === len) {
      combChicken.push(prev);
      return;
    }

    for (let i = idx; i < chickenPos.length; i++) {
      bfs(i + 1, [...prev, chickenPos[i]]);
    }
  };

  bfs(idx, []);
  return combChicken;
};

// step 1. 집, 치킨집 좌표 추출
const housePos = findPosition(1);
const chickenPos = findPosition(2);

// step 2. 치킨집 M개 조합
const combChicken = combination(0, chickenPos, M);

// step 3. 조합한 경우의 수로 최소 거리 계산
let total = [];
combChicken.forEach(chickens => {
  let curTotal = 0;

  housePos.forEach(([hx, hy]) => { // 현재 집과 가장 가까운 치킨집 get
    let minDis = Infinity;
    chickens.forEach(([cx, cy]) => {
      const curDis = Math.abs(hx - cx) + Math.abs(hy - cy);
      minDis = Math.min(minDis, curDis);
    });
    curTotal += minDis;
  });
  total.push(curTotal);
});

console.log(Math.min.apply(null, total));