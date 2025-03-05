import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FlagHistoryContextType {
  history: string[];
  addToHistory: (word: string) => void;
  clearHistory: () => void;
}

const FlagHistoryContext = createContext<FlagHistoryContextType | undefined>(undefined);

export function useFlagHistory() {
  const context = useContext(FlagHistoryContext);
  
  if (!context) {
    throw new Error('useFlagHistory must be used within a FlagHistoryProvider');
  }
  
  return context;
}

interface FlagHistoryProviderProps {
  children: ReactNode;
}

export function FlagHistoryProvider({ children }: FlagHistoryProviderProps) {
  const [history, setHistory] = useState<string[]>([]);
  
  const addToHistory = (word: string) => {
    if (!word) return;
    
    // Remove if already exists (to move it to the front)
    const filtered = history.filter(w => w !== word);
    
    // Add to front
    setHistory([word, ...filtered].slice(0, 20)); // Keep max 20 items
  };
  
  const clearHistory = () => {
    setHistory([]);
  };
  
  const value = {
    history,
    addToHistory,
    clearHistory
  };
  
  return (
    <FlagHistoryContext.Provider value={value}>
      {children}
    </FlagHistoryContext.Provider>
  );
}
