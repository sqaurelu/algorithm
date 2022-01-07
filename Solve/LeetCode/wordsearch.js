// https://leetcode.com/problems/word-search

const exist = function(board, word) {
  if (board.length === 0) return false;

  const h = board.length;
  const w = board[0].length;
  const dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]];

  const dfs = (x, y, strIdx) => {
    if (board[x][y] !== word[strIdx]) return false;
    if (strIdx === word.length - 1) return true;

    board[x][y] = 1;
    for (const [dx, dy] of dirs) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || nx >= h || ny < 0 || ny >= w) continue;

      if (dfs(nx, ny, strIdx + 1)) return true;
    }
    board[x][y] = word[strIdx];
    return false;
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }

  return false;
};