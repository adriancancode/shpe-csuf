"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface FloatingTextProps {
  text: string
  className?: string
  speed?: number
  reverse?: boolean
}

export function FloatingText({ text, className = "", speed = 1, reverse = false }: FloatingTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const x = useTransform(
    scrollYProgress, 
    [0, 1], 
    reverse ? ["100%", "-100%"] : ["-100%", "100%"]
  )

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <div ref={ref} className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        style={{ x, opacity }}
        className="text-8xl md:text-9xl font-bold text-gray-200/20 select-none pointer-events-none"
        transition={{ ease: "linear" }}
      >
        {text}
      </motion.div>
    </div>
  )
} 