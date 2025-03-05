'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { useEffect } from 'react'
import { Navbar } from '../components/ui/Navbar'

const inter = Inter({ subsets: ['latin'], variable: '--font-geist-sans' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Add Fathom Analytics or similar here if needed
  useEffect(() => {
    // Preload any specific assets if needed
    document.body.classList.add('font-loaded');
  }, []);

  return (
    <html lang="en">
      <head>
        <title>FLAG System - International Nautical Flag Visualization</title>
        <meta name="description" content="Visualize words as international nautical flags" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.variable} min-h-screen bg-black text-white`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
