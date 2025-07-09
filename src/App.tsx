import React, { useState } from 'react';
import SlotGrid from './components/SlotGrid';
import BetSlider from './components/BetSlider';
import JackpotModal from './components/JackpotModal';
import { RTPTracker } from './utils/rtpTracker';

const SYMBOLS = ['🍒', '🍋', '🍊', '🍇', '🍉', '🥝'];

const tracker = new RTPTracker();

function App() {
  const [balance, setBalance] = useState(300);
  const [bet, setBet] = useState(1);
  const [wins, setWins] = useState<string[][]>([]);
  const [jackpot, setJackpot] = useState<number | null>(null);

  const handleSpin = (grid: string[][], winLines: number[][]) => {
    const totalWin = winLines.length * bet * 10; // simple payout
    setBalance((b) => b - bet + totalWin);
    tracker.record(bet, totalWin);
    setWins(winLines.map((line) => line.map((i) => grid[Math.floor(i / 4)][i % 4])));
  };

  return (
    <div className="app">
      <h1>Fruit Spin 4x4</h1>
      <SlotGrid
        symbols={SYMBOLS}
        bet={bet}
        onSpin={handleSpin}
        onJackpot={(amount) => setJackpot(amount)}
      />
      <BetSlider value={bet} onChange={setBet} balance={balance} />
      <p>Balance: €{balance.toFixed(2)}</p>
      <p>RTP: {(tracker.rtp * 100).toFixed(2)}%</p>
      <JackpotModal amount={jackpot} onClose={() => setJackpot(null)} />
    </div>
  );
}

export default App;
