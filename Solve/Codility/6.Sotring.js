// https://app.codility.com/programmers/lessons/6-sorting/

// MaxProductOfThree
function solution(A) {
  A.sort((a, b) => a - b);

  const lastIdx = A.length - 1;
  const max = Math.max(A[lastIdx] * A[lastIdx - 1] * A[lastIdx - 2],
    A[lastIdx] * A[0] * A[1]);

  return max;
}