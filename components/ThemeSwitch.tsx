'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { GeneralIcon } from './icons'
import useSound from 'use-sound'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  const [ThemeSound] = useSound('/static/sounds/switch-on.mp3')
  const ThemeSwitch = () => {
    setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  // When mounted on client, now show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <motion.button
        className="cursor-pointer"
        whileTap={{
          rotate: 360,
        }}
        whileHover={mounted ? { scale: 1.1 } : {}}
        transition={{ duration: 0.2, ease: 'easeIn' }}
        aria-label="Toggle Dark Mode"
        type="button"
        onClick={() => {
          ThemeSwitch()
          ThemeSound()
        }}
      >
        {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
          <GeneralIcon kind={'moon'} size={5} />
        ) : (
          <GeneralIcon kind={'sun'} size={5} />
        )}
      </motion.button>
    </>
  )
}

export default ThemeSwitch
