import React, { memo } from 'react';
import { useFlagHistory } from '../../contexts/FlagHistoryContext';

interface FlagHistoryProps {
  onSelectWord: (word: string) => void;
}

const FlagHistory = memo(function FlagHistory({ onSelectWord }: FlagHistoryProps) {
  const { history, clearHistory } = useFlagHistory();
  
  if (history.length === 0) return null;
  
  return (
    <div className="w-full mt-4 bg-black/30 rounded-lg p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-mono text-white/70">HISTORY</h3>
        <button 
          onClick={clearHistory}
          className="text-xs text-white/50 hover:text-white/80"
        >
          CLEAR
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {history.map((word, index) => (
          <button
            key={`${word}-${index}`}
            onClick={() => onSelectWord(word)}
            className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded text-white font-mono text-sm transition-colors"
          >
            {word}
          </button>
        ))}
      </div>
    </div>
  );
});

export default FlagHistory;
