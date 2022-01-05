/** https://leetcode.com/problems/subsets/
 * @param {number[]} nums => [1, 2, 3, 4]
 * @return {number[][]}
 */

// cascading
const subsets = function (nums) {
  let res = [[]];

  for (const num of nums) {
    const len = res.length;

    for (let k = 0; k < len; k++) {
      res.push([...res[k], num]);
    }
  }

  return res;
};

// combination
const combination = (arr, selectedNum) => {
  let ans = [];
  if (selectedNum === 1) return arr.map(x => [x]);

  arr.forEach((v, idx, origin) => {
    const next = origin.slice(idx + 1);
    const combinationArr = combination(next, selectedNum - 1);
    const combine = combinationArr.map(x => [v, ...x]);

    ans.push(...combine);
  });

  return ans;
}

const subsets = function(nums) {
  let res = [[]];

  for (let i = 1; i <= nums.length; i++) {
    res.push(...combination(nums, i));
  }

  return res;
};

// backtracking
const subsets = function(nums) {
  let res = [];

  const backtracking = (first, curArr, num) => {
    if (curArr.length === num) {
      res.push(curArr);
      return;
    }

    for (let i = first; i < nums.length; i++) {
      backtracking(i + 1, [nums[i], ...curArr], num);
    }
  }

  for (let i = 0; i <= nums.length; i++) {
    backtracking(0, [], i);
  }

  return res;
};

// bitmask
const subsets = function(nums) {
  let res = [];
  const n = nums.length;

  for (let i = Number(Math.pow(2, n)); i < Math.pow(2, n + 1); i++) {
    const bitmask = i.toString(2).substring(1);

    let cur = [];
    for (let k = 0; k < n; k++) {
      if (bitmask[k] === '1') cur.push(nums[k]);
    }

    res.push(cur);
  }

  return res;
};