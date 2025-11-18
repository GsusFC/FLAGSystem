import React, { memo } from 'react';
import { useFlagHistory } from '../../contexts/FlagHistoryContext';

interface FlagHistoryProps {
  onSelectWord: (word: string) => void;
}

const FlagHistory = memo(function FlagHistory({ onSelectWord }: FlagHistoryProps) {
  const { history, clearHistory } = useFlagHistory();
  
  if (history.length === 0) return null;
  
  return (
    <div className="w-full mt-4 sm:mt-6 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 border border-white/10">
      <div className="flex justify-between items-center mb-3 sm:mb-4">
        <h3 className="text-xs sm:text-sm font-mono text-white/70 tracking-wider flex items-center gap-2">
          <span className="text-lg">📜</span>
          HISTORY ({history.length}/20)
        </h3>
        <button
          onClick={clearHistory}
          className="text-xs sm:text-sm text-white/50 hover:text-red-400 font-mono uppercase tracking-wider transition-colors hover:scale-105 active:scale-95"
        >
          🗑 CLEAR
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {history.map((word, index) => (
          <button
            key={`${word}-${index}`}
            onClick={() => onSelectWord(word)}
            className="bg-gradient-to-r from-white/10 to-white/5 hover:from-[#00ff00]/20 hover:to-[#00ff00]/10 border border-white/20 hover:border-[#00ff00]/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-white font-mono text-xs sm:text-sm uppercase tracking-wide transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
          >
            {word}
          </button>
        ))}
      </div>
    </div>
  );
});

export default FlagHistory;
