'use client'

import React from 'react'

interface BannerProps {
  title: string
  subtitle?: string
  className?: string
}

export function Banner({ title, subtitle, className = '' }: BannerProps) {
  return (
    <div className={`relative w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-gradient-banner overflow-hidden ${className}`}>
      <div className="relative z-10 mx-auto max-w-7xl">
        <h1 className="font-druk text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter mb-3 sm:mb-4 text-gradient animate-pulse">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-grid-white opacity-5 pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
    </div>
  )
}
