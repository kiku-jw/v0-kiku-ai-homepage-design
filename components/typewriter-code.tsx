"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const codeLines = [
  { text: '"action": ', value: '"SAFE_AUTO"', color: "text-emerald-400" },
  { text: '"action": ', value: '"REVIEW_ONLY"', color: "text-amber-400" },
]

export function TypewriterCode() {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayedValue, setDisplayedValue] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const line = codeLines[currentLine]
    if (isTyping) {
      if (displayedValue.length < line.value.length) {
        const timeout = setTimeout(() => {
          setDisplayedValue(line.value.slice(0, displayedValue.length + 1))
        }, 80)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 1500)
        return () => clearTimeout(timeout)
      }
    } else {
      const timeout = setTimeout(() => {
        setDisplayedValue("")
        setCurrentLine((prev) => (prev + 1) % codeLines.length)
        setIsTyping(true)
      }, 500)
      return () => clearTimeout(timeout)
    }
  }, [displayedValue, isTyping, currentLine])

  const line = codeLines[currentLine]

  return (
    <div className="space-y-0.5">
      <div className="text-muted-foreground">{"{"}</div>
      <div className="pl-2">
        <span className="text-cyan-400">{line.text}</span>
        <span className={line.color}>{displayedValue}</span>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
          className="inline-block w-1 bg-primary"
        >
          |
        </motion.span>
      </div>
      <div className="text-muted-foreground">{"}"}</div>
    </div>
  )
}
