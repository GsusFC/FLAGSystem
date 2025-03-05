'use client'

import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-geist-sans' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>FLAG System - International Nautical Flag Visualization</title>
        <meta name="description" content="Visualize words as international nautical flags" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} min-h-screen bg-black text-white`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
