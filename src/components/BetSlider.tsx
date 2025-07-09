import React from 'react';

interface BetSliderProps {
  value: number;
  onChange: (v: number) => void;
  balance: number;
}

const BetSlider: React.FC<BetSliderProps> = ({ value, onChange, balance }) => {
  return (
    <div className="bet-slider">
      <input
        type="range"
        min="0.1"
        max="5"
        step="0.1"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
      <span>Bet: €{value.toFixed(2)}</span>
    </div>
  );
};

export default BetSlider;
