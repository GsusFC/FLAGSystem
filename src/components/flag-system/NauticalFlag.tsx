import React from 'react';
import { FlagInfo } from '../../lib/flag-system/flagMap';

interface NauticalFlagProps {
  flagInfo: FlagInfo;
  className?: string;
}

const NauticalFlag: React.FC<NauticalFlagProps> = ({ flagInfo, className = '' }) => {
  const { colors, pattern } = flagInfo;

  // Render different patterns
  const renderPattern = () => {
    switch (pattern) {
      case 'solid':
        return (
          <div className="w-full h-full" style={{ backgroundColor: colors[0] }} />
        );

      case 'split-vertical':
        return (
          <div className="w-full h-full flex">
            <div className="w-1/2 h-full" style={{ backgroundColor: colors[0] }} />
            <div className="w-1/2 h-full" style={{ backgroundColor: colors[1] }} />
          </div>
        );

      case 'split-horizontal':
        return (
          <div className="w-full h-full flex flex-col">
            <div className="w-full h-1/2" style={{ backgroundColor: colors[0] }} />
            <div className="w-full h-1/2" style={{ backgroundColor: colors[1] }} />
          </div>
        );

      case 'horizontal-stripes':
        return (
          <div className="w-full h-full flex flex-col">
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-full flex-1"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        );

      case 'vertical-stripes':
        return (
          <div className="w-full h-full flex">
            {colors.map((color, index) => (
              <div
                key={index}
                className="h-full flex-1"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        );

      case 'diagonal-split':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
            <polygon points="0,0 100,0 0,100" fill={colors[0]} />
            <polygon points="100,0 100,100 0,100" fill={colors[1]} />
          </svg>
        );

      case 'diagonal-stripes':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <pattern id={`diagonal-${flagInfo.letter}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                {colors.map((color, index) => (
                  <rect
                    key={index}
                    x={index * (20 / colors.length)}
                    y="0"
                    width={20 / colors.length}
                    height="20"
                    fill={color}
                  />
                ))}
              </pattern>
            </defs>
            <rect width="100" height="100" fill={`url(#diagonal-${flagInfo.letter})`} />
          </svg>
        );

      case 'checkered':
        return (
          <div className="w-full h-full grid grid-cols-4 grid-rows-4">
            {Array.from({ length: 16 }).map((_, index) => {
              const row = Math.floor(index / 4);
              const col = index % 4;
              const colorIndex = (row + col) % 2;
              return (
                <div
                  key={index}
                  className="w-full h-full"
                  style={{ backgroundColor: colors[colorIndex] }}
                />
              );
            })}
          </div>
        );

      case 'quadrants':
        return (
          <div className="w-full h-full grid grid-cols-2 grid-rows-2">
            <div style={{ backgroundColor: colors[0] }} />
            <div style={{ backgroundColor: colors[1] }} />
            <div style={{ backgroundColor: colors[2] }} />
            <div style={{ backgroundColor: colors[3] }} />
          </div>
        );

      case 'circle':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect width="100" height="100" fill={colors[0]} />
            <circle cx="50" cy="50" r="30" fill={colors[1]} />
          </svg>
        );

      case 'diamond':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect width="100" height="100" fill={colors[0]} />
            <polygon points="50,10 90,50 50,90 10,50" fill={colors[1]} />
          </svg>
        );

      case 'cross':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect width="100" height="100" fill={colors[0]} />
            <rect x="40" y="0" width="20" height="100" fill={colors[1]} />
            <rect x="0" y="40" width="100" height="20" fill={colors[1]} />
          </svg>
        );

      case 'cross-blue':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect width="100" height="100" fill={colors[1]} />
            <polygon points="0,0 30,50 0,100" fill={colors[0]} />
            <polygon points="100,0 70,50 100,100" fill={colors[0]} />
            <polygon points="0,0 50,30 100,0" fill={colors[0]} />
            <polygon points="0,100 50,70 100,100" fill={colors[0]} />
          </svg>
        );

      case 'triangle':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect width="100" height="100" fill={colors[0]} />
            <polygon points="0,0 100,50 0,100" fill={colors[1]} />
            <polygon points="100,0 100,100 50,50" fill={colors[2]} />
            <polygon points="25,50 75,25 75,75" fill={colors[3]} />
          </svg>
        );

      case 'rectangle':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect width="100" height="100" fill={colors[0]} />
            <rect x="20" y="20" width="60" height="60" fill={colors[1]} />
          </svg>
        );

      default:
        return (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <span className="text-white text-xs">Unknown pattern</span>
          </div>
        );
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {renderPattern()}
    </div>
  );
};

export default NauticalFlag;
