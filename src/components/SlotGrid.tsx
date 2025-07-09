import React, { useState } from 'react';
import Reel from './Reel';
import { checkWins } from '../utils/payTable';

interface SlotGridProps {
  symbols: string[];
  bet: number;
  onSpin: (grid: string[][], winLines: number[][]) => void;
  onJackpot: (amount: number) => void;
}

const SlotGrid: React.FC<SlotGridProps> = ({ symbols, bet, onSpin, onJackpot }) => {
  const [grid, setGrid] = useState<string[][]>(Array.from({ length: 4 }, () => Array(4).fill('')));
  const [spinning, setSpinning] = useState(false);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    const newGrid = Array.from({ length: 4 }, () =>
      Array.from({ length: 4 }, () => symbols[Math.floor(Math.random() * symbols.length)])
    );
    setTimeout(() => {
      setGrid(newGrid);
      const winLines = checkWins(newGrid);
      if (Math.random() < 0.05) {
        const jackpotWin = bet * 100;
        onJackpot(jackpotWin);
      }
      onSpin(newGrid, winLines);
      setSpinning(false);
    }, 2000);
  };

  return (
    <div className="slot-grid">
      <div className="reels">
        {grid.map((col, i) => (
          <Reel key={i} symbols={col} />
        ))}
      </div>
      <button onClick={spin} disabled={spinning}>
        {spinning ? 'Spinning...' : 'Spin'}
      </button>
    </div>
  );
};

export default SlotGrid;
