'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

/** Thin teal progress bar pinned to the top edge of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4
  })

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left print:hidden"
      style={{
        scaleX,
        background:
          'linear-gradient(90deg, color-mix(in oklch, var(--primary) 55%, transparent), var(--primary))'
      }}
    />
  )
}
