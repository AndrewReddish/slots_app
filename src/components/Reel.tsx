import React from 'react';

interface ReelProps {
  symbols: string[];
}

const Reel: React.FC<ReelProps> = ({ symbols }) => {
  return (
    <div className="reel">
      {symbols.map((sym, idx) => (
        <div key={idx} className="cell">
          {sym}
        </div>
      ))}
    </div>
  );
};

export default Reel;
