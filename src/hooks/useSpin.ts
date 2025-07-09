import { useState } from 'react';
import { checkWins } from '../utils/payTable';

export function useSpin(symbols: string[], onJackpot: (amount: number) => void) {
  const [grid, setGrid] = useState<string[][]>(Array.from({ length: 4 }, () => Array(4).fill('')));
  const [spinning, setSpinning] = useState(false);

  const spin = (bet: number, callback: (g: string[][], wins: number[][]) => void) => {
    if (spinning) return;
    setSpinning(true);
    const newGrid = Array.from({ length: 4 }, () =>
      Array.from({ length: 4 }, () => symbols[Math.floor(Math.random() * symbols.length)])
    );
    setTimeout(() => {
      setGrid(newGrid);
      const winLines = checkWins(newGrid);
      if (Math.random() < 0.05) {
        onJackpot(bet * 100);
      }
      callback(newGrid, winLines);
      setSpinning(false);
    }, 2000);
  };

  return { grid, spinning, spin };
}
