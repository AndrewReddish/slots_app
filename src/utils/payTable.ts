export function checkWins(grid: string[][]): number[][] {
  const lines: number[][] = [];
  // rows
  for (let r = 0; r < 4; r++) {
    if (grid[r].every((s) => s === grid[r][0])) {
      lines.push([r * 4, r * 4 + 1, r * 4 + 2, r * 4 + 3]);
    }
  }
  // columns
  for (let c = 0; c < 4; c++) {
    const col = [grid[0][c], grid[1][c], grid[2][c], grid[3][c]];
    if (col.every((s) => s === col[0])) {
      lines.push([c, 4 + c, 8 + c, 12 + c]);
    }
  }
  // diagonals
  if ([0, 1, 2, 3].every((i) => grid[i][i] === grid[0][0])) {
    lines.push([0, 5, 10, 15]);
  }
  if ([0, 1, 2, 3].every((i) => grid[i][3 - i] === grid[0][3])) {
    lines.push([3, 6, 9, 12]);
  }
  return lines;
}
