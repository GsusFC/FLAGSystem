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
    <div className="flex items-center mb-2">
      <div className="flex-1">
        <span className="text-xs text-white/50 font-mono">DISPLAY MODE</span>
      </div>
      <label className="inline-flex items-center cursor-pointer">
        <span className="mr-2 text-xs text-white/70 font-mono flex items-center">
          <MaximizeIcon className="h-3.5 w-3.5 mr-1" />
          STANDARD
        </span>
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isGridMode}
            onChange={onChange}
          />
          <div
            className="w-9 h-5 bg-black/40 border border-white/20 peer-focus:outline-none rounded-full
              peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px]
              after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4
              after:transition-all peer-checked:bg-[#00ff00]/30 peer-checked:border-[#00ff00]/50"
          ></div>
        </div>
        <span className="ml-2 text-xs text-white/70 font-mono flex items-center">
          <GridIcon className="h-3.5 w-3.5 mr-1" />
          GRID
        </span>
      </label>
    </div>
  );
});

export default DisplayModeToggle;
