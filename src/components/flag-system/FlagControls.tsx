import React, { memo, useRef, useEffect } from 'react';

interface FlagControlsProps {
  word: string;
  maxLength: number;
  isGenerating: boolean;
  onWordChange: (word: string) => void;
  onGenerateRandom: () => void;
  onExportSvg: () => void;
  onMaxLengthChange: (length: number) => void;
  onChangeBackground?: () => void;
}

const FlagControls = memo(function FlagControls({
  word,
  maxLength,
  isGenerating,
  onWordChange,
  onGenerateRandom,
  onExportSvg,
  onMaxLengthChange,
  onChangeBackground
}: FlagControlsProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Keep focus on input when manually changed
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [word]);
  
  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onWordChange(e.target.value);
  };
  
  // Handle length change
  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onMaxLengthChange(parseInt(e.target.value));
  };
  
  return (
    <div className="w-full bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-md rounded-xl p-4 sm:p-6 md:p-8 border border-white/10 shadow-2xl">
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
        {/* Word Input */}
        <div className="w-full">
          <label className="block mb-2 text-xs sm:text-sm font-mono text-white/70 tracking-wider" id="word-input-label">
            CREATE WORD (MAX {maxLength} LETTERS)
          </label>
          <input
            ref={inputRef}
            type="text"
            className="w-full bg-black/80 border-2 border-white/20 rounded-lg py-2.5 sm:py-3 md:py-4 px-3 sm:px-4 text-lg sm:text-xl md:text-2xl font-mono uppercase tracking-wider text-white focus:border-[#00ff00] focus:ring-2 focus:ring-[#00ff00]/50 focus:outline-none transition-all duration-300 placeholder:text-white/30"
            placeholder="TYPE HERE..."
            value={word}
            onChange={handleInputChange}
            aria-labelledby="word-input-label"
          />
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button
              onClick={onGenerateRandom}
              disabled={isGenerating}
              className="flex-1 px-4 sm:px-6 py-3 sm:py-3.5 bg-[#00ff00] text-black font-bold font-mono uppercase tracking-wider disabled:opacity-50 hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300 rounded-lg shadow-lg shadow-[#00ff00]/20 text-sm sm:text-base"
              aria-live="polite"
            >
              {isGenerating ? '⚡ GENERATING...' : '🎲 RANDOM WORD'}
            </button>

            {onChangeBackground && (
              <button
                onClick={onChangeBackground}
                className="px-4 sm:px-6 py-3 sm:py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold font-mono uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 rounded-lg shadow-lg text-sm sm:text-base"
              >
                🎨 CHANGE BG
              </button>
            )}
          </div>

          <button
            disabled={!word}
            onClick={onExportSvg}
            className="w-full px-4 sm:px-6 py-3 sm:py-3.5 bg-white/10 border-2 border-white/20 text-white font-bold font-mono uppercase tracking-wider disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 hover:border-white/40 hover:scale-105 active:scale-95 transition-all duration-300 rounded-lg text-sm sm:text-base"
          >
            💾 EXPORT SVG
          </button>
        </div>

        {/* Length control */}
        <div className="w-full border-t border-white/10 pt-4 sm:pt-5">
          <label className="block mb-3 text-xs sm:text-sm font-mono text-white/70 tracking-wider" id="length-control-label">
            MAXIMUM WORD LENGTH
          </label>
          <div className="flex items-center gap-3 sm:gap-4">
            <input
              type="range"
              min="2"
              max="12"
              className="w-full h-2 accent-[#00ff00] cursor-pointer"
              value={maxLength}
              onChange={handleLengthChange}
              aria-labelledby="length-control-label"
            />
            <span className="font-druk text-xl sm:text-2xl text-[#00ff00] min-w-[2.5rem] text-center">{maxLength}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default FlagControls;
