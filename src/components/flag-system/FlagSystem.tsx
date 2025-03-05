import React, { useState, useCallback } from 'react';
import { useFlagHistory } from '../../contexts/FlagHistoryContext';
import DisplayModeToggle from './DisplayModeToggle';
import FlagCanvas from './FlagCanvas';
import FlagControls from './FlagControls';
import FlagHistory from './FlagHistory';

const FlagSystem: React.FC = () => {
  // Main state
  const [word, setWord] = useState('');
  const [isGridMode, setIsGridMode] = useState(false);
  const [maxLength, setMaxLength] = useState(6);
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Get history context
  const { addToHistory } = useFlagHistory();
  
  // Handle word change from input or history selection
  const handleWordChange = useCallback((newWord: string) => {
    // Enforce max length
    const truncated = newWord.slice(0, maxLength);
    setWord(truncated.toUpperCase());
    
    // Add to history if not empty
    if (truncated) {
      addToHistory(truncated.toUpperCase());
    }
  }, [maxLength, addToHistory]);
  
  // Handle random word generation
  const handleGenerateRandom = useCallback(async () => {
    try {
      setIsGenerating(true);
      
      // In a real app, this could come from an API call
      // For this example, let's generate a random word
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const length = Math.floor(Math.random() * maxLength) + 1;
      let randomWord = '';
      
      for (let i = 0; i < length; i++) {
        randomWord += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      
      // Wait a bit to simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      handleWordChange(randomWord);
    } catch (error) {
      console.error('Error generating random word:', error);
    } finally {
      setIsGenerating(false);
    }
  }, [maxLength, handleWordChange]);
  
  // Toggle grid mode
  const toggleGridMode = useCallback(() => {
    setIsGridMode(prev => !prev);
  }, []);
  
  // Export SVG (stub implementation)
  const handleExportSvg = useCallback(() => {
    alert(`Exporting SVG for word: ${word}`);
    // In a real app, this would actually generate and download an SVG file
  }, [word]);
  
  // Update max length
  const handleMaxLengthChange = useCallback((length: number) => {
    setMaxLength(length);
    // If current word is longer than new max, truncate it
    if (word.length > length) {
      setWord(word.slice(0, length));
    }
  }, [word]);
  
  return (
    <div className="max-w-4xl mx-auto">
      {/* Display Mode Toggle */}
      <DisplayModeToggle
        isGridMode={isGridMode}
        onChange={toggleGridMode}
      />
      
      {/* Main Flag Canvas */}
      <FlagCanvas
        word={word}
        isGridMode={isGridMode}
      />
      
      {/* Controls Section */}
      <div className="mt-6">
        <FlagControls
          word={word}
          maxLength={maxLength}
          isGenerating={isGenerating}
          onWordChange={handleWordChange}
          onGenerateRandom={handleGenerateRandom}
          onExportSvg={handleExportSvg}
          onMaxLengthChange={handleMaxLengthChange}
        />
      </div>
      
      {/* History Section */}
      <FlagHistory
        onSelectWord={handleWordChange}
      />
    </div>
  );
};

export default FlagSystem;
