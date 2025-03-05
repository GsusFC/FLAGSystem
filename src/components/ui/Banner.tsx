'use client'

import React from 'react'

interface BannerProps {
  title: string
  subtitle?: string
  className?: string
}

export function Banner({ title, subtitle, className = '' }: BannerProps) {
  return (
    <div className={`w-full py-8 px-4 md:px-8 bg-gradient-banner ${className}`}>
      <div className="mx-auto max-w-6xl">
        <h1 className="font-druk text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-2 text-gradient">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-grid-white opacity-10 pointer-events-none"></div>
    </div>
  )
}
