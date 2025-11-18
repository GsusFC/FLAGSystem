import React, { memo } from 'react';
import { GridIcon, MaximizeIcon } from 'lucide-react';

interface DisplayModeToggleProps {
  isGridMode: boolean;
  onChange: () => void;
}

const DisplayModeToggle = memo(function DisplayModeToggle({
  isGridMode,
  onChange
}: DisplayModeToggleProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0 bg-gradient-to-r from-black/40 to-black/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10">
      <div className="flex-1">
        <span className="text-xs sm:text-sm text-white/60 font-mono tracking-wider">🎯 DISPLAY MODE</span>
      </div>
      <label className="inline-flex items-center cursor-pointer group">
        <span className={`mr-2 sm:mr-3 text-xs sm:text-sm font-mono flex items-center gap-1 transition-all duration-300 ${!isGridMode ? 'text-white font-bold scale-110' : 'text-white/50'}`}>
          <MaximizeIcon className="h-4 w-4 sm:h-4 sm:w-4" />
          <span className="hidden sm:inline">STANDARD</span>
          <span className="sm:hidden">STD</span>
        </span>
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isGridMode}
            onChange={onChange}
          />
          <div
            className="w-12 h-6 sm:w-14 sm:h-7 bg-black/60 border-2 border-white/30 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#00ff00]/50 rounded-full
              peer-checked:after:translate-x-6 sm:peer-checked:after:translate-x-7 after:content-[''] after:absolute after:top-[2px]
              after:left-[2px] after:bg-gradient-to-br after:from-white after:to-gray-300 after:rounded-full after:h-5 after:w-5 sm:after:h-6 sm:after:w-6
              after:transition-all after:duration-300 after:shadow-lg peer-checked:bg-[#00ff00]/40 peer-checked:border-[#00ff00] hover:scale-105 transition-transform"
          ></div>
        </div>
        <span className={`ml-2 sm:ml-3 text-xs sm:text-sm font-mono flex items-center gap-1 transition-all duration-300 ${isGridMode ? 'text-white font-bold scale-110' : 'text-white/50'}`}>
          <GridIcon className="h-4 w-4 sm:h-4 sm:w-4" />
          GRID
        </span>
      </label>
    </div>
  );
});

export default DisplayModeToggle;
