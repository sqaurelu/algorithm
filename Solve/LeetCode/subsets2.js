// https://leetcode.com/problems/subsets-ii/

// 중복 원소를 가진 배열의 멱집합 구하기

const subsetsWithDup = function (nums) {
  let res = [[]];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let dupCount = 0;
    while (i + dupCount < nums.length && nums[i] === nums[i + 1 + dupCount]) {
      dupCount++;
    }

    let prevLen = res.length;
    for (let j = 0; j < prevLen; j++) {
      let elements = res[j].slice();

      for (let k = 0; k <= dupCount; k++) {
        elements.push(nums[i]);
        res.push(elements.slice());
      }
    }

    i += dupCount;
  }

  return res;
};

console.log(subsetsWithDup([1, 2, 2]));