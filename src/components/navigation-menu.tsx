'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronRightIcon, MenuIcon, XIcon } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { HoverMark } from '@/components/hover-mark'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' }
]

function Corners({ className }: { className?: string }) {
  return (
    <>
      <span
        aria-hidden
        className={cn(
          'pointer-events-none absolute -top-px -left-px z-10 size-2.5 border-t-2 border-l-2 border-foreground/45 sm:size-3',
          className
        )}
      />
      <span
        aria-hidden
        className={cn(
          'pointer-events-none absolute -top-px -right-px z-10 size-2.5 border-t-2 border-r-2 border-foreground/45 sm:size-3',
          className
        )}
      />
      <span
        aria-hidden
        className={cn(
          'pointer-events-none absolute -bottom-px -left-px z-10 size-2.5 border-b-2 border-l-2 border-foreground/45 sm:size-3',
          className
        )}
      />
      <span
        aria-hidden
        className={cn(
          'pointer-events-none absolute -right-px -bottom-px z-10 size-2.5 border-b-2 border-r-2 border-foreground/45 sm:size-3',
          className
        )}
      />
    </>
  )
}

export function NavigationMenu() {
  const [activeSection, setActiveSection] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActiveSection(visible.target.id)
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-background/80 backdrop-blur-md print:hidden">
      <div className="site-shell pt-3 sm:pt-4">
        <div className="relative flex h-12 items-center justify-between overflow-visible border border-border bg-background/90 px-4 sm:h-14 sm:px-5">
          <Corners />

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="relative z-10 text-sm font-semibold tracking-[0.18em] uppercase"
          >
            Harshhaa
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {sections.map((section) => (
              <HoverMark key={section.id} className="px-2.5 py-1.5">
                <button
                  type="button"
                  onClick={() => scrollTo(section.id)}
                  className={cn(
                    'text-xs font-medium tracking-wide transition-colors',
                    activeSection === section.id
                      ? 'text-foreground'
                      : 'text-muted-foreground group-hover/mark:text-foreground'
                  )}
                >
                  {section.label}
                </button>
              </HoverMark>
            ))}
          </nav>

          <div className="relative z-10 flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <XIcon className="size-4" />
              ) : (
                <MenuIcon className="size-4" />
              )}
            </Button>
          </div>
        </div>

        {isOpen && (
          <nav
            className="relative -mt-px overflow-visible border border-t-0 border-border bg-background/95 md:hidden"
            aria-label="Mobile"
          >
            <Corners />
            <div className="border-b border-border px-4 py-3">
              <span className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                Navigate
              </span>
            </div>
            <ul className="flex flex-col">
              {sections.map((section, index) => {
                const active = activeSection === section.id
                return (
                  <HoverMark
                    as="li"
                    key={section.id}
                    label="Go"
                    className={
                      index < sections.length - 1
                        ? 'border-b border-border'
                        : undefined
                    }
                  >
                    <button
                      type="button"
                      onClick={() => scrollTo(section.id)}
                      className={cn(
                        'flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-sm transition-colors',
                        active
                          ? 'text-foreground'
                          : 'text-muted-foreground group-hover/mark:text-foreground'
                      )}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={cn(
                            'font-mono text-[10px] tracking-wider tabular-nums',
                            active
                              ? 'text-foreground'
                              : 'text-muted-foreground/60'
                          )}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        {section.label}
                      </span>
                      <ChevronRightIcon
                        className={cn(
                          'size-3.5 shrink-0 transition-transform group-hover/mark:translate-x-0.5',
                          active ? 'opacity-70' : 'opacity-40'
                        )}
                      />
                    </button>
                  </HoverMark>
                )
              })}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
