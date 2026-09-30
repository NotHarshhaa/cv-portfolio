'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Eye } from 'lucide-react'
import { Corners } from '@/components/frame'

// ── Animated counter ported from the reference portfolio ────────────────────

function FlipDigit({ digit, index }: { digit: string; index: number }) {
  return (
    <span className="relative inline-flex h-[1.2em] overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={digit}
          initial={{ y: '100%', opacity: 0, filter: 'blur(4px)' }}
          animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: '-100%', opacity: 0, filter: 'blur(4px)' }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
            delay: index * 0.04
          }}
          className="inline-block"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

function AnimatedNumber({ value }: { value: number }) {
  const [displayed, setDisplayed] = useState(0)
  const rafRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!value) return

    const duration = 1200
    const steps = 30
    const increment = value / steps
    let current = 0
    let step = 0

    const tick = () => {
      step++
      current = step === steps ? value : Math.floor(increment * step)
      setDisplayed(current)
      if (step < steps) {
        rafRef.current = setTimeout(tick, duration / steps)
      }
    }

    rafRef.current = setTimeout(tick, 300) // slight initial delay

    return () => {
      if (rafRef.current) clearTimeout(rafRef.current)
    }
  }, [value])

  const digits = displayed.toLocaleString('en').split('')

  return (
    <span className="inline-flex tabular-nums">
      {digits.map((char, i) => (
        <FlipDigit key={`${i}-${char}`} digit={char} index={i} />
      ))}
    </span>
  )
}

// ── Badge ─────────────────────────────────────────────────────────────────────

export function ViewsBadge({ className }: { className?: string }) {
  const [views, setViews] = useState<number | null>(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        // Count one visit per browser session so refreshes don't inflate it
        const counted = sessionStorage.getItem('views-counted')
        const res = await fetch('/api/views', { method: counted ? 'GET' : 'POST' })
        if (!res.ok) throw new Error(`views API error: ${res.status}`)
        const data = await res.json()
        if (!counted) sessionStorage.setItem('views-counted', '1')
        if (!cancelled) setViews(data.views)
      } catch {
        // Leave the badge hidden on failure rather than showing a wrong count
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div
      className={`relative inline-flex items-center gap-1.5 px-2 py-1 text-sm text-muted-foreground ${className ?? ''}`}
      title="Total visitors"
    >
      <Corners />
      <Eye className="size-4" />
      {views === null ? (
        <span className="tabular-nums opacity-30">0000</span>
      ) : (
        <AnimatedNumber value={views} />
      )}
    </div>
  )
}
