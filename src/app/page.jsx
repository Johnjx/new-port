'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Flex, Text, Button } from '@radix-ui/themes'
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
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :&#41;</Text>
        <Button>Let&apos;s go</Button>
      </Flex>
      <div>
        The current theme is: {theme} <br />
        <button onClick={() => setTheme('light')}>Light Mode</button> |{' '}
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
        <br />
        {/* system */}
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="system">System</option>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </div>
      <div className="w-40 h-40 bg-teal-100 dark:bg-purple-100"></div>
    </main>
  )
}
