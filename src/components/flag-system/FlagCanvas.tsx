import React, { memo, useRef, useEffect, useState } from 'react';
import { getFlagInfo, supportedLetters } from '../../lib/flag-system/flagMap';

interface FlagCanvasProps {
  word: string;
  isGridMode: boolean;
  onExportSvg?: () => void;
}

// Array of background color options
const backgroundColors = [
  'bg-black',
  'bg-blue-900',
  'bg-purple-900', 
  'bg-slate-900',
  'bg-gray-900',
  'bg-zinc-900',
];

// Background patterns
const bgPatterns = [
  'bg-grid-white/[0.05]',
  'bg-dots-white/[0.05]',
  'bg-lines-white/[0.05]',
];

const FlagCanvas = memo(function FlagCanvas({
  word,
  isGridMode
}: FlagCanvasProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [bgColor, setBgColor] = useState(0);
  const [bgPattern, setBgPattern] = useState(0);

  // Function to cycle through background colors
  const changeBackground = () => {
    setBgColor((prev) => (prev + 1) % backgroundColors.length);
    setBgPattern((prev) => (prev + 1) % bgPatterns.length);
  };

  // Render each letter as a flag element
  const renderFlags = () => {
    if (!word) return <div className="text-white/50 text-center py-16 font-mono">Enter a word to see its flag representation</div>;

    const letters = word.toUpperCase().split('');
    
    // Filter out unsupported characters
    const validLetters = letters.filter(letter => supportedLetters.includes(letter));
    
    if (validLetters.length === 0) {
      return <div className="text-white/50 text-center py-16 font-mono">No valid flag characters found. Try A-Z</div>;
    }
    
    return (
      <div className={`w-full flex ${isGridMode ? 'flex-wrap justify-center gap-6' : 'flex-col items-center gap-6'}`}>
        {validLetters.map((letter, index) => {
          const flagInfo = getFlagInfo(letter);
          if (!flagInfo) return null;
          
          return (
            <div key={`${letter}-${index}`} className={`${isGridMode ? 'w-24 h-24' : 'w-full max-w-md aspect-[3/2]'}`}>
              <div className="relative w-full h-full overflow-hidden border border-white/10 rounded-md">
                {/* We would render the actual flag here based on the pattern and colors */}
                {/* For now just showing a placeholder */}
                <div 
                  className="w-full h-full flex items-center justify-center bg-blue-800"
                  style={{ backgroundColor: flagInfo.colors[0] }}
                >
                  <span className="text-white font-bold text-xl drop-shadow-md">
                    {letter}
                  </span>
                </div>
              </div>
              {isGridMode && (
                <div className="text-center mt-2 text-xs text-white/70 font-mono">
                  {letter}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };
  
  // Export SVG functionality would go here (simplified for this example)
  const exportSvg = () => {
    console.log('Export SVG functionality would go here');
    alert('Flag exported (not implemented in this example)');
  };
  
  return (
    <div className="w-full relative">
      <div 
        ref={canvasRef}
        className={`w-full rounded-xl overflow-hidden border border-white/10 p-6 ${backgroundColors[bgColor]} ${bgPatterns[bgPattern]}`}
        style={{ minHeight: '240px' }}
      >
        {renderFlags()}
      </div>
      
      <div className="mt-4 flex justify-end">
        <button 
          onClick={changeBackground} 
          className="text-xs text-white/50 hover:text-white/80 flex items-center gap-1 font-mono"
        >
          <span className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></span>
          CHANGE BACKGROUND
        </button>
      </div>
    </div>
  );
});

export default FlagCanvas;
