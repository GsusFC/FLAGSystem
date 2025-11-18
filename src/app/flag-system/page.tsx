'use client'

import React from 'react';
import { FlagHistoryProvider } from '../../contexts/FlagHistoryContext';
import FlagSystem from '../../components/flag-system/FlagSystem';
import { Banner } from '../../components/ui/Banner';

export default function FlagSystemPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Banner
        title="⚓ FLAG SYSTEM"
        subtitle="International nautical alphabet visualization system. Create words and display them with their corresponding signal flags."
      />

      <div className="w-full">
        <FlagHistoryProvider>
          <FlagSystem />
        </FlagHistoryProvider>
      </div>
    </div>
  );
}
