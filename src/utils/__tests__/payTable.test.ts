import { checkWins } from '../payTable';

test('detects row win', () => {
  const grid = [
    ['A', 'A', 'A', 'A'],
    ['B', 'C', 'D', 'E'],
    ['B', 'C', 'D', 'E'],
    ['B', 'C', 'D', 'E']
  ];
  expect(checkWins(grid)).toEqual([[0,1,2,3]]);
});

test('detects column win', () => {
  const grid = [
    ['A', 'B', 'C', 'D'],
    ['A', 'B', 'C', 'D'],
    ['A', 'B', 'C', 'D'],
    ['A', 'B', 'C', 'D']
  ];
  expect(checkWins(grid)).toContainEqual([0,4,8,12]);
});

test('detects diagonal win', () => {
  const grid = [
    ['A', 'B', 'C', 'D'],
    ['E', 'A', 'F', 'G'],
    ['H', 'I', 'A', 'J'],
    ['K', 'L', 'M', 'A']
  ];
  expect(checkWins(grid)).toContainEqual([0,5,10,15]);
});
