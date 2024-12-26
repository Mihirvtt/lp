import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface DynamicTextProps {
  texts: string[]
  className?: string
}

export default function DynamicText({ texts, className = '' }: DynamicTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [texts])

  return (
    <span className={`inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="font-bold"
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}