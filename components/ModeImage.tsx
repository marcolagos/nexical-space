'use client'

import React from 'react'
import { useTheme } from 'next-themes'

interface ModeImageProps {
  filename: string
  darkMode: boolean
}

const ModeImage = ({ filename, darkMode = true }: ModeImageProps) => {
  const { theme } = useTheme()

  const imageUrl =
    theme === 'dark' && darkMode ? `/static/images/dark-${filename}` : `/static/images/${filename}`

  return <img src={imageUrl} alt={filename} />
}

export default ModeImage
