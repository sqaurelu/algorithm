function solution(s) {
  let answer = s.length;
  let bracket = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  if (answer % 2 === 1) return 0;

  s = s.split('');
  for (let i = 0; i < s.length; i++) {
    if (!!i) s.push(s.shift());

    let stack = [];
    for (let k = 0; k < s.length; k++) {
      if (bracket.hasOwnProperty(s[k])) stack.push(s[k]);
      else if (bracket[stack.pop()] !== s[k]) {
        answer -= 1;
        break;
      }
    }
  }

  return answer;
}

console.log(solution("[](){}"));
console.log(solution("}]()[{"));
console.log(solution("[)(]"));
console.log(solution("}}}"));