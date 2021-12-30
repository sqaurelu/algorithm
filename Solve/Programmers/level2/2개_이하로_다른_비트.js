/* 시간 초과
function solution(numbers) {
  let answer = [];

  const numOfDigits = (cur, next) => {
    if (cur.length < next.length) {
      for (let i = 0; i < next.length - cur.length; i++) {
        cur = '0' + cur;
      }
    } else {
      for (let i = 0; i < cur.length - next.length; i++) {
        next = '0' + next;
      }
    }

    return [cur, next];
  }

  for (const number of numbers) {
    let idx = 1;

    while (true) {
      let flag = true;
      let cnt = 0;
      let [cur, next] = numOfDigits(number.toString(2), Number(number + idx++).toString(2));

      for (let i = 0; i < cur.length; i++) {
        if (cur[i] !== next[i]) cnt++;

        if (cnt > 2) {
          flag = false;
          break;
        }
      }

      if (flag) {
        answer.push(parseInt(next, 2));
        break;
      }
    }
  }

  return answer;
}
*/

function solution(numbers) {
  let answer = [];

  for (const number of numbers) {
    if (number % 2 === 0) answer.push(number + 1); // 짝수 -> 현재 수 + 1
    else { // 홀수 -> LSB에서 가장 가까운 0을 1로, 그 전 비트를 0으로
      let curNum = number.toString(2).split('');

      let pos = 0;
      for (pos = curNum.length; pos > 0; pos--) {
        if (curNum[pos] === '0') break;
      }

      pos ? curNum[pos] = '1' : curNum.unshift('1');
      curNum[pos + 1] = '0';
      answer.push(parseInt(curNum.join(''), 2));
    }
  }

  return answer;
}


console.log(solution([2, 7]));

// reference: https://www.apexcel.blog/ps/programmers/77885/77885/