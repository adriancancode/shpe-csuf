"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface HorizontalScrollProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

export function HorizontalScroll({ children, className = "", speed = 1 }: HorizontalScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${speed * 50}%`])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{ x }}
        className="flex space-x-8 whitespace-nowrap"
      >
        {children}
      </motion.div>
    </div>
  )
} 