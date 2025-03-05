// Flag system dictionary: maps letters to flag display data
// Used for rendering the nautical flag visualization

export interface FlagInfo {
  letter: string;
  colors: string[];
  pattern: string;
}

// Map of uppercase letters to their flag rendering information
export const flagMap: Record<string, FlagInfo> = {
  // Letters A-Z
  A: {
    letter: 'A',
    colors: ['#FFFFFF', '#0000FF'],
    pattern: 'split-vertical'
  },
  B: {
    letter: 'B',
    colors: ['#FF0000'],
    pattern: 'solid'
  },
  C: {
    letter: 'C',
    colors: ['#0000FF', '##FFFFFF', '#0000FF', '##FFFFFF', '#0000FF'],
    pattern: 'horizontal-stripes'
  },
  D: {
    letter: 'D',
    colors: ['#FFFF00', '#0000FF', '#FFFF00'],
    pattern: 'horizontal-stripes'
  },
  E: {
    letter: 'E',
    colors: ['#0000FF', '##FF0000'],
    pattern: 'split-horizontal'
  },
  F: {
    letter: 'F',
    colors: ['#FFFFFF', '#FF0000'],
    pattern: 'diamond'
  },
  G: {
    letter: 'G',
    colors: ['#FFFF00', '#0000FF', '#FFFF00', '#0000FF', '#FFFF00', '#0000FF'],
    pattern: 'vertical-stripes'
  },
  H: {
    letter: 'H',
    colors: ['#FFFFFF', '#FF0000'],
    pattern: 'split-vertical'
  },
  I: {
    letter: 'I',
    colors: ['#FFFF00', '#000000'],
    pattern: 'circle'
  },
  J: {
    letter: 'J',
    colors: ['#0000FF', '#FFFFFF', '#0000FF'],
    pattern: 'horizontal-stripes'
  },
  K: {
    letter: 'K',
    colors: ['#FFFF00', '#0000FF'],
    pattern: 'split-vertical'
  },
  L: {
    letter: 'L',
    colors: ['#FFFF00', '#000000'],
    pattern: 'quadrants'
  },
  M: {
    letter: 'M',
    colors: ['#0000FF', '#FFFFFF', '#0000FF'],
    pattern: 'cross'
  },
  N: {
    letter: 'N',
    colors: ['#0000FF', '#FFFFFF'],
    pattern: 'checkered'
  },
  O: {
    letter: 'O',
    colors: ['#FF0000', '#FFFF00'],
    pattern: 'diagonal-split'
  },
  P: {
    letter: 'P',
    colors: ['#0000FF', '#FFFFFF', '#0000FF', '#FFFFFF'],
    pattern: 'rectangle'
  },
  Q: {
    letter: 'Q',
    colors: ['#FFFF00'],
    pattern: 'solid'
  },
  R: {
    letter: 'R',
    colors: ['#FF0000', '#FFFF00', '#FF0000', '#FFFF00', '#FF0000', '#FFFF00'],
    pattern: 'cross'
  },
  S: {
    letter: 'S',
    colors: ['#FFFFFF', '#0000FF'],
    pattern: 'circle'
  },
  T: {
    letter: 'T',
    colors: ['#FF0000', '#FFFFFF', '#0000FF'],
    pattern: 'vertical-stripes'
  },
  U: {
    letter: 'U',
    colors: ['#FFFFFF', '#FF0000', '#FFFFFF', '#FF0000'],
    pattern: 'quadrants'
  },
  V: {
    letter: 'V',
    colors: ['#FF0000', '#FFFFFF', '#FF0000', '#FFFFFF', '#FF0000'],
    pattern: 'diagonal-stripes'
  },
  W: {
    letter: 'W',
    colors: ['#0000FF', '#FFFFFF', '#FF0000', '#FFFFFF', '#0000FF'],
    pattern: 'rectangle'
  },
  X: {
    letter: 'X',
    colors: ['#0000FF', '#FFFFFF'],
    pattern: 'cross-blue'
  },
  Y: {
    letter: 'Y',
    colors: ['#FFFF00', '#FF0000', '#FFFF00', '#FF0000', '#FFFF00'],
    pattern: 'diagonal-stripes'
  },
  Z: {
    letter: 'Z',
    colors: ['#FFFF00', '#0000FF', '#FF0000', '#000000'],
    pattern: 'triangle'
  },
  
  // Numbers and special characters could be added here
  // to extend the functionality
};

// Helper function to get flag info for a letter
export function getFlagInfo(letter: string): FlagInfo | null {
  const upperLetter = letter.toUpperCase();
  return flagMap[upperLetter] || null;
}

// Export all supported letters
export const supportedLetters = Object.keys(flagMap);
