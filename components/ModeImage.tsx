'use client'

import React from 'react'
import { useTheme } from 'next-themes'

interface ModeImageProps {
  filename: string
}

const ModeImage = ({ filename }: ModeImageProps) => {
  const { theme } = useTheme()

  const imageUrl =
    theme === 'dark' ? `/static/images/dark-${filename}` : `/static/images/${filename}`

  return <img src={imageUrl} alt={filename} />
}

export default ModeImage
