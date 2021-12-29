// let input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

let input = `3
1 0
5
4 2
1 2 3 4
6 0
1 1 9 1 1 1`.split('\n');
const T = Number(input.shift());

for (let i = 0; i < input.length; i += 2) {
  const [N, M] = input[i].split(' ').map(Number);
  let docs = input[i + 1].split(' ').map((x, idx) => [Number(x), idx]);
  let order = 1;

  while (docs.length) {
    let cur = docs.shift();
    let importance = -1;
    docs.map(([num, idx]) => {
      if (num > importance) importance = num;
    });

    if (cur[0] < importance) {
      docs.push(cur);
      continue;
    }

    if (cur[1] === M) {
      console.log(order);
      break;
    }

    order += 1;
  }
}
