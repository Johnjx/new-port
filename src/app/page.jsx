'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Button } from '@radix-ui/themes'
import { useTheme } from 'next-themes'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main>
      <h1 className="text-5xl">Hello World!</h1>

      <div>
        The current theme is: {theme} <br />
        <button onClick={() => setTheme('light')}>Light Mode</button> |{' '}
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
        <br />
      </div>
    </main>
  )
}
