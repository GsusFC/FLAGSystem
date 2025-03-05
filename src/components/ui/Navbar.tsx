'use client'

import React from 'react'
import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-druk text-xl text-white hover:text-blue-300 transition-colors">
              FLAG SYSTEM
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              <Link href="/flag-system" className="text-white/80 hover:text-white transition-colors">
                Flag Generator
              </Link>
              <a 
                href="https://github.com/GsusFC/FLAGSystem" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
