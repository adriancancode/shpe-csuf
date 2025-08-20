"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface StaggerTextProps {
  text: string
  className?: string
  delay?: number
}

export function StaggerText({ text, className = "", delay = 0 }: StaggerTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: delay * i,
      },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "8px" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
} 