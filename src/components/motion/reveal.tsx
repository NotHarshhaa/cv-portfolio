'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Seconds to wait before the animation starts. */
  delay?: number
  /** Vertical offset (px) the content rises from. */
  y?: number
  /** Animate on mount instead of waiting for the element to scroll into view. */
  immediate?: boolean
}

/**
 * Fade-up + blur reveal driven by framer-motion. Content is server-rendered
 * visible; the animation only nudges it once `in view` (or on mount), and
 * `prefers-reduced-motion` renders it statically. `data-reveal` lets the
 * print stylesheet force everything visible.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  immediate = false
}: RevealProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y, filter: 'blur(6px)' }}
      {...(immediate
        ? { animate: { opacity: 1, y: 0, filter: 'blur(0px)' } }
        : {
            whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
            viewport: { once: true, margin: '-64px' }
          })}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
