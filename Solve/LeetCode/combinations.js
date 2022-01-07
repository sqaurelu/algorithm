/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

// dfs
const combine = (n, k) => {
  if (n == 1 && k == 1) return [[1]];

  let res = [];
  const dfs = (curArr, start, res) => {
    if (curArr.length === k) {
      res.push(curArr);
      return;
    }

    for (let i = start; i <= n; i++) {
      dfs([...curArr, i], i + 1, res);
    }
  }

  dfs([], 1, res);

  return res;
};

// 분할 정복 병합
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

const combination = (nums, num) => {
  // base case
  if (num === 1) return nums.map(x => [x]);

  // 분할 => 정복 -> 병합
  let res = [];

  nums.forEach((v, idx, origin) => {
    // 분할 & 정복
    const combinationArr = combination(origin.slice(idx + 1), num - 1);
    // 병합
    const combineArr = combinationArr.map(x => [v, ...x]);

    res.push(...combineArr);
  });

  return res;
};

const combine = function (n, k) {
  const arr = Array.from({ length: n }, (_, i) => i + 1);

  return combination(arr, k);
};