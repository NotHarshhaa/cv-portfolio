'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { GitHubIcon } from '@/components/icons'
import { Corners } from '@/components/frame'

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

    rafRef.current = setTimeout(tick, 200)

    return () => {
      if (rafRef.current) clearTimeout(rafRef.current)
    }
  }, [value])

  const digits = displayed.toLocaleString('en').split('')

  return (
    <span className="inline-flex tabular-nums font-mono font-medium">
      {digits.map((char, i) => (
        <FlipDigit key={`${i}-${char}`} digit={char} index={i} />
      ))}
    </span>
  )
}

export function GithubFollowersBadge({ className }: { className?: string }) {
  const [followers, setFollowers] = useState<number | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchFollowers() {
      try {
        const res = await fetch('/api/github')
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)
        const data = await res.json()
        if (!cancelled && typeof data.followers === 'number') {
          setFollowers(data.followers)
        }
      } catch {
        // Fallback to initial count
        if (!cancelled) setFollowers(3581)
      }
    }

    fetchFollowers()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <a
      href="https://github.com/NotHarshhaa"
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center gap-1.5 px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground ${
        className ?? ''
      }`}
      title="GitHub followers (@NotHarshhaa)"
      aria-label="GitHub followers (@NotHarshhaa)"
    >
      <Corners className="transition-colors group-hover:border-primary/80" />
      <GitHubIcon className="size-3.5 text-foreground transition-transform duration-200 group-hover:scale-110" />
      {followers === null ? (
        <span className="font-mono text-xs tabular-nums opacity-40">3,581</span>
      ) : (
        <span className="inline-flex items-baseline gap-1 text-xs">
          <AnimatedNumber value={followers} />
          <span className="text-[11px] text-muted-foreground transition-colors group-hover:text-foreground">
            followers
          </span>
        </span>
      )}
    </a>
  )
}
