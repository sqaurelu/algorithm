// https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/

/* CountFactors
*
* 약수 개수 구하기
* N의 약수는 N의 제곱근 전까지 대칭성을 이룬다.
* => 제곱근전까지 약수의 개수를 구해 2배
* => 제곱수인 경우 2배 해준 값 + 1
* */
function CountFactors(N) {
  let cnt = 0;

  const squareRoot = Math.sqrt(N);
  for (let i = 1; i < squareRoot; i++) {
    if (N % i === 0) cnt++;
  }

  return Number.isInteger(squareRoot) ? (cnt * 2) + 1 : cnt * 2;
}

function MinPerimeterRectangle(N) {
  let minArea = Infinity;
  const squareRoot = Math.sqrt(N);

  for (let i = 1; i < squareRoot; i++) {
    if (N % i === 0) {
      minArea = Math.min(minArea, (i + (N / i)) * 2);
    }
  }

  if (Number.isInteger(squareRoot)) minArea = Math.min(minArea, squareRoot * 4);

  return minArea;
}

// Flags

function check(arr, num) {
  let prev = arr[0];
  let cnt = 1; // 현재 선택한 깃발의 개수 -> 0번 깃발 선택

  for (let i = 1; i < arr.length && cnt < num; i++) {
    if (arr[i] - prev >= num) {
      cnt += 1;
      prev = arr[i];
    }
  }

  return cnt;
}

function Flags(A) {
  if (A.length < 3) return 0;

  let peakIdxs = [];
  for (let i = 1; i < A.length - 1; i++) {
    if (A[i - 1] < A[i] && A[i] > A[i + 1]) peakIdxs.push(i);
  }
  // K개의 flag를 선택하면 두 flag 사이의 거리가 K보다 크거나 같아야 한다.

  // peak가 0 or 1개인 경우
  if (peakIdxs.length < 2) return peakIdxs.length;

  // 선택할 flag 개수 이진탐색
  let max = 0;
  let left = 0, right = peakIdxs.length;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(peakIdxs, mid) === mid) { // 오른쪽
      left = mid + 1;
      max = mid;
    } else right = mid - 1; // 왼쪽
  }

  return max;
}

// https://app.codility.com/demo/results/trainingK5W95E-BKK/