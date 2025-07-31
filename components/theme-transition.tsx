"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeTransition() {
  const { theme } = useTheme()
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => setIsTransitioning(false), 300)
    return () => clearTimeout(timer)
  }, [theme])

  // Simple transition - no complex animations
  return null
}
