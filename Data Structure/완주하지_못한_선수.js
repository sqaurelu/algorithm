// hash
function solution(participant, completion) {
  let table = {};

  for (const person of participant) {
    if (!table[person]) table[person] = 1;
    else table[person] += 1;
  }

  for (const person of completion) {
    table[person] -= 1;
  }

  for (const key in table) {
    if (!!table[key]) return key;
  }
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));
console.log(
  solution(
    ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
    ['josipa', 'filipa', 'marina', 'nikola']
  )
);
console.log(
  solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
);
