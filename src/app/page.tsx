'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Redireccionar a la página del sistema de banderas
    router.push('/flag-system')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">FLAG SYSTEM</h1>
        <p className="text-xl">Redireccionando al sistema de banderas...</p>
      </div>
    </div>
  )
}
