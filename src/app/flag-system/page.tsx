'use client'

import React from 'react';
import { FlagHistoryProvider } from '../../contexts/FlagHistoryContext';
import FlagSystem from '../../components/flag-system/FlagSystem';
import { Banner } from '../../components/ui/Banner';

export default function FlagSystemPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Banner 
        title="FLAG SYSTEM"
        subtitle="International nautical alphabet visualization system. Create words and display them with their corresponding signal flags."
        className="relative overflow-hidden py-16"
      />
      
      <div className="container mx-auto px-4 md:px-8 py-10">
        <FlagHistoryProvider>
          <FlagSystem />
        </FlagHistoryProvider>
      </div>
    </div>
  );
}
