// https://leetcode.com/problems/generate-parentheses/

const generateParenthesis = function(n) {
  let ans = [];
  const dfs = (cur, open, close) => {
    // termination case
    if (open === n && close === n) {
      ans.push(cur);
      return;
    }

    // recursion
    if (open < n) dfs(cur + '(', open + 1, close);

    if (open > close) dfs(cur + ')', open, close + 1);
  }

  dfs('', 0, 0);

  return ans;
};

console.log(generateParenthesis(3));