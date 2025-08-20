"use client"

import { useEffect, useState } from 'react'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

interface AnimatedCounterProps {
  end: number
  start?: number
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
}

export function AnimatedCounter({
  end,
  start = 0,
  duration = 2000,
  className = "",
  prefix = "",
  suffix = ""
}: AnimatedCounterProps) {
  const [count, setCount] = useState(start)
  const { elementRef, isIntersecting } = useIntersectionObserver({ threshold: 0.3 })

  useEffect(() => {
    if (!isIntersecting) return

    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * (end - start) + start)
      
      setCount(currentCount)
      
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    
    window.requestAnimationFrame(step)
  }, [isIntersecting, end, start, duration])

  return (
    <span ref={elementRef} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
} 