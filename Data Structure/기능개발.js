function solution(progresses, speeds) {
  let answer = [];
  let durations = progresses.map((progress, idx) => Math.ceil((100 - progress) / speeds[idx]));

  while (durations.length) {
    let cnt = 1;
    let cur = durations.shift();
    let next = durations[0];

    while (cur >= next) {
      durations.shift();
      next = durations[0];
      cnt += 1;
    }

    answer.push(cnt);
  }

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));